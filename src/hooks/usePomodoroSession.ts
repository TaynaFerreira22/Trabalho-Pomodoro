// src/hooks/usePomodoroSession.ts

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { TemporizadorPersonalizado } from "../types/preset";
import type { FaseSessao, SessaoAtiva, SnapshotPreset } from "../types/session";
import {
  calcularProximaEtapa,
  calcularTempoRestanteMs,
  formatarTempoMMSS,
  obterDuracaoFaseMs,
  recalcularSessaoPorTimestamp,
} from "../utils/timeMath";
import {
  carregarSessaoStorage,
  removerSessaoStorage,
  salvarSessaoStorage,
} from "../services/sessionStorage";

export interface OpcoesUsePomodoroSession {
  /** Callback acionado sempre que uma fase termina naturalmente (RN-13 - Alerta Sonoro) */
  aoFinalizarFase?: (
    faseConcluida: FaseSessao,
    proximaFase: FaseSessao | null,
  ) => void;
}

export function usePomodoroSession(opcoes?: OpcoesUsePomodoroSession) {
  const [sessao, setSessao] = useState<SessaoAtiva | null>(null);
  const [tempoRestanteMs, setTempoRestanteMs] = useState<number>(0);
  const [foiRetomadaAutomaticamente, setFoiRetomadaAutomaticamente] =
    useState<boolean>(false);
  const [erroPersistencia, setErroPersistencia] = useState<string | null>(null);
  const [carregado, setCarregado] = useState<boolean>(false);

  const callbackFinalizarRef = useRef(opcoes?.aoFinalizarFase);
  callbackFinalizarRef.current = opcoes?.aoFinalizarFase;

  /**
   * Helper interno para atualizar o estado em memória e sincronizar com o localStorage.
   */
  const persistirEAtualizar = useCallback((novaSessao: SessaoAtiva | null) => {
    if (novaSessao === null) {
      const res = removerSessaoStorage();
      setErroPersistencia(
        res.sucesso ? null : (res.erro ?? "Erro ao limpar sessão."),
      );
      setSessao(null);
      setTempoRestanteMs(0);
      setFoiRetomadaAutomaticamente(false);
      return;
    }

    const res = salvarSessaoStorage(novaSessao);
    setErroPersistencia(
      res.sucesso ? null : (res.erro ?? "Erro ao salvar sessão."),
    );
    setSessao(novaSessao);
    setTempoRestanteMs(calcularTempoRestanteMs(novaSessao));
  }, []);

  /**
   * UC10: Restauração automática da sessão ao carregar/reabrir o navegador.
   */
  useEffect(() => {
    const resultado = carregarSessaoStorage();

    if (!resultado.sucesso) {
      // R-03: Estado corrompido detectado -> limpa armazenamento e reporta ao usuário
      removerSessaoStorage();
      setErroPersistencia(
        resultado.erro ?? "Sessão anterior inválida foi descartada.",
      );
      setCarregado(true);
      return;
    }

    if (!resultado.dados) {
      setCarregado(true);
      return;
    }

    const agora = Date.now();
    const { sessaoAtualizada } = recalcularSessaoPorTimestamp(
      resultado.dados,
      agora,
    );

    salvarSessaoStorage(sessaoAtualizada);
    setSessao(sessaoAtualizada);
    setTempoRestanteMs(calcularTempoRestanteMs(sessaoAtualizada, agora));
    setFoiRetomadaAutomaticamente(sessaoAtualizada.status !== "concluida");
    setCarregado(true);
  }, []);

  /**
   * Motor de contagem regressiva baseado em timestamps absolutos (RNF-03, R-02).
   * Executa a cada 250ms para manter precisão visual e detectar virada de fase sem drift.
   */
  useEffect(() => {
    if (!sessao || sessao.status !== "emAndamento") return;

    const atualizarRelogio = () => {
      const agora = Date.now();

      if (agora >= sessao.fimFasePrevistoEm) {
        const faseAnterior = sessao.faseAtual;
        const { sessaoAtualizada } = recalcularSessaoPorTimestamp(
          sessao,
          agora,
        );

        persistirEAtualizar(sessaoAtualizada);

        // RN-13: Emite alerta sonoro ao fim de cada fase concluída
        const proximaFase =
          sessaoAtualizada.status === "concluida"
            ? null
            : sessaoAtualizada.faseAtual;
        callbackFinalizarRef.current?.(faseAnterior, proximaFase);
      } else {
        setTempoRestanteMs(calcularTempoRestanteMs(sessao, agora));
      }
    };

    const intervalo = window.setInterval(atualizarRelogio, 250);
    return () => window.clearInterval(intervalo);
  }, [sessao, persistirEAtualizar]);

  /**
   * UC04 / UC09: Inicia uma nova sessão a partir de um preset.
   * Cria um snapshot imutável (RN-05) e substitui qualquer sessão anterior (RN-02).
   */
  const iniciarSessao = useCallback(
    (preset: TemporizadorPersonalizado) => {
      const agora = Date.now();
      const snapshot: SnapshotPreset = {
        nome: preset.nome,
        tempoFocoMin: preset.tempoFocoMin,
        tempoPausaCurtaMin: preset.tempoPausaCurtaMin,
        ciclosAntesPausaLonga: preset.ciclosAntesPausaLonga,
        tempoPausaLongaMin: preset.tempoPausaLongaMin,
      };

      const duracaoInicialMs = obterDuracaoFaseMs("foco", snapshot);

      const novaSessao: SessaoAtiva = {
        id:
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `sessao-${agora}`,
        presetId: preset.id,
        snapshotPreset: snapshot,
        faseAtual: "foco",
        cicloAtual: 1,
        status: "emAndamento",
        inicioFaseEm: agora,
        fimFasePrevistoEm: agora + duracaoInicialMs,
        pausadaEm: null,
        tempoRestanteAoPausarMs: null,
        criadaEm: agora,
        atualizadaEm: agora,
      };

      setFoiRetomadaAutomaticamente(false);
      persistirEAtualizar(novaSessao);
    },
    [persistirEAtualizar],
  );

  /**
   * UC05 (RF-06): Pausa a sessão em andamento preservando o saldo exato em ms.
   */
  const pausarSessao = useCallback(() => {
    if (!sessao || sessao.status !== "emAndamento") return;

    const agora = Date.now();
    const restanteMs = calcularTempoRestanteMs(sessao, agora);

    const sessaoPausada: SessaoAtiva = {
      ...sessao,
      status: "pausada",
      pausadaEm: agora,
      tempoRestanteAoPausarMs: restanteMs,
      atualizadaEm: agora,
    };

    persistirEAtualizar(sessaoPausada);
  }, [sessao, persistirEAtualizar]);

  /**
   * UC05 (RF-07): Retoma uma sessão pausada recalculando o novo fim da fase.
   */
  const retomarSessao = useCallback(() => {
    if (!sessao || sessao.status !== "pausada") return;

    const agora = Date.now();
    const saldoMs =
      sessao.tempoRestanteAoPausarMs ??
      obterDuracaoFaseMs(sessao.faseAtual, sessao.snapshotPreset);

    const sessaoRetomada: SessaoAtiva = {
      ...sessao,
      status: "emAndamento",
      inicioFaseEm: agora,
      fimFasePrevistoEm: agora + saldoMs,
      pausadaEm: null,
      tempoRestanteAoPausarMs: null,
      atualizadaEm: agora,
    };

    persistirEAtualizar(sessaoRetomada);
  }, [sessao, persistirEAtualizar]);

  /**
   * UC06 (RF-08 / RN-03): Avança manualmente para a próxima fase sem incrementar ciclos.
   */
  const pularFase = useCallback(() => {
    if (!sessao || sessao.status === "concluida") return;

    const agora = Date.now();
    const proxima = calcularProximaEtapa(
      sessao.faseAtual,
      sessao.cicloAtual,
      sessao.snapshotPreset,
      true, // foiPulada = true -> RN-03 não incrementa ciclos
    );

    if (proxima.concluiuSessao) {
      persistirEAtualizar({
        ...sessao,
        status: "concluida",
        pausadaEm: null,
        tempoRestanteAoPausarMs: 0,
        atualizadaEm: agora,
      });
      return;
    }

    const novaDuracaoMs = obterDuracaoFaseMs(
      proxima.fase,
      sessao.snapshotPreset,
    );
    const manterPausada = sessao.status === "pausada";

    const sessaoAvancada: SessaoAtiva = {
      ...sessao,
      faseAtual: proxima.fase,
      cicloAtual: proxima.ciclo,
      inicioFaseEm: agora,
      fimFasePrevistoEm: agora + novaDuracaoMs,
      pausadaEm: manterPausada ? agora : null,
      tempoRestanteAoPausarMs: manterPausada ? novaDuracaoMs : null,
      atualizadaEm: agora,
    };

    persistirEAtualizar(sessaoAvancada);
  }, [sessao, persistirEAtualizar]);

  /**
   * UC07 (RF-09 / RN-04): Zera os ciclos para 1 e volta para a fase de foco.
   * (A confirmação explícita é disparada pelo modal da Pessoa 4 antes de chamar esta função).
   */
  const reiniciarCiclos = useCallback(() => {
    if (!sessao) return;

    const agora = Date.now();
    const duracaoFocoMs = obterDuracaoFaseMs("foco", sessao.snapshotPreset);
    const manterPausada = sessao.status === "pausada";

    const sessaoReiniciada: SessaoAtiva = {
      ...sessao,
      faseAtual: "foco",
      cicloAtual: 1,
      status: manterPausada ? "pausada" : "emAndamento",
      inicioFaseEm: agora,
      fimFasePrevistoEm: agora + duracaoFocoMs,
      pausadaEm: manterPausada ? agora : null,
      tempoRestanteAoPausarMs: manterPausada ? duracaoFocoMs : null,
      atualizadaEm: agora,
    };

    persistirEAtualizar(sessaoReiniciada);
  }, [sessao, persistirEAtualizar]);

  /**
   * UC08 / UC11 (RF-10 / RF-13 / RN-01): Encerra ou descarta a sessão ativa,
   * removendo-a do localStorage e liberando o preset para edição/exclusão.
   */
  const encerrarOuDescartarSessao = useCallback(() => {
    persistirEAtualizar(null);
  }, [persistirEAtualizar]);

  /**
   * Dados derivados prontos para consumo direto pela UI (Pessoa 4) e Presets (Pessoa 2).
   */
  const dadosDerivados = useMemo(() => {
    const duracaoTotalFaseMs = sessao
      ? obterDuracaoFaseMs(sessao.faseAtual, sessao.snapshotPreset)
      : 0;

    const progressoPercentual =
      duracaoTotalFaseMs > 0
        ? Math.min(
            100,
            Math.max(
              0,
              ((duracaoTotalFaseMs - tempoRestanteMs) / duracaoTotalFaseMs) *
                100,
            ),
          )
        : 0;

    // RN-01: Enquanto houver sessão não concluída, o preset fica bloqueado para edição/exclusão
    const presetEmUsoId =
      sessao && sessao.status !== "concluida" ? sessao.presetId : null;

    return {
      tempoFormatado: formatarTempoMMSS(tempoRestanteMs),
      duracaoTotalFaseMs,
      progressoPercentual,
      presetEmUsoId,
      temSessaoAtiva: sessao !== null && sessao.status !== "concluida",
    };
  }, [sessao, tempoRestanteMs]);

  return {
    // Estado
    sessao,
    tempoRestanteMs,
    carregado,
    foiRetomadaAutomaticamente,
    erroPersistencia,
    ...dadosDerivados,

    // Ações (Casos de Uso)
    iniciarSessao,
    pausarSessao,
    retomarSessao,
    pularFase,
    reiniciarCiclos,
    encerrarSessao: encerrarOuDescartarSessao,
    descartarSessaoRetomada: encerrarOuDescartarSessao,
    limparErroPersistencia: () => setErroPersistencia(null),
  };
}
