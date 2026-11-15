import React, { type ReactNode } from "react";

interface AppLayoutProps {
  topBarSlot: ReactNode;
  timerSlot: ReactNode;
  tasksSlot: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  topBarSlot,
  timerSlot,
  tasksSlot,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-300 bg-white p-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-bold tracking-tight">
            Pomodoro — Gestão de Foco
          </h1>
          <div className="w-full sm:w-auto min-w-70">{topBarSlot}</div>
        </div>
      </header>

      {/* Grid funcional: 1 coluna no mobile, 2 colunas no desktop (RF-18) */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <section
          aria-label="Temporizador de Foco"
          className="md:col-span-7 lg:col-span-8 flex flex-col items-center justify-center border border-slate-300 bg-white p-6 rounded"
        >
          {timerSlot}
        </section>

        <section
          aria-label="Painel de Tarefas"
          className="md:col-span-5 lg:col-span-4 w-full"
        >
          {tasksSlot}
        </section>
      </main>
    </div>
  );
};
