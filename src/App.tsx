import { useCallback, useRef, useState } from "react";
import { AppLayout } from "./components/Layout/AppLayout";
import { TimerDisplay } from "./components/Timer/TimerDisplay";
import { PresetSelector } from "./components/Presets/PresetSelector";
import { TaskPanel } from "./components/Tasks/TaskPanel";
import { ConfirmDialog } from "./components/Common/ConfirmDialog";
import { usePomodoroSession } from "./hooks/usePomodoroSession";
import { usePresets } from "./hooks/usePresets";
import { useAudioAlert } from "./hooks/useAudioAlert";
import { useTasks } from "./hooks/useTasks";

type TipoConfirmacao =
  | "encerrar"
  | "reiniciar"
  | "descartar"
  | "excluirPreset"
  | null;

export function App() {
  const [confirmacaoAtiva, setConfirmacaoAtiva] =
    useState<TipoConfirmacao>(null);
  const { tocarAlerta } = useAudioAlert();

  const tasks = useTasks();
  const tarefaAtivaIdRef = useRef<string | null>(tasks.tarefaAtivaId);
  tarefaAtivaIdRef.current = tasks.tarefaAtivaId;

  const aoFinalizarFase = useCallback(() => {
    tocarAlerta();
    tasks.incrementarPomodoroTarefa(tarefaAtivaIdRef.current);
  }, [tocarAlerta, tasks]);

  const session = usePomodoroSession({ aoFinalizarFase });
  const presets = usePresets(session.presetEmUsoId);
  const presetSelecionado = presets.presetSelecionado;

  const statusAtual = session.sessao?.status;
  const emAndamento = statusAtual === "emAndamento";
  const pausada = statusAtual === "pausada";

  const tempoExibidoMs = session.temSessaoAtiva
    ? session.tempoRestanteMs
    : (presetSelecionado?.tempoFocoMin ?? 0) * 60 * 1000;

  const selecionarPreset = (id: string) => {
    const preset = presets.presets.find((p) => p.id === id);
    if (!preset) return;

    presets.selecionarPreset(id);
    if (session.temSessaoAtiva) session.iniciarSessao(preset);
  };

  const configModal: Record<
    Exclude<TipoConfirmacao, null>,
    {
      titulo: string;
      mensagem: string;
      textoConfirmar: string;
      variante: "perigo" | "padrao";
      acao: () => void;
    }
  > = {
    encerrar: {
      titulo: "Encerrar Sessão Ativa?",
      mensagem:
        "Deseja realmente encerrar a sessão de foco atual? Todo o progresso do ciclo em andamento será finalizado.",
      textoConfirmar: "Encerrar",
      variante: "perigo",
      acao: () => session.encerrarSessao(),
    },
    reiniciar: {
      titulo: "Reiniciar Ciclos?",
      mensagem:
        "A contagem de ciclos voltará para 1 na fase de Foco, mantendo o temporizador atual. Deseja continuar?",
      textoConfirmar: "Reiniciar",
      variante: "padrao",
      acao: () => session.reiniciarCiclos(),
    },
    descartar: {
      titulo: "Descartar Sessão Retomada?",
      mensagem:
        "A sessão restaurada será encerrada sem contabilizar progresso. Deseja descartá-la?",
      textoConfirmar: "Descartar",
      variante: "perigo",
      acao: () => session.descartarSessaoRetomada(),
    },
    excluirPreset: {
      titulo: "Excluir Preset?",
      mensagem: `Deseja realmente excluir o preset "${presetSelecionado?.nome ?? ""}"? Esta ação não pode ser desfeita.`,
      textoConfirmar: "Excluir",
      variante: "perigo",
      acao: () => {
        if (presetSelecionado) presets.excluirPreset(presetSelecionado.id);
      },
    },
  };

  const modalAtual = confirmacaoAtiva ? configModal[confirmacaoAtiva] : null;

  return (
    <>
      <AppLayout
        topBarSlot={
          <PresetSelector
            presets={presets.presets}
            presetSelecionadoId={presetSelecionado?.id ?? null}
            presetEmUsoId={session.presetEmUsoId}
            erro={presets.erroPersistencia}
            aoSelecionar={selecionarPreset}
            aoCriar={presets.criarPreset}
            aoEditar={presets.editarPreset}
            aoSolicitarExclusao={() => setConfirmacaoAtiva("excluirPreset")}
            aoLimparErro={presets.limparErroPersistencia}
          />
        }
        timerSlot={
          <div className="flex flex-col items-center gap-6 w-full">
            {session.erroPersistencia && (
              <div
                role="alert"
                className="w-full flex items-center justify-between gap-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900"
              >
                <span>{session.erroPersistencia}</span>
                <button
                  type="button"
                  onClick={session.limparErroPersistencia}
                  className="shrink-0 rounded-md border border-red-300 bg-white px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-100"
                >
                  Fechar
                </button>
              </div>
            )}

            {session.foiRetomadaAutomaticamente && (
              <div className="w-full flex items-center justify-between gap-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                <span>Sessão anterior retomada automaticamente.</span>
                <button
                  type="button"
                  onClick={() => setConfirmacaoAtiva("descartar")}
                  className="shrink-0 rounded-md bg-amber-600 px-3 py-1.5 font-medium text-white hover:bg-amber-700 transition-colors"
                >
                  Descartar
                </button>
              </div>
            )}

            <TimerDisplay
              tempoRestanteMs={tempoExibidoMs}
              faseAtual={session.sessao?.faseAtual ?? "foco"}
              cicloAtual={session.sessao?.cicloAtual ?? 1}
              progressoPercentual={session.progressoPercentual}
            />

            <div className="flex flex-wrap justify-center gap-2">
              {emAndamento ? (
                <button
                  type="button"
                  onClick={session.pausarSessao}
                  className="px-5 py-2 font-medium bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-xs transition-colors"
                >
                  Pausar
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!pausada && !presetSelecionado}
                  onClick={() => {
                    if (pausada) session.retomarSessao();
                    else if (presetSelecionado)
                      session.iniciarSessao(presetSelecionado);
                  }}
                  className="px-5 py-2 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {pausada ? "Retomar" : "Iniciar"}
                </button>
              )}

              {session.temSessaoAtiva && (
                <>
                  <button
                    type="button"
                    onClick={session.pularFase}
                    className="px-4 py-2 font-medium border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 rounded-lg transition-colors"
                  >
                    Pular Fase
                  </button>

                  <button
                    type="button"
                    onClick={() => setConfirmacaoAtiva("reiniciar")}
                    className="px-4 py-2 font-medium border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 rounded-lg transition-colors"
                  >
                    Reiniciar Ciclos
                  </button>

                  <button
                    type="button"
                    onClick={() => setConfirmacaoAtiva("encerrar")}
                    className="px-4 py-2 font-medium border border-red-300 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Encerrar Sessão
                  </button>
                </>
              )}
            </div>
          </div>
        }
        tasksSlot={
          <TaskPanel
            tarefas={tasks.tarefas}
            tarefaAtivaId={tasks.tarefaAtivaId}
            erro={tasks.erroPersistencia}
            aoSelecionarTarefa={tasks.setTarefaAtivaId}
            aoCriarTarefa={(entrada) => tasks.criarTarefa(entrada)}
            aoEditarTarefa={(id, entrada) => tasks.editarTarefa(id, entrada)}
            aoAlternarConclusao={tasks.alternarConclusaoTarefa}
            aoExcluirTarefa={tasks.excluirTarefa}
            aoLimparConcluidas={tasks.limparConcluidas}
            aoLimparErro={tasks.limparErroPersistencia}
          />
        }
      />

      <ConfirmDialog
        isOpen={modalAtual !== null}
        titulo={modalAtual?.titulo ?? ""}
        mensagem={modalAtual?.mensagem ?? ""}
        textoConfirmar={modalAtual?.textoConfirmar}
        variante={modalAtual?.variante}
        aoConfirmar={() => {
          modalAtual?.acao();
          setConfirmacaoAtiva(null);
        }}
        aoCancelar={() => setConfirmacaoAtiva(null)}
      />
    </>
  );
}

export default App;