import React, { useEffect, useMemo, useRef, useState } from "react";
import { LIMITES_PRESET } from "../../types/preset";
import type { DadosPreset, TemporizadorPersonalizado } from "../../types/preset";
import { validarPreset } from "../../utils/presetValidation";

interface PresetFormModalProps {
  presetInicial: TemporizadorPersonalizado | null;
  aoSalvar: (dados: DadosPreset) => boolean;
  aoFechar: () => void;
}

type CampoForm = keyof DadosPreset;

const CAMPOS: { chave: CampoForm; rotulo: string; tipo: "text" | "number" }[] =
  [
    { chave: "nome", rotulo: "Nome", tipo: "text" },
    { chave: "tempoFocoMin", rotulo: "Tempo de foco (min)", tipo: "number" },
    {
      chave: "tempoPausaCurtaMin",
      rotulo: "Pausa curta (min)",
      tipo: "number",
    },
    {
      chave: "ciclosAntesPausaLonga",
      rotulo: "Ciclos antes da pausa longa",
      tipo: "number",
    },
    {
      chave: "tempoPausaLongaMin",
      rotulo: "Pausa longa (min)",
      tipo: "number",
    },
  ];

export const PresetFormModal: React.FC<PresetFormModalProps> = ({
  presetInicial,
  aoSalvar,
  aoFechar,
}) => {
  const [valores, setValores] = useState<Record<CampoForm, string>>({
    nome: presetInicial?.nome ?? "",
    tempoFocoMin: String(presetInicial?.tempoFocoMin ?? 25),
    tempoPausaCurtaMin: String(presetInicial?.tempoPausaCurtaMin ?? 5),
    ciclosAntesPausaLonga: String(presetInicial?.ciclosAntesPausaLonga ?? 4),
    tempoPausaLongaMin: String(presetInicial?.tempoPausaLongaMin ?? 15),
  });
  const [tocados, setTocados] = useState<Partial<Record<CampoForm, boolean>>>(
    {},
  );
  const [falhaAoSalvar, setFalhaAoSalvar] = useState(false);
  const dialogoRef = useRef<HTMLDivElement>(null);
  const primeiroCampoRef = useRef<HTMLInputElement>(null);

  const dados = useMemo<DadosPreset>(
    () => ({
      nome: valores.nome.trim(),
      tempoFocoMin: Number(valores.tempoFocoMin),
      tempoPausaCurtaMin: Number(valores.tempoPausaCurtaMin),
      ciclosAntesPausaLonga: Number(valores.ciclosAntesPausaLonga),
      tempoPausaLongaMin: Number(valores.tempoPausaLongaMin),
    }),
    [valores],
  );

  const erros = validarPreset(dados);
  const formularioValido = Object.keys(erros).length === 0;

  useEffect(() => {
    primeiroCampoRef.current?.focus();

    const lidarKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        aoFechar();
        return;
      }

      if (e.key === "Tab" && dialogoRef.current) {
        const focaveis = dialogoRef.current.querySelectorAll<HTMLElement>(
          "input, button:not([disabled])",
        );
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];

        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primeiro.focus();
        }
      }
    };

    window.addEventListener("keydown", lidarKeyDown);
    return () => window.removeEventListener("keydown", lidarKeyDown);
  }, [aoFechar]);

  const alterarCampo = (campo: CampoForm, valor: string) => {
    setValores((anteriores) => ({ ...anteriores, [campo]: valor }));
    setTocados((anteriores) => ({ ...anteriores, [campo]: true }));
    setFalhaAoSalvar(false);
  };

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formularioValido) return;

    if (aoSalvar(dados)) {
      aoFechar();
    } else {
      setFalhaAoSalvar(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preset-form-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <div
        ref={dialogoRef}
        className="bg-white border-2 border-slate-400 max-w-md w-full p-6 text-left shadow-lg rounded"
      >
        <h2
          id="preset-form-title"
          className="text-lg font-bold text-slate-900 mb-4"
        >
          {presetInicial ? "Editar Preset" : "Novo Preset"}
        </h2>

        <form onSubmit={enviar} noValidate className="flex flex-col gap-4">
          {CAMPOS.map(({ chave, rotulo, tipo }) => {
            const erro = tocados[chave] ? erros[chave] : undefined;
            const limites = LIMITES_PRESET[chave];

            return (
              <div key={chave} className="flex flex-col gap-1">
                <label
                  htmlFor={`preset-${chave}`}
                  className="text-sm font-medium text-slate-800"
                >
                  {rotulo}
                </label>
                <input
                  ref={chave === "nome" ? primeiroCampoRef : undefined}
                  id={`preset-${chave}`}
                  type={tipo}
                  value={valores[chave]}
                  min={tipo === "number" ? limites.min : undefined}
                  max={tipo === "number" ? limites.max : undefined}
                  onChange={(e) => alterarCampo(chave, e.target.value)}
                  aria-invalid={erro ? true : undefined}
                  aria-describedby={erro ? `preset-${chave}-erro` : undefined}
                  className={`px-3 py-2 text-sm border rounded ${
                    erro ? "border-red-500" : "border-slate-400"
                  }`}
                />
                {erro && (
                  <p
                    id={`preset-${chave}-erro`}
                    role="alert"
                    className="text-xs text-red-700"
                  >
                    {erro}
                  </p>
                )}
              </div>
            );
          })}

          {falhaAoSalvar && (
            <p role="alert" className="text-sm text-red-700">
              Não foi possível salvar o preset.
            </p>
          )}

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={aoFechar}
              className="px-4 py-2 text-sm font-medium border border-slate-400 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!formularioValido}
              className="px-4 py-2 text-sm font-medium text-white rounded bg-slate-800 hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
