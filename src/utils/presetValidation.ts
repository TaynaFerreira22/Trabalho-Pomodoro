import { LIMITES_PRESET } from "../types/preset";
import type { DadosPreset, ErrosPreset } from "../types/preset";

const CAMPOS_NUMERICOS = [
  "tempoFocoMin",
  "tempoPausaCurtaMin",
  "ciclosAntesPausaLonga",
  "tempoPausaLongaMin",
] as const;

export function validarPreset(dados: DadosPreset): ErrosPreset {
  const erros: ErrosPreset = {};

  const tamanhoNome = dados.nome.trim().length;
  if (
    tamanhoNome < LIMITES_PRESET.nome.min ||
    tamanhoNome > LIMITES_PRESET.nome.max
  ) {
    erros.nome = `O nome deve ter de ${LIMITES_PRESET.nome.min} a ${LIMITES_PRESET.nome.max} caracteres.`;
  }

  for (const campo of CAMPOS_NUMERICOS) {
    const { min, max } = LIMITES_PRESET[campo];
    const valor = dados[campo];
    if (!Number.isInteger(valor) || valor < min || valor > max) {
      erros[campo] = `Informe um número inteiro entre ${min} e ${max}.`;
    }
  }

  return erros;
}
