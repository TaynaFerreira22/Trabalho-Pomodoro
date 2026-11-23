// src/types/preset.ts

export interface TemporizadorPersonalizado {
  id: string;
  nome: string; // VR-01: 1 a 40 chars
  tempoFocoMin: number; // VR-02: 1 a 120
  tempoPausaCurtaMin: number; // VR-03: 1 a 60
  ciclosAntesPausaLonga: number; // VR-04: 1 a 12
  tempoPausaLongaMin: number; // VR-05: 1 a 60
  criadoEm: number; // Timestamp
  atualizadoEm: number; // Timestamp
}


export type DadosPreset = Omit<
  TemporizadorPersonalizado,
  "id" | "criadoEm" | "atualizadoEm"
>;

export type ErrosPreset = Partial<Record<keyof DadosPreset, string>>;

export const LIMITES_PRESET = {
  nome: { min: 1, max: 40 },
  tempoFocoMin: { min: 1, max: 120 },
  tempoPausaCurtaMin: { min: 1, max: 60 },
  ciclosAntesPausaLonga: { min: 1, max: 12 },
  tempoPausaLongaMin: { min: 1, max: 60 },
} as const;
