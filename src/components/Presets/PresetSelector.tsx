import React, { useState } from "react";
import type { DadosPreset, TemporizadorPersonalizado } from "../../types/preset";
import { PresetFormModal } from "./PresetFormModal";

interface PresetSelectorProps {
presets: TemporizadorPersonalizado[];
presetSelecionadoId: string | null;
presetEmUsoId: string | null;
erro: string | null;
aoSelecionar: (id: string) => void;
aoCriar: (dados: DadosPreset) => boolean;
aoEditar: (id: string, dados: DadosPreset) => boolean;
aoSolicitarExclusao: () => void;
aoLimparErro: () => void;
}

const ESTILO_BOTAO =
"px-3 py-2 text-sm font-medium border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

export const PresetSelector: React.FC<PresetSelectorProps> = ({
		presets,
		presetSelecionadoId,
		presetEmUsoId,
		erro,
		aoSelecionar,
		aoCriar,
		aoEditar,
		aoSolicitarExclusao,
		aoLimparErro,
		}) => {
	const [modal, setModal] = useState<"criar" | "editar" | null>(null);

	const selecionado = presets.find((p) => p.id === presetSelecionadoId) ?? null;
	const bloqueado = selecionado !== null && selecionado.id === presetEmUsoId;

	const sessaoAtiva = presetEmUsoId !== null;

	return (
			<div className="flex flex-col gap-2">
			<div className="flex flex-wrap items-center gap-2">
			<label htmlFor="preset-select" className="sr-only">
			Preset
			</label>
			<select
			id="preset-select"
			value={selecionado?.id ?? ""}
			disabled={presets.length === 0}
			onChange={(e) => aoSelecionar(e.target.value)}
			className="flex-1 min-w-40 px-3 py-2 text-sm border border-slate-300 bg-white text-slate-800 rounded-lg"
			>
			{presets.length === 0 && <option value="">Nenhum preset</option>}
			{presets.map((preset) => (
						<option key={preset.id} value={preset.id}>
						{preset.nome}
						</option>
						))}
			</select>

				<button
				type="button"
				disabled= {sessaoAtiva}
				onClick={() => setModal("criar")}
			className={ESTILO_BOTAO}
			>
				Novo
				</button>
				<button
				type="button"
				disabled={selecionado === null || bloqueado}
			onClick={() => setModal("editar")}
			className={ESTILO_BOTAO}
			>
				Editar
				</button>
				<button
				type="button"
				disabled={selecionado === null || bloqueado}
			onClick={aoSolicitarExclusao}
			className="px-3 py-2 text-sm font-medium border border-red-300 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
				Excluir
				</button>
				</div>

				{bloqueado && (
						<p className="text-xs text-slate-500">
						Preset em uso por uma sessão ativa: criação, edição e exclusão bloqueadas.
						</p>
					      )}

			{erro && (
					<div
					role="alert"
					className="flex items-center justify-between gap-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-xs text-red-900"
					>
					<span>{erro}</span>
					<button
					type="button"
					onClick={aoLimparErro}
					className="shrink-0 rounded-md border border-red-300 bg-white px-2 py-0.5 font-medium text-red-700 hover:bg-red-100"
					>
					Fechar
					</button>
					</div>
				 )}

			{modal && (
					<PresetFormModal
					presetInicial={modal === "editar" ? selecionado : null}
					aoSalvar={(dados) =>
					modal === "editar" && selecionado
					? aoEditar(selecionado.id, dados)
					: aoCriar(dados)
					}
					aoFechar={() => setModal(null)}
					/>
				  )}
			</div>
				);
};
