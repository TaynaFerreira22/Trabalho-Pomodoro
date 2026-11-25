import type { EstadoTarefa, PrioridadeTarefa, Tarefa } from "../types/task";

// RN-10 / RF-19: 1º prioridade decrescente (alta > media > baixa)
const PESO_PRIORIDADE: Record<PrioridadeTarefa, number> = {
  alta: 0,
  media: 1,
  baixa: 2,
};

// RN-10 / RF-19: 2º estado (aFazer > emExecucao > concluida > cancelada > backlog)
const PESO_ESTADO: Record<EstadoTarefa, number> = {
  aFazer: 0,
  emExecucao: 1,
  concluida: 2,
  cancelada: 3,
  backlog: 4,
};

function obterEstado(tarefa: Tarefa): EstadoTarefa {
  return tarefa.estado ?? tarefa.status ?? "backlog";
}

/**
 * RN-10: Ordenação fixa das tarefas.
 * 1. Prioridade decrescente: alta > media > baixa.
 * 2. Estado: aFazer > emExecucao > concluida > cancelada > backlog.
 * 3. Ordem de criação mais antiga primeiro (desempate determinístico por id).
 */
export function ordenarTarefasFixo(tarefas: readonly Tarefa[]): Tarefa[] {
  return [...tarefas].sort((a, b) => {
    const diffPrioridade =
      PESO_PRIORIDADE[a.prioridade] - PESO_PRIORIDADE[b.prioridade];
    if (diffPrioridade !== 0) {
      return diffPrioridade;
    }

    const diffEstado = PESO_ESTADO[obterEstado(a)] - PESO_ESTADO[obterEstado(b)];
    if (diffEstado !== 0) {
      return diffEstado;
    }

    if (a.criadaEm !== b.criadaEm) {
      return a.criadaEm - b.criadaEm;
    }

    return a.id.localeCompare(b.id);
  });
}
