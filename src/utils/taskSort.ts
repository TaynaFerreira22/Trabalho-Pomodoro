//taskSort.ts
import type { PrioridadeTarefa, Tarefa } from "../types/task";

const PESO_PRIORIDADE: Record<PrioridadeTarefa, number> = {
  alta: 0,
  media: 1,
  baixa: 2,
};

/**
 * RN-10: Ordenação fixa das tarefas.
 * 1. Tarefas concluídas vão para o final.
 * 2. Prioridade decrescente: alta -> media -> baixa.
 * 3. Ordem de criação mais antiga primeiro (desempate determinístico por id).
 */
export function ordenarTarefasFixo(tarefas: readonly Tarefa[]): Tarefa[] {
  return [...tarefas].sort((a, b) => {
    const aConcluida = a.status === "concluida" ? 1 : 0;
    const bConcluida = b.status === "concluida" ? 1 : 0;
    if (aConcluida !== bConcluida) {
      return aConcluida - bConcluida;
    }

    const diffPrioridade =
      PESO_PRIORIDADE[a.prioridade] - PESO_PRIORIDADE[b.prioridade];
    if (diffPrioridade !== 0) {
      return diffPrioridade;
    }

    if (a.criadaEm !== b.criadaEm) {
      return a.criadaEm - b.criadaEm;
    }

    return a.id.localeCompare(b.id);
  });
}
