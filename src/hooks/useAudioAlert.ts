//useAudioAlert.ts
import { useEffect } from "react";
import { desbloquearAudio, tocarAlerta } from "../services/audioService";

export function useAudioAlert() {
  useEffect(() => {
    const aoInteragir = () => {
      desbloquearAudio();
      window.removeEventListener("pointerdown", aoInteragir);
      window.removeEventListener("keydown", aoInteragir);
    };

    window.addEventListener("pointerdown", aoInteragir);
    window.addEventListener("keydown", aoInteragir);

    return () => {
      window.removeEventListener("pointerdown", aoInteragir);
      window.removeEventListener("keydown", aoInteragir);
    };
  }, []);

  return { tocarAlerta };
}
