import { usePomodoroSession } from './hooks/usePomodoroSession';
import type { TemporizadorPersonalizado } from './types/preset';

const PRESET_TESTE: TemporizadorPersonalizado = {
  id: 'preset-teste-1',
  nome: 'Pomodoro Rápido (Teste)',
  tempoFocoMin: 1, // 1 minuto (pode mudar para 0.1 para testar 6 segundos!)
  tempoPausaCurtaMin: 1,
  ciclosAntesPausaLonga: 2,
  tempoPausaLongaMin: 2,
  criadoEm: Date.now(),
  atualizadoEm: Date.now(),
};

export function TesteTimer() {
  const {
    sessao,
    tempoFormatado,
    progressoPercentual,
    carregado,
    foiRetomadaAutomaticamente,
    erroPersistencia,
    presetEmUsoId,
    iniciarSessao,
    pausarSessao,
    retomarSessao,
    pularFase,
    reiniciarCiclos,
    encerrarSessao,
    descartarSessaoRetomada,
  } = usePomodoroSession({
    aoFinalizarFase: (faseConcluida, proximaFase) => {
      console.log(`Fase concluída: ${faseConcluida} -> Próxima: ${proximaFase}`);
    },
  });

  if (!carregado) return <div className="p-8">Carregando sessão...</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans text-slate-800">
      <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-xl font-bold">Teste do Motor Temporal (Pessoa 1)</h1>

        {erroPersistencia && (
          <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {erroPersistencia}
          </div>
        )}

        {foiRetomadaAutomaticamente && (
          <div className="mb-4 flex items-center justify-between rounded bg-amber-100 p-3 text-sm text-amber-800">
            <span>Sessão anterior retomada automaticamente!</span>
            <button
              onClick={descartarSessaoRetomada}
              className="rounded bg-amber-600 px-3 py-1 font-medium text-white hover:bg-amber-700"
            >
              Descartar Sessão
            </button>
          </div>
        )}

        <div className="mb-6 rounded-lg bg-slate-100 p-6 text-center">
          <div className="mb-2 flex justify-center gap-3 text-sm font-medium text-slate-600">
            <span>Fase: <strong>{sessao?.faseAtual ?? 'Nenhuma'}</strong></span>
            <span>|</span>
            <span>Ciclo: <strong>{sessao ? `${sessao.cicloAtual} / ${sessao.snapshotPreset.ciclosAntesPausaLonga}` : '-'}</strong></span>
            <span>|</span>
            <span>Status: <strong>{sessao?.status ?? 'Inativo'}</strong></span>
          </div>

          <div className="my-4 font-mono text-6xl font-bold tracking-tight text-slate-900">
            {tempoFormatado}
          </div>

          <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progressoPercentual}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Preset em uso ID: {presetEmUsoId ?? 'Nenhum'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {!sessao && (
            <button
              onClick={() => iniciarSessao(PRESET_TESTE)}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Iniciar Sessão (Teste)
            </button>
          )}

          {sessao?.status === 'emAndamento' && (
            <button
              onClick={pausarSessao}
              className="rounded-lg bg-amber-500 px-4 py-2 font-medium text-white hover:bg-amber-600"
            >
              Pausar
            </button>
          )}

          {sessao?.status === 'pausada' && ( 
            <button
              onClick={retomarSessao}
              className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
            >
              Retomar
            </button>
          )}

          {sessao && (
            <>
              <button
                onClick={pularFase}
                className="rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-100"
              >
                Pular Fase
              </button>
              <button
                onClick={reiniciarCiclos}
                className="rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-100"
              >
                Reiniciar Ciclos
              </button>
              <button
                onClick={encerrarSessao}
                className="rounded-lg border border-red-300 px-4 py-2 font-medium text-red-600 hover:bg-red-50"
              >
                Encerrar Sessão
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}