"use client";
import { useState, useSyncExternalStore } from "react";
import { AppLayout } from "@/components/Layout/AppLayout";
import { TimerDisplay } from "@/components/Timer/TimerDisplay";
import { PresetSelector } from "@/components/Presets/PresetSelector";
import { TaskPanel } from "@/components/Tasks/TaskPanel";
import { ConfirmDialog } from "@/components/Common/ConfirmDialog";
import { usePomodoroSession } from "@/hooks/usePomodoroSession";

// Função de subscrição estática exigida pelo hook (não requer listeners ativos)
const subscreverVazio = () => () => {};

export default function Home() {
  // Retorna false durante o SSR/hidratação inicial e true após a montagem no navegador
  const isMounted = useSyncExternalStore(
    subscreverVazio,
    () => true, // Snapshot de execução no cliente
    () => false, // Snapshot de execução no servidor (SSR)
  );

  const [modalEncerrarAberto, setModalEncerrarAberto] = useState(false);
  const session = usePomodoroSession();

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500 font-medium">
        A carregar temporizador...
      </div>
    );
  }

  return (
    <>
      <AppLayout
        topBarSlot={<PresetSelector />}
        timerSlot={
          <div className="flex flex-col items-center gap-6 w-full">
            <TimerDisplay
              tempoRestanteMs={session.tempoRestanteMs}
              faseAtual={session.faseAtual}
              cicloAtual={session.cicloAtual}
              progressoPercentual={session.progressoPercentual}
            />

            <div className="flex flex-wrap justify-center gap-2">
              {session.status === "emAndamento" ? (
                <button
                  type="button"
                  onClick={session.pausar}
                  className="px-5 py-2 font-medium bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-xs transition-colors"
                >
                  Pausar
                </button>
              ) : (
                <button
                  type="button"
                  onClick={session.iniciar}
                  className="px-5 py-2 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-xs transition-colors"
                >
                  {session.status === "pausada" ? "Retomar" : "Iniciar"}
                </button>
              )}

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
