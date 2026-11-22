//audioService.ts
let contexto: AudioContext | null = null;

function obterContexto(): AudioContext | null {
  if (
    typeof window === "undefined" ||
    typeof window.AudioContext === "undefined"
  ) {
    return null;
  }

  if (!contexto) {
    contexto = new window.AudioContext();
  }

  return contexto;
}

export function desbloquearAudio(): void {
  const ctx = obterContexto();
  if (ctx && ctx.state === "suspended") {
    void ctx.resume();
  }
}

export function tocarAlerta(): void {
  const ctx = obterContexto();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    void ctx.resume();
  }

  const inicio = ctx.currentTime;

  for (let i = 0; i < 3; i++) {
    const t = inicio + i * 0.3;
    const oscilador = ctx.createOscillator();
    const ganho = ctx.createGain();

    oscilador.type = "sine";
    oscilador.frequency.value = 880;

    ganho.gain.setValueAtTime(0.0001, t);
    ganho.gain.exponentialRampToValueAtTime(0.3, t + 0.02);
    ganho.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);

    oscilador.connect(ganho);
    ganho.connect(ctx.destination);
    oscilador.start(t);
    oscilador.stop(t + 0.25);
  }
}
