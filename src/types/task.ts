// src/types/task.ts

export type EstadoTarefa =
  | "backlog"
  | "aFazer"
  | "emExecucao"
  | "concluida"
  | "cancelada";

// Mantido como alias para compatibilidade com componentes/hooks existentes
export type StatusTarefa = EstadoTarefa;

export type PrioridadeTarefa = "baixa" | "media" | "alta";

export interface Tarefa {
  id: string;
  titulo: string;
  descricao?: string;
  estado: EstadoTarefa;
  status: StatusTarefa;
  prioridade: PrioridadeTarefa;
  pomodorosEstimados: number;
  pomodorosConcluidos: number;
  criadaEm: number;
  atualizadaEm: number;
}

export interface EntradaTarefa {
  titulo: string;
  descricao?: string;
  estado?: EstadoTarefa;
  status?: StatusTarefa;
  prioridade?: PrioridadeTarefa;
  pomodorosEstimados?: number;
}
