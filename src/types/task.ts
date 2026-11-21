// src/types/task.ts

export type StatusTarefa = "backlog" | "emAndamento" | "concluida";
export type PrioridadeTarefa = "baixa" | "media" | "alta";

export interface Tarefa {
  id: string;
  titulo: string;
  descricao?: string;
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
  status?: StatusTarefa;
  prioridade?: PrioridadeTarefa;
  pomodorosEstimados?: number;
}