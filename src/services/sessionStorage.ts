// src/services/sessionStorage.ts

import type{ SessaoAtiva } from '../types/session';

// Chave obrigatória definida na Seção 11.4 do Documento de Requisitos
export const CHAVE_SESSAO_ATIVA = 'pomodoro.sessaoAtiva';

export interface ResultadoPersistencia<T> {
  sucesso: boolean;
  dados: T | null;
  erro?: string;
}

/**
 * Valida estruturalmente se o objeto lido do localStorage é uma SessaoAtiva íntegra (R-03).
 */
function validarIntegridadeSessao(dado: unknown): dado is SessaoAtiva {
  if (!dado || typeof dado !== 'object') return false;

  const s = dado as Record<string, unknown>;
  const fasesValidas = ['foco', 'pausaCurta', 'pausaLonga'];
  const statusValidos = ['emAndamento', 'pausada', 'concluida'];

  const temCamposBasicos =
    typeof s.id === 'string' &&
    typeof s.presetId === 'string' &&
    typeof s.faseAtual === 'string' &&
    fasesValidas.includes(s.faseAtual) &&
    typeof s.cicloAtual === 'number' &&
    s.cicloAtual >= 1 &&
    typeof s.status === 'string' &&
    statusValidos.includes(s.status) &&
    typeof s.inicioFaseEm === 'number' &&
    typeof s.fimFasePrevistoEm === 'number';

  if (!temCamposBasicos) return false;

  const snap = s.snapshotPreset as Record<string, unknown> | undefined;
  const temSnapshotValido =
    !!snap &&
    typeof snap === 'object' &&
    typeof snap.nome === 'string' &&
    typeof snap.tempoFocoMin === 'number' &&
    typeof snap.tempoPausaCurtaMin === 'number' &&
    typeof snap.ciclosAntesPausaLonga === 'number' &&
    typeof snap.tempoPausaLongaMin === 'number';

  return temSnapshotValido;
}

/**
 * Lê a sessão ativa persistida no localStorage.
 * Retorna erro descritivo caso os dados estejam corrompidos (R-03).
 */
export function carregarSessaoStorage(): ResultadoPersistencia<SessaoAtiva> {
  if (typeof window === 'undefined') {
    return { sucesso: true, dados: null };
  }

  try {
    const raw = window.localStorage.getItem(CHAVE_SESSAO_ATIVA);
    if (!raw) {
      return { sucesso: true, dados: null };
    }

    const parsed: unknown = JSON.parse(raw);

    if (!validarIntegridadeSessao(parsed)) {
      return {
        sucesso: false,
        dados: null,
        erro: 'Os dados da sessão salva estavam corrompidos ou inconsistentes.',
      };
    }

    return { sucesso: true, dados: parsed };
  } catch {
    return {
      sucesso: false,
      dados: null,
      erro: 'Não foi possível ler os dados da sessão no armazenamento local.',
    };
  }
}

/**
 * Persiste a sessão ativa no localStorage (RNF-02, RNF-06).
 */
export function salvarSessaoStorage(
  sessao: SessaoAtiva
): ResultadoPersistencia<SessaoAtiva> {
  if (typeof window === 'undefined') {
    return { sucesso: true, dados: sessao };
  }

  try {
    window.localStorage.setItem(CHAVE_SESSAO_ATIVA, JSON.stringify(sessao));
    return { sucesso: true, dados: sessao };
  } catch {
    return {
      sucesso: false,
      dados: null,
      erro: 'Falha ao salvar o progresso da sessão no navegador (Local Storage indisponível ou cheio).',
    };
  }
}

/**
 * Remove a sessão ativa do localStorage (UC08, UC11).
 */
export function removerSessaoStorage(): ResultadoPersistencia<null> {
  if (typeof window === 'undefined') {
    return { sucesso: true, dados: null };
  }

  try {
    window.localStorage.removeItem(CHAVE_SESSAO_ATIVA);
    return { sucesso: true, dados: null };
  } catch {
    return {
      sucesso: false,
      dados: null,
      erro: 'Falha ao remover a sessão do armazenamento local.',
    };
  }
}