// src/utils/timeMath.ts

import { FaseSessao, SessaoAtiva, SnapshotPreset } from '@/types/session';

const MS_POR_MINUTO = 60_000;

/**
 * Retorna a duração em milissegundos de uma fase com base no snapshot do preset.
 */
export function obterDuracaoFaseMs(
  fase: FaseSessao,
  snapshot: SnapshotPreset
): number {
  switch (fase) {
    case 'foco':
      return snapshot.tempoFocoMin * MS_POR_MINUTO;
    case 'pausaCurta':
      return snapshot.tempoPausaCurtaMin * MS_POR_MINUTO;
    case 'pausaLonga':
      return snapshot.tempoPausaLongaMin * MS_POR_MINUTO;
  }
}

/**
 * Calcula quanto tempo resta (em ms) na fase atual a partir de um timestamp de referência.
 */
export function calcularTempoRestanteMs(
  sessao: SessaoAtiva,
  agoraMs: number = Date.now()
): number {
  if (sessao.status === 'concluida') return 0;

  if (sessao.status === 'pausada') {
    return Math.max(0, sessao.tempoRestanteAoPausarMs ?? 0);
  }

  return Math.max(0, sessao.fimFasePrevistoEm - agoraMs);
}

/**
 * Formata milissegundos para o padrão visual "MM:SS" (ex: 1500000 -> "25:00").
 * Usa Math.ceil para que o último segundo (ex: 400ms) ainda exiba "00:01" antes de zerar.
 */
export function formatarTempoMMSS(ms: number): string {
  const totalSegundos = Math.max(0, Math.ceil(ms / 1000));
  const minutos = Math.floor(totalSegundos / 60);
  const segundos = totalSegundos % 60;

  return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

interface ProximoPasso {
  fase: FaseSessao;
  ciclo: number;
  concluiuSessao: boolean;
}

/**
 * Determina qual é a próxima fase e ciclo ao concluir naturalmente OU pular uma fase.
 *
 * Regras aplicadas:
 * - Ciclo = 1 Foco + 1 Pausa (Glossário).
 * - Pausa longa ocorre após atingir `ciclosAntesPausaLonga`.
 * - RN-03: Pular fase NÃO incrementa a contagem de ciclos.
 */
export function calcularProximaEtapa(
  faseAtual: FaseSessao,
  cicloAtual: number,
  snapshot: SnapshotPreset,
  foiPulada: boolean
): ProximoPasso {
  const atingiuLimiteCiclos = cicloAtual >= snapshot.ciclosAntesPausaLonga;

  if (faseAtual === 'foco') {
    return {
      fase: atingiuLimiteCiclos ? 'pausaLonga' : 'pausaCurta',
      ciclo: cicloAtual,
      concluiuSessao: false,
    };
  }

  if (faseAtual === 'pausaCurta') {
    return {
      fase: 'foco',
      // Se concluiu naturalmente, avança o ciclo; se pulou (RN-03), mantém o ciclo atual
      ciclo: foiPulada ? cicloAtual : cicloAtual + 1,
      concluiuSessao: false,
    };
  }

  // Caso faseAtual === 'pausaLonga':
  // Fim da pausa longa encerra o bloco completo de ciclos previstos
  return {
    fase: 'foco',
    ciclo: cicloAtual,
    concluiuSessao: true,
  };
}

/**
 * Algoritmo de restauração e avanço automático por timestamps (UC10, RN-06, RN-07, RN-08).
 * Avança sequencialmente por todas as fases que venceram enquanto o navegador estava fechado
 * ou em segundo plano.
 */
export function recalcularSessaoPorTimestamp(
  sessao: SessaoAtiva,
  agoraMs: number = Date.now()
): { sessaoAtualizada: SessaoAtiva; houveTransicaoDeFase: boolean } {
  // RN-06: Sessão pausada retorna pausada sem avanço automático
  if (sessao.status !== 'emAndamento') {
    return { sessaoAtualizada: sessao, houveTransicaoDeFase: false };
  }

  // Se a fase atual ainda não venceu, não há transição a fazer
  if (agoraMs < sessao.fimFasePrevistoEm) {
    return { sessaoAtualizada: sessao, houveTransicaoDeFase: false };
  }

  let faseCorrente = sessao.faseAtual;
  let cicloCorrente = sessao.cicloAtual;
  let inicioCorrente = sessao.inicioFaseEm;
  let fimCorrente = sessao.fimFasePrevistoEm;
  let statusCorrente: SessaoAtiva['status'] = 'emAndamento';

  // Avança fase por fase até alcançar o timestamp atual ou concluir a sessão (RN-07)
  while (agoraMs >= fimCorrente && statusCorrente === 'emAndamento') {
    const proxima = calcularProximaEtapa(
      faseCorrente,
      cicloCorrente,
      sessao.snapshotPreset,
      false // Vencimento natural por tempo contabiliza o ciclo
    );

    if (proxima.concluiuSessao) {
      // RN-08: Todas as fases previstas venceram -> sessão encerrada como concluída
      statusCorrente = 'concluida';
      inicioCorrente = fimCorrente;
      break;
    }

    faseCorrente = proxima.fase;
    cicloCorrente = proxima.ciclo;
    inicioCorrente = fimCorrente;
    fimCorrente = inicioCorrente + obterDuracaoFaseMs(faseCorrente, sessao.snapshotPreset);
  }

  const sessaoAtualizada: SessaoAtiva = {
    ...sessao,
    faseAtual: faseCorrente,
    cicloAtual: cicloCorrente,
    status: statusCorrente,
    inicioFaseEm: inicioCorrente,
    fimFasePrevistoEm: fimCorrente,
    pausadaEm: null,
    tempoRestanteAoPausarMs: null,
    atualizadaEm: agoraMs,
  };

  return { sessaoAtualizada, houveTransicaoDeFase: true };
}