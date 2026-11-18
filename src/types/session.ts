// src/types/session.ts

export type FaseSessao = 'foco' | 'pausaCurta' | 'pausaLonga';

export type StatusSessao = 'emAndamento' | 'pausada' | 'concluida';

/**
 * Cópia imutável dos parâmetros do preset no momento em que a sessão foi iniciada (RN-05).
 */
export interface SnapshotPreset {
  nome: string;
  tempoFocoMin: number;
  tempoPausaCurtaMin: number;
  ciclosAntesPausaLonga: number;
  tempoPausaLongaMin: number;
}

/**
 * Entidade principal da sessão ativa persistida em localStorage (Seção 11.2).
 */
export interface SessaoAtiva {
  id: string;
  presetId: string;
  snapshotPreset: SnapshotPreset;
  faseAtual: FaseSessao;
  cicloAtual: number; // Inteiro a partir de 1
  status: StatusSessao;
  inicioFaseEm: number; // Timestamp em ms
  fimFasePrevistoEm: number; // Timestamp em ms
  pausadaEm: number | null;
  tempoRestanteAoPausarMs: number | null;
  criadaEm: number;
  atualizadaEm: number;
}