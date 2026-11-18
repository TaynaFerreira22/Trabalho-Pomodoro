import { useState } from "react";
import { AppLayout } from "./components/Layout/AppLayout";
import { TimerDisplay } from "./components/Timer/TimerDisplay";
import { PresetSelector } from "./components/Presets/PresetSelector";
import { TaskPanel } from "./components/Tasks/TaskPanel";
import { ConfirmDialog } from "./components/Common/ConfirmDialog";
import { usePomodoroSession } from "./hooks/usePomodoroSession";
import type { TemporizadorPersonalizado } from "./types";

const PRESET_PADRAO: TemporizadorPersonalizado = {
  id: "preset-padrao",
  nome: "Pomodoro Clássico",
  tempoFocoMin: 25,
  tempoPausaCurtaMin: 5,
  ciclosAntesPausaLonga: 4,
  tempoPausaLongaMin: 15,
  criadoEm: Date.now(),
  atualizadoEm: Date.now(),
};

export function App() {
  const [modalEncerrarAberto, setModalEncerrarAberto] = useState(false);
  const session = usePomodoroSession();

  const statusAtual = session.sessao?.status;
  const emAndamento = statusAtual === "emAndamento";
  const pausada = statusAtual === "pausada";

  const tempoExibidoMs = session.temSessaoAtiva
    ? session.tempoRestanteMs
    : PRESET_PADRAO.tempoFocoMin * 60 * 1000;

  return (
    <>
      <AppLayout
        topBarSlot={<PresetSelector />}
        timerSlot={
          <div className="flex flex-col items-center gap-6 w-full">
            {session.foiRetomadaAutomaticamente && (
              <div className="w-full flex items-center justify-between gap-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                <span>Sessão anterior retomada automaticamente.</span>
                <button
                  type="button"
                  onClick={session.descartarSessaoRetomada}
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
                  onClick={() =>
                    pausada
                      ? session.retomarSessao()
                      : session.iniciarSessao(PRESET_PADRAO)
                  }
                  className="px-5 py-2 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-xs transition-colors"
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
                    onClick={session.reiniciarCiclos}
                    className="px-4 py-2 font-medium border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 rounded-lg transition-colors"
                  >
                    Reiniciar Ciclos
                  </button>

                  <button
                    type="button"
                    onClick={() => setModalEncerrarAberto(true)}
                    className="px-4 py-2 font-medium border border-red-300 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Encerrar Sessão
                  </button>
                </>
              )}
            </div>
          </div>
        }
        tasksSlot={<TaskPanel />}
      />

      <ConfirmDialog
        isOpen={modalEncerrarAberto}
        titulo="Encerrar Sessão Ativa?"
        mensagem="Deseja realmente encerrar a sessão de foco atual? Todo o progresso do ciclo em andamento será finalizado."
        textoConfirmar="Encerrar"
        aoConfirmar={() => {
          session.encerrarSessao();
          setModalEncerrarAberto(false);
        }}
        aoCancelar={() => setModalEncerrarAberto(false)}
      />
    </>
  );
}

export default App;
