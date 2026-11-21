import { useEffect, useState, type FormEvent } from "react";
import { ConfirmDialog } from "../Common/ConfirmDialog";
import type {
  EntradaTarefa,
  PrioridadeTarefa,
  StatusTarefa,
  Tarefa,
} from "../../types/task";

export interface TaskPanelProps {
  tarefas?: Tarefa[];
  tarefaAtivaId?: string | null;
  erro?: string | null;
  aoSelecionarTarefa?: (id: string) => void;
  aoCriarTarefa?: (entrada: EntradaTarefa) => void;
  aoEditarTarefa?: (id: string, entrada: EntradaTarefa) => void;
  aoAlternarConclusao?: (id: string) => void;
  aoExcluirTarefa?: (id: string) => void;
  aoLimparConcluidas?: () => void;
  aoLimparErro?: () => void;
}

interface EstadoModalTarefa {
  modo: "criar" | "editar";
  tarefa?: Tarefa;
}

const ROTULO_STATUS: Record<StatusTarefa, string> = {
  backlog: "Backlog",
  emAndamento: "Em andamento",
  concluida: "Concluída",
};

const ROTULO_PRIORIDADE: Record<PrioridadeTarefa, string> = {
  alta: "Alta",
  media: "Média",
  baixa: "Baixa",
};

const ESTILO_PRIORIDADE: Record<PrioridadeTarefa, string> = {
  alta: "bg-red-100 text-red-700 border-red-200",
  media: "bg-amber-100 text-amber-800 border-amber-200",
  baixa: "bg-slate-100 text-slate-600 border-slate-200",
};

