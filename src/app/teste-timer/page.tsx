// src/app/page.tsx
// Página temporária criada apenas para teste e validação do motor temporal (Pessoa 1)

'use client';

import { usePomodoroSession } from '@/hooks/usePomodoroSession';
import { TemporizadorPersonalizado } from '@/types/preset';

// Preset fictício apenas para testar o início da sessão sem depender da Pessoa 2
const PRESET_TESTE: TemporizadorPersonalizado = {
  id: 'preset-teste-1',
  nome: 'Estudo Rápido (Teste)',
  tempoFocoMin: 1, // 1 minuto para facilitar o teste de virada de fase
  tempoPausaCurtaMin: 1,
  ciclosAntesPausaLonga: 2,
  tempoPausaLongaMin: 2,
  criadoEm: Date.now(),
  atualizadoEm: Date.now(),
};

export default function HomePage() {
  const {
    sessao,
    tempoFormatado,
    progressoPercentual,
    carregado,
    foiRetomadaAutomaticamente,
    erroPersistencia,
    iniciarSessao,
    pausarSessao,
    retomarSessao,
    pularFase,
    reiniciarCiclos,
    encerrarSessao,
    descartarSessaoRetomada,
  } = usePomodoroSession({
    // Apenas para teste: simula o disparo do alerta sonoro da Pessoa 2
    aoFinalizarFase: (faseConcluida, proximaFase) => {
      console.log(`Fase concluída: ${faseConcluida} -> Próxima: ${proximaFase ?? 'Fim'}`);
    },
  });

  if (!carregado) {
    return <p className="p-6">Carregando sessão...</p>;
  }

  return (
    <main className="mx-auto max-w-md space-y-4 p-6 font-sans">
      <h1 className="text-xl font-bold">Teste do Motor Pomodoro (Pessoa 1)</h1>

      {erroPersistencia && (
        <p className="rounded bg-red-100 p-2 text-sm text-red-700">
          {erroPersistencia}
        </p>
      )}

      {foiRetomadaAutomaticamente && sessao && (
        <div className="rounded bg-amber-100 p-3 text-sm text-amber-900">
          <p>Sessão retomada automaticamente após recarregar a página.</p>
          <button
            onClick={descartarSessaoRetomada}
            className="mt-2 rounded bg-amber-700 px-3 py-1 text-white"
          >
            Descartar sessão retomada
          </button>
        </div>
      )}

      {!sessao ? (
        <button
          onClick={() => iniciarSessao(PRESET_TESTE)}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Iniciar Sessão de Teste (1 min)
        </button>
      ) : (
        <div className="space-y-3 rounded border p-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Fase: <strong>{sessao.faseAtual}</strong></span>
            <span>Ciclo: <strong>{sessao.cicloAtual} / {sessao.snapshotPreset.ciclosAntesPausaLonga}</strong></span>
            <span>Status: <strong>{sessao.status}</strong></span>
          </div>

          <div className="text-center text-5xl font-mono font-bold">
            {tempoFormatado}
          </div>

          <div className="h-2 w-full overflow-hidden rounded bg-gray-200">
            <div
              className="h-full bg-blue-600 transition-all"
              style={{ width: `${progressoPercentual}%` }}
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {sessao.status === 'emAndamento' && (
              <button onClick={pausarSessao} className="rounded bg-yellow-500 px-3 py-1 text-white">
                Pausar
              </button>
            )}

            {sessao.status === 'pausada' && (
              <button onClick={retomarSessao} className="rounded bg-green-600 px-3 py-1 text-white">
                Retomar
              </button>
            )}

            {sessao.status !== 'concluida' && (
              <>
                <button onClick={pularFase} className="rounded bg-indigo-600 px-3 py-1 text-white">
                  Pular Fase
                </button>
                <button onClick={reiniciarCiclos} className="rounded bg-gray-600 px-3 py-1 text-white">
                  Reiniciar Ciclos
                </button>
              </>
            )}

            <button onClick={encerrarSessao} className="rounded bg-red-600 px-3 py-1 text-white">
              Encerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}