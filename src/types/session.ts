import { TemporizadorPersonalizado } from "./preset";

export type FaseSessao = "foco" | "pausaCurta" | "pausaLonga";
export type StatusSessao = "emAndamento" | "pausada" | "concluida";

export type SnapshotPreset = Omit<
  TemporizadorPersonalizado,
  "id" | "criadoEm" | "atualizadoEm"
>;

export interface SessaoAtiva {
  id: string;
  presetId: string;
  snapshotPreset: SnapshotPreset;
  faseAtual: FaseSessao;
  cicloAtual: number;
  status: StatusSessao;
  inicioFaseEm: number;
  fimFasePrevistoEm: number;
  pausadaEm: number | null;
  tempoRestanteAoPausarMs: number | null;
  criadaEm: number;
  atualizadaEm: number;
}
