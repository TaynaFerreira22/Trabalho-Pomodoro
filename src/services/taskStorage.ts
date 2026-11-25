import type {
  EstadoTarefa,
  PrioridadeTarefa,
  Tarefa,
} from "../types/task";

// Seção 11.4 / RNF-02: chave obrigatória de persistência das tarefas
export const CHAVE_TAREFAS = "pomodoro.tarefas";

const ESTADOS_VALIDOS: ReadonlySet<EstadoTarefa> = new Set([
  "backlog",
  "aFazer",
  "emExecucao",
  "concluida",
  "cancelada",
]);

const PRIORIDADES_VALIDAS: ReadonlySet<PrioridadeTarefa> = new Set([
  "baixa",
  "media",
  "alta",
]);

export interface ResultadoStorageTarefas {
  sucesso: boolean;
  dados: Tarefa[];
  erro?: string;
}

function normalizarTarefa(raw: unknown): Tarefa | null {
  if (typeof raw !== "object" || raw === null) return null;
  const item = raw as Record<string, unknown>;

  if (typeof item.id !== "string" || item.id.trim() === "") return null;
  if (typeof item.titulo !== "string") return null;

  const tituloLimpo = item.titulo.trim();
  // VR-06: título deve ter entre 1 e 100 caracteres
  if (tituloLimpo.length < 1 || tituloLimpo.length > 100) return null;

  // VR-07 / Seção 11.3: 5 estados obrigatórios
  const candidatoEstado = (item.estado ?? item.status) as
    | EstadoTarefa
    | undefined;
  const estado: EstadoTarefa =
    candidatoEstado && ESTADOS_VALIDOS.has(candidatoEstado)
      ? candidatoEstado
      : item.concluida === true
        ? "concluida"
        : "backlog";

  const prioridadeRaw = item.prioridade as PrioridadeTarefa;
  const prioridade: PrioridadeTarefa = PRIORIDADES_VALIDAS.has(prioridadeRaw)
    ? prioridadeRaw
    : "media";

  const pomodorosEstimados =
    typeof item.pomodorosEstimados === "number" &&
    Number.isFinite(item.pomodorosEstimados)
      ? Math.max(1, Math.min(20, Math.floor(item.pomodorosEstimados)))
      : 1;

  const pomodorosConcluidos =
    typeof item.pomodorosConcluidos === "number" &&
    Number.isFinite(item.pomodorosConcluidos)
      ? Math.max(0, Math.floor(item.pomodorosConcluidos))
      : 0;

  const criadaEm =
    typeof item.criadaEm === "number" && Number.isFinite(item.criadaEm)
      ? item.criadaEm
      : Date.now();

  const atualizadaEm =
    typeof item.atualizadaEm === "number" && Number.isFinite(item.atualizadaEm)
      ? item.atualizadaEm
      : criadaEm;

  return {
    id: item.id,
    titulo: tituloLimpo,
    descricao: typeof item.descricao === "string" ? item.descricao : undefined,
    estado,
    status: estado,
    prioridade,
    pomodorosEstimados,
    pomodorosConcluidos,
    criadaEm,
    atualizadaEm,
  };
}

export function carregarTarefasStorage(): ResultadoStorageTarefas {
  try {
    const bruto = localStorage.getItem(CHAVE_TAREFAS);
    if (!bruto) {
      return { sucesso: true, dados: [] };
    }

    const parsed: unknown = JSON.parse(bruto);
    if (!Array.isArray(parsed)) {
      return {
        sucesso: false,
        dados: [],
        erro: "Dados de tarefas corrompidos no armazenamento local.",
      };
    }

    const tarefas: Tarefa[] = [];
    for (const item of parsed) {
      const normalizada = normalizarTarefa(item);
      if (normalizada) {
        tarefas.push(normalizada);
      }
    }

    return { sucesso: true, dados: tarefas };
  } catch {
    return {
      sucesso: false,
      dados: [],
      erro: "Falha ao carregar tarefas do armazenamento local.",
    };
  }
}

export function salvarTarefasStorage(tarefas: Tarefa[]): {
  sucesso: boolean;
  erro?: string;
} {
  try {
    localStorage.setItem(CHAVE_TAREFAS, JSON.stringify(tarefas));
    return { sucesso: true };
  } catch {
    return {
      sucesso: false,
      erro: "Não foi possível salvar as tarefas no armazenamento local.",
    };
  }
}
