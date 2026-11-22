//usePresets.ts
import { useCallback, useEffect, useMemo, useState } from "react";
import type { DadosPreset, TemporizadorPersonalizado } from "../types/preset";
import {
  carregarPresetsStorage,
  salvarPresetsStorage,
} from "../services/presetStorage";
import { validarPreset } from "../utils/presetValidation";

const PRESET_PADRAO: TemporizadorPersonalizado = {
  id: "preset-padrao",
  nome: "Pomodoro Clássico",
  tempoFocoMin: 25,
  tempoPausaCurtaMin: 5,
  ciclosAntesPausaLonga: 4,
  tempoPausaLongaMin: 15,
  criadoEm: Date.now(),
  atualizadoEm: Date.now(),
};

export function usePresets(presetEmUsoId: string | null) {
  const [presets, setPresets] = useState<TemporizadorPersonalizado[]>([]);
  const [selecionadoId, setSelecionadoId] = useState<string | null>(null);
  const [erroPersistencia, setErroPersistencia] = useState<string | null>(null);

  useEffect(() => {
    const resultado = carregarPresetsStorage();

    if (resultado.sucesso && resultado.dados) {
      setPresets(resultado.dados);
      return;
    }

    const salvamento = salvarPresetsStorage([PRESET_PADRAO]);
    setPresets([PRESET_PADRAO]);
    setErroPersistencia(
      resultado.erro ??
        (salvamento.sucesso
          ? null
          : (salvamento.erro ?? "Erro ao salvar presets.")),
    );
  }, []);

  const persistir = useCallback((novosPresets: TemporizadorPersonalizado[]) => {
    const res = salvarPresetsStorage(novosPresets);
    setErroPersistencia(
      res.sucesso ? null : (res.erro ?? "Erro ao salvar presets."),
    );
    setPresets(novosPresets);
  }, []);

  const presetSelecionado = useMemo(
    () =>
      presets.find((p) => p.id === presetEmUsoId) ??
      presets.find((p) => p.id === selecionadoId) ??
      presets[0] ??
      null,
    [presets, presetEmUsoId, selecionadoId],
  );

  const criarPreset = useCallback(
    (dados: DadosPreset): boolean => {
      if (Object.keys(validarPreset(dados)).length > 0) return false;
      if (presetEmUsoId !== null) return false;

      const agora = Date.now();
      const novoPreset: TemporizadorPersonalizado = {
        ...dados,
        nome: dados.nome.trim(),
        id:
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `preset-${agora}`,
        criadoEm: agora,
        atualizadoEm: agora,
      };

      persistir([...presets, novoPreset]);
      return true;
    },
    [presets, presetEmUsoId, persistir],
  );

  const editarPreset = useCallback(
    (id: string, dados: DadosPreset): boolean => {
      if (id === presetEmUsoId) return false;
      if (!presets.some((p) => p.id === id)) return false;
      if (Object.keys(validarPreset(dados)).length > 0) return false;

      const agora = Date.now();
      persistir(
        presets.map((p) =>
          p.id === id
            ? { ...p, ...dados, nome: dados.nome.trim(), atualizadoEm: agora }
            : p,
        ),
      );
      return true;
    },
    [presets, presetEmUsoId, persistir],
  );

  const excluirPreset = useCallback(
    (id: string): boolean => {
      if (id === presetEmUsoId) return false;
      if (!presets.some((p) => p.id === id)) return false;

      persistir(presets.filter((p) => p.id !== id));
      return true;
    },
    [presets, presetEmUsoId, persistir],
  );

  return {
    presets,
    presetSelecionado,
    erroPersistencia,
    selecionarPreset: setSelecionadoId,
    criarPreset,
    editarPreset,
    excluirPreset,
    limparErroPersistencia: () => setErroPersistencia(null),
  };
}
