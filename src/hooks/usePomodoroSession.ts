"use client";
import { useState } from "react";
import { FaseSessao, StatusSessao } from "@/types";

export const usePomodoroSession = () => {
  const [tempoRestanteMs, setTempoRestanteMs] = useState(25 * 60 * 1000);
  const [faseAtual, setFaseAtual] = useState<FaseSessao>("foco");
  const [cicloAtual, setCicloAtual] = useState(1);
  const [status, setStatus] = useState<StatusSessao>("pausada");

  return {
    faseAtual,
    cicloAtual,
    status,
    tempoRestanteMs,
    progressoPercentual: 0,
    iniciar: () => setStatus("emAndamento"),
    pausar: () => setStatus("pausada"),
    retomar: () => setStatus("emAndamento"),
    pularFase: () => {},
    reiniciarCiclos: () => setCicloAtual(1),
    encerrarSessao: () => setStatus("concluida"),
    descartarSessaoRetomada: () => {},
    sessaoRetomadaPendente: false,
  };
};
