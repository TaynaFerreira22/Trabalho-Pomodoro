import { STORAGE_KEYS } from "../types";
import type { TemporizadorPersonalizado } from "../types/preset";
import { validarPreset } from "../utils/presetValidation";
import type { ResultadoPersistencia } from "./sessionStorage";

function validarIntegridadePreset(
  dado: unknown,
): dado is TemporizadorPersonalizado {
  if (!dado || typeof dado !== "object") return false;

  const p = dado as Record<string, unknown>;

  const temCamposBasicos =
    typeof p.id === "string" &&
    typeof p.nome === "string" &&
    typeof p.tempoFocoMin === "number" &&
    typeof p.tempoPausaCurtaMin === "number" &&
    typeof p.ciclosAntesPausaLonga === "number" &&
    typeof p.tempoPausaLongaMin === "number" &&
    typeof p.criadoEm === "number" &&
    typeof p.atualizadoEm === "number";

  if (!temCamposBasicos) return false;

  return (
    Object.keys(validarPreset(p as unknown as TemporizadorPersonalizado))
      .length === 0
  );
}

export function carregarPresetsStorage(): ResultadoPersistencia<
  TemporizadorPersonalizado[]
> {
  if (typeof window === "undefined") {
    return { sucesso: true, dados: null };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.PRESETS);
    if (!raw) {
      return { sucesso: true, dados: null };
    }

    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed) || !parsed.every(validarIntegridadePreset)) {
      return {
        sucesso: false,
        dados: null,
        erro: "Os presets salvos estavam corrompidos ou inconsistentes.",
      };
    }

    return { sucesso: true, dados: parsed };
  } catch {
    return {
      sucesso: false,
      dados: null,
      erro: "Não foi possível ler os presets no armazenamento local.",
    };
  }
}

export function salvarPresetsStorage(
  presets: TemporizadorPersonalizado[],
): ResultadoPersistencia<TemporizadorPersonalizado[]> {
  if (typeof window === "undefined") {
    return { sucesso: true, dados: presets };
  }

  try {
    window.localStorage.setItem(STORAGE_KEYS.PRESETS, JSON.stringify(presets));
    return { sucesso: true, dados: presets };
  } catch {
    return {
      sucesso: false,
      dados: null,
      erro: "Falha ao salvar os presets no navegador (Local Storage indisponível ou cheio).",
    };
  }
}
