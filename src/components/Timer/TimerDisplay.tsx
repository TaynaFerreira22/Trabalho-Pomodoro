import React from "react";
import type { FaseSessao } from "../../types";

interface TimerDisplayProps {
  tempoRestanteMs: number;
  faseAtual: FaseSessao;
  cicloAtual: number;
  progressoPercentual: number;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({
  tempoRestanteMs,
  faseAtual,
  cicloAtual,
  progressoPercentual,
}) => {
  const totalSegundos = Math.max(0, Math.ceil(tempoRestanteMs / 1000));
  const minutos = Math.floor(totalSegundos / 60);
  const segundos = totalSegundos % 60;
  const tempoFormatado = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

  const rotulosFase: Record<FaseSessao, string> = {
    foco: "Foco",
    pausaCurta: "Pausa Curta",
    pausaLonga: "Pausa Longa",
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center gap-3 mb-2 font-semibold text-sm">
        <span className="px-2 py-1 bg-slate-200 border border-slate-300 rounded">
          Fase: {rotulosFase[faseAtual]}
        </span>
        <span className="px-2 py-1 bg-slate-200 border border-slate-300 rounded">
          Ciclo: {cicloAtual}
        </span>
      </div>

      <div
        className="text-6xl md:text-8xl font-mono font-bold tracking-tight text-slate-900 my-4"
        aria-live="polite"
        aria-label={`Tempo restante: ${tempoFormatado}`}
      >
        {tempoFormatado}
      </div>

      {/* Progresso visual simples */}
      <div
        className="w-full max-w-md bg-slate-200 h-3 rounded overflow-hidden border border-slate-300"
        role="progressbar"
        aria-valuenow={progressoPercentual}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="bg-slate-700 h-full transition-all duration-200"
          style={{
            width: `${Math.min(100, Math.max(0, progressoPercentual))}%`,
          }}
        />
      </div>
    </div>
  );
};
