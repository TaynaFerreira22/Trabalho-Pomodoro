export * from "./preset";
export * from "./session";
export * from "./task";

export const STORAGE_KEYS = {
  PRESETS: "pomodoro.presets",
  TAREFAS: "pomodoro.tarefas",
  SESSAO_ATIVA: "pomodoro.sessaoAtiva",
} as const;
