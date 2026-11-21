import type { ReactNode } from "react";

export interface AppLayoutProps {
  topBarSlot?: ReactNode;
  timerSlot?: ReactNode;
  tasksSlot?: ReactNode;
}

export function AppLayout({
  topBarSlot,
  timerSlot,
  tasksSlot,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {topBarSlot && (
        <header className="w-full border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3">{topBarSlot}</div>
        </header>
      )}

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <section
            aria-label="Cronômetro Pomodoro"
            className={
              tasksSlot
                ? "lg:col-span-8 flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
                : "lg:col-span-12 flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
            }
          >
            {timerSlot}
          </section>

          {tasksSlot && (
            <div className="lg:col-span-4 w-full">{tasksSlot}</div>
          )}
        </div>
      </main>
    </div>
  );
}