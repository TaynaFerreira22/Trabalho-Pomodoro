export type EstadoTarefa =
  | "backlog"
  | "aFazer"
  | "emExecucao"
  | "concluida"
  | "cancelada";
export type PrioridadeTarefa = "baixa" | "media" | "alta";

export interface Tarefa {
  id: string;
  titulo: string; // VR-06: 1 a 100 chars
  estado: EstadoTarefa; // RN-12: default 'backlog'
  prioridade: PrioridadeTarefa; // RN-12: default 'media'
  criadaEm: number;
  atualizadaEm: number;
}
