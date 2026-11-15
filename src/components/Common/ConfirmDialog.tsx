import React, { useEffect, useRef } from "react";

interface ConfirmDialogProps {
  isOpen: boolean;
  titulo: string;
  mensagem: string;
  textoConfirmar?: string;
  textoCancelar?: string;
  aoConfirmar: () => void;
  aoCancelar: () => void;
  variante?: "perigo" | "padrao";
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  titulo,
  mensagem,
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
  aoConfirmar,
  aoCancelar,
  variante = "perigo",
}) => {
  const botaoConfirmarRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    botaoConfirmarRef.current?.focus();

    const lidarKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        aoCancelar();
      }
    };

    window.addEventListener("keydown", lidarKeyDown);
    return () => window.removeEventListener("keydown", lidarKeyDown);
  }, [isOpen, aoCancelar]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-desc"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <div className="bg-white border-2 border-slate-400 max-w-md w-full p-6 text-left shadow-lg">
        <h2 id="dialog-title" className="text-lg font-bold text-slate-900 mb-2">
          {titulo}
        </h2>
        <p id="dialog-desc" className="text-sm text-slate-700 mb-6">
          {mensagem}
        </p>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={aoCancelar}
            className="px-4 py-2 text-sm font-medium border border-slate-400 bg-slate-100 hover:bg-slate-200 text-slate-800"
          >
            {textoCancelar}
          </button>
          <button
            ref={botaoConfirmarRef}
            type="button"
            onClick={aoConfirmar}
            className={`px-4 py-2 text-sm font-medium text-white ${
              variante === "perigo"
                ? "bg-red-700 hover:bg-red-800"
                : "bg-slate-800 hover:bg-slate-900"
            }`}
          >
            {textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
};
