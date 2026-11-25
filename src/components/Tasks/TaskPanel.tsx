import { useEffect, useRef, useState, type FormEvent } from "react";
import { ConfirmDialog } from "../Common/ConfirmDialog";
import type {
  EntradaTarefa,
  EstadoTarefa,
  PrioridadeTarefa,
  Tarefa,
} from "../../types/task";

export interface TaskPanelProps {
  tarefas?: Tarefa[];
  tarefaAtivaId?: string | null;
  erro?: string | null;
  aoSelecionarTarefa?: (id: string) => void;
  aoCriarTarefa?: (entrada: EntradaTarefa) => void;
  aoEditarTarefa?: (id: string, entrada: EntradaTarefa) => void;
  aoAlterarEstado?: (id: string, estado: EstadoTarefa) => void;
  aoAlternarConclusao?: (id: string) => void;
  aoExcluirTarefa?: (id: string) => void;
  aoLimparConcluidas?: () => void;
  aoLimparErro?: () => void;
}

interface EstadoModalTarefa {
  modo: "criar" | "editar";
  tarefa?: Tarefa;
}

type ConfirmacaoPendente =
  | { tipo: "excluir"; tarefa: Tarefa }
  | { tipo: "limparConcluidas"; quantidade: number }
  | null;

const ESTADOS_TAREFA: EstadoTarefa[] = [
  "backlog",
  "aFazer",
  "emExecucao",
  "concluida",
  "cancelada",
];

