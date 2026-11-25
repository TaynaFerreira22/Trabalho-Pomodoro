import { useCallback, useEffect, useMemo, useState } from "react";
import {
  carregarTarefasStorage,
  salvarTarefasStorage,
} from "../services/taskStorage";
import type { EntradaTarefa, EstadoTarefa, Tarefa } from "../types/task";
import { ordenarTarefasFixo } from "../utils/taskSort";

function gerarIdTarefa(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `tarefa-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function tituloValido(titulo: string): boolean {
  const tamanho = titulo.trim().length;
  return tamanho >= 1 && tamanho <= 100;
}

function estadoDaTarefa(tarefa: Tarefa): EstadoTarefa {
  return tarefa.estado ?? tarefa.status ?? "backlog";
}

export function useTasks() {
  const estadoInicial = useMemo(() => carregarTarefasStorage(), []);

  const [tarefasBrutas, setTarefasBrutas] = useState<Tarefa[]>(
    estadoInicial.sucesso ? estadoInicial.dados : [],
  );
  const [tarefaAtivaId, setTarefaAtivaId] = useState<string | null>(() => {
    if (!estadoInicial.sucesso) return null;
    const ordenadas = ordenarTarefasFixo(estadoInicial.dados);
    return (
      ordenadas.find((t) => estadoDaTarefa(t) !== "concluida")?.id ?? null
    );
  });
  const [erroPersistencia, setErroPersistencia] = useState<string | null>(
    estadoInicial.sucesso ? null : (estadoInicial.erro ?? null),
  );

  const tarefas = useMemo(
    () => ordenarTarefasFixo(tarefasBrutas),
    [tarefasBrutas],
  );

  useEffect(() => {
    const res = salvarTarefasStorage(tarefasBrutas);
    if (!res.sucesso) {
      setErroPersistencia(res.erro ?? "Erro ao salvar tarefas.");
    }
  }, [tarefasBrutas]);

  const criarTarefa = useCallback((entrada: EntradaTarefa): Tarefa | null => {
    const tituloLimpo = entrada.titulo.trim();
    if (!tituloValido(tituloLimpo)) return null;

    const agora = Date.now();
    // RN-12: valores padrão "backlog" e "media"
    const estadoInicialTarefa: EstadoTarefa =
      entrada.estado ?? entrada.status ?? "backlog";

    const novaTarefa: Tarefa = {
      id: gerarIdTarefa(),
      titulo: tituloLimpo,
      descricao: entrada.descricao?.trim() || undefined,
      estado: estadoInicialTarefa,
      status: estadoInicialTarefa,
      prioridade: entrada.prioridade ?? "media",
      pomodorosEstimados: Math.max(
        1,
        Math.min(20, Math.floor(entrada.pomodorosEstimados ?? 1)),
      ),
      pomodorosConcluidos: 0,
      criadaEm: agora,
      atualizadaEm: agora,
    };

    setTarefasBrutas((prev) => [...prev, novaTarefa]);
    setTarefaAtivaId((atual) =>
      atual ?? (estadoInicialTarefa !== "concluida" ? novaTarefa.id : null),
    );

    return novaTarefa;
  }, []);

  const editarTarefa = useCallback((id: string, entrada: EntradaTarefa) => {
    const tituloLimpo = entrada.titulo.trim();
    if (!tituloValido(tituloLimpo)) return;

    const agora = Date.now();
    setTarefasBrutas((prev) =>
      prev.map((tarefa) => {
        if (tarefa.id !== id) return tarefa;

        const proximoEstado: EstadoTarefa =
          entrada.estado ?? entrada.status ?? estadoDaTarefa(tarefa);

        return {
          ...tarefa,
          titulo: tituloLimpo,
          descricao:
            entrada.descricao !== undefined
              ? entrada.descricao.trim() || undefined
              : tarefa.descricao,
          estado: proximoEstado,
          status: proximoEstado,
          prioridade: entrada.prioridade ?? tarefa.prioridade,
          pomodorosEstimados:
            entrada.pomodorosEstimados !== undefined
              ? Math.max(1, Math.min(20, Math.floor(entrada.pomodorosEstimados)))
              : tarefa.pomodorosEstimados,
          atualizadaEm: agora,
        };
      }),
    );
  }, []);

  const alterarEstadoTarefa = useCallback((id: string, novoEstado: EstadoTarefa) => {
    const agora = Date.now();
    setTarefasBrutas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id
          ? {
              ...tarefa,
              estado: novoEstado,
              status: novoEstado,
              atualizadaEm: agora,
            }
          : tarefa,
      ),
    );
  }, []);

  const alternarConclusaoTarefa = useCallback((id: string) => {
    const agora = Date.now();
    setTarefasBrutas((prev) =>
      prev.map((tarefa) => {
        if (tarefa.id !== id) return tarefa;
        const concluindo = estadoDaTarefa(tarefa) !== "concluida";
        const proximoEstado: EstadoTarefa = concluindo ? "concluida" : "backlog";
        return {
          ...tarefa,
          estado: proximoEstado,
          status: proximoEstado,
          atualizadaEm: agora,
        };
      }),
    );
  }, []);

  const excluirTarefa = useCallback((id: string) => {
    setTarefasBrutas((prev) => prev.filter((tarefa) => tarefa.id !== id));
    setTarefaAtivaId((atual) => (atual === id ? null : atual));
  }, []);

  const incrementarPomodoroTarefa = useCallback((id: string | null) => {
    if (!id) return;
    const agora = Date.now();

    setTarefasBrutas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id
          ? {
              ...tarefa,
              pomodorosConcluidos: tarefa.pomodorosConcluidos + 1,
              atualizadaEm: agora,
            }
          : tarefa,
      ),
    );
  }, []);

  const limparConcluidas = useCallback(() => {
    setTarefasBrutas((prev) => {
      const restantes = prev.filter(
        (tarefa) => estadoDaTarefa(tarefa) !== "concluida",
      );
      setTarefaAtivaId((atual) =>
        restantes.some(
          (t) => t.id === atual && estadoDaTarefa(t) !== "concluida",
        )
          ? atual
          : (ordenarTarefasFixo(restantes).find(
              (t) => estadoDaTarefa(t) !== "concluida",
            )?.id ?? null),
      );
      return restantes;
    });
  }, []);

  const tarefaAtiva = useMemo(
    () => tarefas.find((tarefa) => tarefa.id === tarefaAtivaId) ?? null,
    [tarefas, tarefaAtivaId],
  );

  return {
    tarefas,
    tarefaAtiva,
    tarefaAtivaId,
    erroPersistencia,
    setTarefaAtivaId,
    criarTarefa,
    editarTarefa,
    alterarEstadoTarefa,
    alternarConclusaoTarefa,
    excluirTarefa,
    incrementarPomodoroTarefa,
    limparConcluidas,
    limparErroPersistencia: () => setErroPersistencia(null),
  };
}
