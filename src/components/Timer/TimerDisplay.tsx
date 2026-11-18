import React from "react";
import type { FaseSessao } from "../../types";

interface TimerDisplayProps {
  tempoRestanteMs: number;
  faseAtual: FaseSessao;
  cicloAtual: number;
  progressoPercentual: number;
}

const ESTILOS_FASE: Record<
  FaseSessao,
  { rotulo: string; badge: string; barra: string }
> = {
  foco: {
    rotulo: "Foco",
    badge: "bg-foco-superficie border-foco-borda text-foco-texto",
    barra: "bg-foco-barra",
  },
  pausaCurta: {
    rotulo: "Pausa Curta",
    badge:
      "bg-pausaCurta-superficie border-pausaCurta-borda text-pausaCurta-texto",
    barra: "bg-pausaCurta-barra",
  },
  pausaLonga: {
    rotulo: "Pausa Longa",
    badge:
      "bg-pausaLonga-superficie border-pausaLonga-borda text-pausaLonga-texto",
    barra: "bg-pausaLonga-barra",
  },
};

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

  const estiloAtual = ESTILOS_FASE[faseAtual];
  const progressoLimitado = Math.min(100, Math.max(0, progressoPercentual));

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center gap-3 mb-2 font-semibold text-sm">
        <span className={`px-3 py-1 border rounded ${estiloAtual.badge}`}>
          Fase: {estiloAtual.rotulo}
        </span>
        <span className="px-3 py-1 bg-slate-100 border border-slate-300 text-slate-800 rounded">
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

      <div
        className="w-full max-w-md bg-slate-200 h-3 rounded overflow-hidden border border-slate-300"
        role="progressbar"
        aria-valuenow={Math.round(progressoLimitado)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`${estiloAtual.barra} h-full transition-all duration-200`}
          style={{ width: `${progressoLimitado}%` }}
        />
      </div>
    </div>
  );
};