const ROTULO_ESTADO: Record<EstadoTarefa, string> = {
  backlog: "Backlog",
  aFazer: "A fazer",
  emExecucao: "Em execução",
  concluida: "Concluída",
  cancelada: "Cancelada",
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

function obterEstado(tarefa: Tarefa): EstadoTarefa {
  return tarefa.estado ?? tarefa.status ?? "backlog";
}

export function TaskPanel({
  tarefas = [],
  tarefaAtivaId = null,
  erro = null,
  aoSelecionarTarefa,
  aoCriarTarefa,
  aoEditarTarefa,
  aoAlterarEstado,
  aoAlternarConclusao,
  aoExcluirTarefa,
  aoLimparConcluidas,
  aoLimparErro,
}: TaskPanelProps) {
  const [modalTarefa, setModalTarefa] = useState<EstadoModalTarefa | null>(
    null,
  );
  const [confirmacao, setConfirmacao] = useState<ConfirmacaoPendente>(null);

  // RN-12: Valores padrão "backlog" e "media"
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [estado, setEstado] = useState<EstadoTarefa>("backlog");
  const [prioridade, setPrioridade] = useState<PrioridadeTarefa>("media");
  const [pomodorosEstimados, setPomodorosEstimados] = useState(1);
  const [erroValidacao, setErroValidacao] = useState<string | null>(null);

  const modalBoxRef = useRef<HTMLDivElement>(null);
  const tituloInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!modalTarefa) {
      setErroValidacao(null);
      return;
    }

    if (modalTarefa.modo === "editar" && modalTarefa.tarefa) {
      setTitulo(modalTarefa.tarefa.titulo);
      setDescricao(modalTarefa.tarefa.descricao ?? "");
      setEstado(obterEstado(modalTarefa.tarefa));
      setPrioridade(modalTarefa.tarefa.prioridade);
      setPomodorosEstimados(modalTarefa.tarefa.pomodorosEstimados);
    } else {
      setTitulo("");
      setDescricao("");
      setEstado("backlog");
      setPrioridade("media");
      setPomodorosEstimados(1);
    }
    setErroValidacao(null);
  }, [modalTarefa]);

  // RNF-07: Foco inicial no título, fechar com Escape e travamento de foco com Tab
  useEffect(() => {
    if (!modalTarefa) return;

    tituloInputRef.current?.focus();

    const aoTecla = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setModalTarefa(null);
        setErroValidacao(null);
        return;
      }

      if (event.key === "Tab" && modalBoxRef.current) {
        const focaveis = Array.from(
          modalBoxRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((el) => el.offsetParent !== null);

        if (focaveis.length === 0) return;

        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];

        if (event.shiftKey) {
          if (
            document.activeElement === primeiro ||
            !modalBoxRef.current.contains(document.activeElement)
          ) {
            event.preventDefault();
            ultimo.focus();
          }
        } else {
          if (
            document.activeElement === ultimo ||
            !modalBoxRef.current.contains(document.activeElement)
          ) {
            event.preventDefault();
            primeiro.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", aoTecla);
    return () => window.removeEventListener("keydown", aoTecla);
  }, [modalTarefa]);

  const totalConcluidas = tarefas.filter(
    (t) => obterEstado(t) === "concluida",
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

  // VR-06: Título de 1 a 100 caracteres
  const validarFormulario = (): EntradaTarefa | null => {
    const tituloLimpo = titulo.trim();
    if (tituloLimpo.length < 1) {
      setErroValidacao("Informe um título para a tarefa (1 a 100 caracteres).");
      return null;
    }
    if (tituloLimpo.length > 100) {
      setErroValidacao("O título deve ter no máximo 100 caracteres.");
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
      estado,
      status: estado,
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

  const handleConfirmarDialogo = () => {
    if (!confirmacao) return;

    if (confirmacao.tipo === "excluir") {
      aoExcluirTarefa?.(confirmacao.tarefa.id);
    } else if (confirmacao.tipo === "limparConcluidas") {
      aoLimparConcluidas?.();
    }

    setConfirmacao(null);
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
            const estadoAtual = obterEstado(tarefa);
            const encerrada =
              estadoAtual === "concluida" || estadoAtual === "cancelada";
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
                      checked={estadoAtual === "concluida"}
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
                          encerrada
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
                      onClick={() =>
                        setConfirmacao({ tipo: "excluir", tarefa })
                      }
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
                    <select
                      aria-label={`Estado da tarefa "${tarefa.titulo}"`}
                      value={estadoAtual}
                      onChange={(e) =>
                        aoAlterarEstado?.(
                          tarefa.id,
                          e.target.value as EstadoTarefa,
                        )
                      }
                      className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 font-medium text-slate-700 focus:border-blue-500 focus:outline-none"
                    >
                      {ESTADOS_TAREFA.map((chaveEstado) => (
                        <option key={chaveEstado} value={chaveEstado}>
                          {ROTULO_ESTADO[chaveEstado]}
                        </option>
                      ))}
                    </select>
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

      {/* RN-11 / RF-20: Limpar concluídas passa por ConfirmDialog */}
      {totalConcluidas > 0 && aoLimparConcluidas && (
        <div className="border-t border-slate-100 pt-3">
          <button
            type="button"
            onClick={() =>
              setConfirmacao({
                tipo: "limparConcluidas",
                quantidade: totalConcluidas,
              })
            }
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
          <div
            ref={modalBoxRef}
            className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-lg"
          >
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
                  Título * (1 a 100 caracteres)
                </label>
                <input
                  ref={tituloInputRef}
                  id="campo-titulo-tarefa"
                  type="text"
                  maxLength={100}
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
                    Estado
                  </label>
                  <select
                    id="campo-status-tarefa"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value as EstadoTarefa)}
                    className="rounded-lg border border-slate-300 px-2.5 py-2 text-xs text-slate-800 focus:border-blue-500 focus:outline-none"
                  >
                    {ESTADOS_TAREFA.map((chaveEstado) => (
                      <option key={chaveEstado} value={chaveEstado}>
                        {ROTULO_ESTADO[chaveEstado]}
                      </option>
                    ))}
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

      {/* RN-11 / RF-20: ConfirmDialog para exclusão unitária e limpeza em lote */}
      <ConfirmDialog
        isOpen={confirmacao !== null}
        titulo={
          confirmacao?.tipo === "excluir"
            ? "Excluir Tarefa?"
            : "Limpar Tarefas Concluídas?"
        }
        mensagem={
          confirmacao?.tipo === "excluir"
            ? `Deseja realmente excluir a tarefa "${confirmacao.tarefa.titulo}"? Esta ação não pode ser desfeita.`
            : `Deseja realmente remover ${confirmacao?.quantidade ?? 0} tarefa(s) concluída(s)? Esta ação não pode ser desfeita.`
        }
        textoConfirmar={
          confirmacao?.tipo === "excluir" ? "Excluir" : "Limpar"
        }
        variante="perigo"
        aoConfirmar={handleConfirmarDialogo}
        aoCancelar={() => setConfirmacao(null)}
      />
    </aside>
  );
}