export function TaskPanel({
  tarefas = [],
  tarefaAtivaId = null,
  erro = null,
  aoSelecionarTarefa,
  aoCriarTarefa,
  aoEditarTarefa,
  aoAlternarConclusao,
  aoExcluirTarefa,
  aoLimparConcluidas,
  aoLimparErro,
}: TaskPanelProps) {
  const [modalTarefa, setModalTarefa] = useState<EstadoModalTarefa | null>(
    null,
  );
  const [tarefaParaExcluir, setTarefaParaExcluir] = useState<Tarefa | null>(
    null,
  );

  // RN-12: Valores padrão "backlog" e "media"
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState<StatusTarefa>("backlog");
  const [prioridade, setPrioridade] = useState<PrioridadeTarefa>("media");
  const [pomodorosEstimados, setPomodorosEstimados] = useState(1);
  const [erroValidacao, setErroValidacao] = useState<string | null>(null);

  useEffect(() => {
    if (!modalTarefa) {
      setErroValidacao(null);
      return;
    }

    if (modalTarefa.modo === "editar" && modalTarefa.tarefa) {
      setTitulo(modalTarefa.tarefa.titulo);
      setDescricao(modalTarefa.tarefa.descricao ?? "");
      setStatus(modalTarefa.tarefa.status);
      setPrioridade(modalTarefa.tarefa.prioridade);
      setPomodorosEstimados(modalTarefa.tarefa.pomodorosEstimados);
    } else {
      setTitulo("");
      setDescricao("");
      setStatus("backlog");
      setPrioridade("media");
      setPomodorosEstimados(1);
    }
    setErroValidacao(null);
  }, [modalTarefa]);

  const totalConcluidas = tarefas.filter(
    (t) => t.status === "concluida",
  ).length;
  const tarefaEmFoco = tarefas.find((t) => t.id === tarefaAtivaId) ?? null;

  const abrirCriacao = () => {
    setModalTarefa({ modo: "criar" });
  };

  const abrirEdicao = (tarefa: Tarefa) => {
    setModalTarefa({ modo: "editar", tarefa });
  };

  const fecharModal = () => {
    setModalTarefa(null);
    setErroValidacao(null);
  };

  // VR-06 a VR-08: Validação de campos do formulário de tarefa
  const validarFormulario = (): EntradaTarefa | null => {
    const tituloLimpo = titulo.trim();
    if (!tituloLimpo) {
      setErroValidacao("Informe um título para a tarefa.");
      return null;
    }
    if (tituloLimpo.length > 120) {
      setErroValidacao("O título deve ter no máximo 120 caracteres.");
      return null;
    }
    if (
      !Number.isFinite(pomodorosEstimados) ||
      pomodorosEstimados < 1 ||
      pomodorosEstimados > 20
    ) {
      setErroValidacao(
        "A estimativa de pomodoros deve estar entre 1 e 20.",
      );
      return null;
    }

    return {
      titulo: tituloLimpo,
      descricao: descricao.trim() || undefined,
      status,
      prioridade,
      pomodorosEstimados: Math.floor(pomodorosEstimados),
    };
  };

  const handleSubmitModal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!modalTarefa) return;

    const dadosValidados = validarFormulario();
    if (!dadosValidados) return;

    if (modalTarefa.modo === "criar") {
      aoCriarTarefa?.(dadosValidados);
    } else if (modalTarefa.modo === "editar" && modalTarefa.tarefa) {
      aoEditarTarefa?.(modalTarefa.tarefa.id, dadosValidados);
    }

    fecharModal();
  };

  return (
    <aside
      aria-label="Painel lateral de tarefas"
      className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-slate-800">Tarefas</h2>
          <p className="truncate text-xs text-slate-500">
            {tarefaEmFoco
              ? `Foco atual: ${tarefaEmFoco.titulo}`
              : "Nenhuma tarefa selecionada"}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {totalConcluidas}/{tarefas.length}
          </span>
          <button
            type="button"
            onClick={abrirCriacao}
            className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 transition-colors"
          >
            + Nova Tarefa
          </button>
        </div>
      </div>

      {erro && (
        <div
          role="alert"
          className="flex items-center justify-between gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800"
        >
          <span>{erro}</span>
          {aoLimparErro && (
            <button
              type="button"
              onClick={aoLimparErro}
              className="rounded border border-red-200 bg-white px-2 py-0.5 font-medium text-red-700 hover:bg-red-100"
            >
              Fechar
            </button>
          )}
        </div>
      )}

      {tarefas.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-sm text-slate-500">Nenhuma tarefa cadastrada.</p>
          <button
            type="button"
            onClick={abrirCriacao}
            className="mt-3 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Criar primeira tarefa
          </button>
        </div>
      ) : (
        <ul className="flex flex-col gap-2.5 max-h-[32rem] overflow-y-auto pr-0.5">
          {tarefas.map((tarefa) => {
            const concluida = tarefa.status === "concluida";
            const estaAtiva = tarefa.id === tarefaAtivaId;

            return (
              <li
                key={tarefa.id}
                className={`rounded-lg border p-3 transition-colors ${
                  estaAtiva
                    ? "border-blue-400 bg-blue-50/50"
                    : "border-slate-200 bg-white hover:bg-slate-50/70"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-1 items-start gap-2.5">
                    <input
                      type="checkbox"
                      checked={concluida}
                      onChange={() => aoAlternarConclusao?.(tarefa.id)}
                      aria-label={`Marcar "${tarefa.titulo}" como concluída`}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />

                    <button
                      type="button"
                      onClick={() => aoSelecionarTarefa?.(tarefa.id)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <span
                        className={`block text-sm font-medium break-words ${
                          concluida
                            ? "line-through text-slate-400"
                            : "text-slate-800"
                        }`}
                      >
                        {tarefa.titulo}
                      </span>
                      {tarefa.descricao && (
                        <span className="mt-0.5 block text-xs text-slate-500 line-clamp-2">
                          {tarefa.descricao}
                        </span>
                      )}
                    </button>
                  </div>

                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      onClick={() => abrirEdicao(tarefa)}
                      aria-label={`Editar tarefa "${tarefa.titulo}"`}
                      className="rounded px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-200/70 transition-colors"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => setTarefaParaExcluir(tarefa)}
                      aria-label={`Excluir tarefa "${tarefa.titulo}"`}
                      className="rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Excluir
                    </button>
                  </div>
                </div>

                <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 pl-6 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span
                      className={`rounded-full border px-2 py-0.5 font-medium ${
                        ESTILO_PRIORIDADE[tarefa.prioridade]
                      }`}
                    >
                      {ROTULO_PRIORIDADE[tarefa.prioridade]}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
                      {ROTULO_STATUS[tarefa.status]}
                    </span>
                  </div>

                  <span className="font-medium text-slate-600">
                    {tarefa.pomodorosConcluidos}/{tarefa.pomodorosEstimados} pom
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {totalConcluidas > 0 && aoLimparConcluidas && (
        <div className="border-t border-slate-100 pt-3">
          <button
            type="button"
            onClick={aoLimparConcluidas}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Limpar concluídas ({totalConcluidas})
          </button>
        </div>
      )}

      {/* Modal de Criação / Edição de Tarefa */}
      {modalTarefa && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-modal-tarefa"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
        >
          <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-lg">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
              <h3
                id="titulo-modal-tarefa"
                className="text-base font-semibold text-slate-800"
              >
                {modalTarefa.modo === "criar" ? "Nova Tarefa" : "Editar Tarefa"}
              </h3>
              <button
                type="button"
                onClick={fecharModal}
                aria-label="Fechar modal de tarefa"
                className="rounded px-2 py-1 text-sm text-slate-500 hover:bg-slate-100"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmitModal} className="flex flex-col gap-3.5">
              {erroValidacao && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
                >
                  {erroValidacao}
                </div>
              )}

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="campo-titulo-tarefa"
                  className="text-xs font-medium text-slate-700"
                >
                  Título *
                </label>
                <input
                  id="campo-titulo-tarefa"
                  type="text"
                  maxLength={120}
                  value={titulo}
                  onChange={(e) => {
                    setTitulo(e.target.value);
                    if (erroValidacao) setErroValidacao(null);
                  }}
                  placeholder="Ex.: Implementar ordenação RN-10"
                  className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="campo-descricao-tarefa"
                  className="text-xs font-medium text-slate-700"
                >
                  Descrição
                </label>
                <textarea
                  id="campo-descricao-tarefa"
                  rows={2}
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Detalhes opcionais da tarefa..."
                  className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="campo-status-tarefa"
                    className="text-xs font-medium text-slate-700"
                  >
                    Status
                  </label>
                  <select
                    id="campo-status-tarefa"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as StatusTarefa)}
                    className="rounded-lg border border-slate-300 px-2.5 py-2 text-xs text-slate-800 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="backlog">Backlog</option>
                    <option value="emAndamento">Em andamento</option>
                    <option value="concluida">Concluída</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="campo-prioridade-tarefa"
                    className="text-xs font-medium text-slate-700"
                  >
                    Prioridade
                  </label>
                  <select
                    id="campo-prioridade-tarefa"
                    value={prioridade}
                    onChange={(e) =>
                      setPrioridade(e.target.value as PrioridadeTarefa)
                    }
                    className="rounded-lg border border-slate-300 px-2.5 py-2 text-xs text-slate-800 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="campo-estimativa-tarefa"
                    className="text-xs font-medium text-slate-700"
                  >
                    Pomodoros
                  </label>
                  <input
                    id="campo-estimativa-tarefa"
                    type="number"
                    min={1}
                    max={20}
                    value={pomodorosEstimados}
                    onChange={(e) => {
                      setPomodorosEstimados(Number(e.target.value));
                      if (erroValidacao) setErroValidacao(null);
                    }}
                    className="rounded-lg border border-slate-300 px-2.5 py-2 text-xs text-slate-800 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={fecharModal}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-colors"
                >
                  {modalTarefa.modo === "criar" ? "Criar Tarefa" : "Salvar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* RN-11: Reutilização de ConfirmDialog na exclusão de tarefas */}
      <ConfirmDialog
        isOpen={tarefaParaExcluir !== null}
        titulo="Excluir Tarefa?"
        mensagem={`Deseja realmente excluir a tarefa "${tarefaParaExcluir?.titulo ?? ""}"? Esta ação não pode ser desfeita.`}
        textoConfirmar="Excluir"
        variante="perigo"
        aoConfirmar={() => {
          if (tarefaParaExcluir) {
            aoExcluirTarefa?.(tarefaParaExcluir.id);
          }
          setTarefaParaExcluir(null);
        }}
        aoCancelar={() => setTarefaParaExcluir(null)}
      />
    </aside>
  );
}