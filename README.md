# Pomodoro — Aplicação Web de Gestão de Foco

Aplicação web _single-user_ de temporizador Pomodoro para organização de ciclos de estudo e gerenciamento paralelo de tarefas, executada integralmente no navegador com persistência local via `localStorage`.

---

## 1. Funcionalidades Implementadas

- **Temporizadores Personalizados (Presets):** Criação, edição, seleção e exclusão de perfis de tempo com validação em tempo real de nome (1 a 40 caracteres), tempo de foco, pausa curta, ciclos até a pausa longa e pausa longa. Inclui um preset padrão (_Pomodoro Clássico_: 25/5/15 min, 4 ciclos) e bloqueio de alterações nos presets enquanto uma sessão estiver ativa.
- **Execução de Sessões Pomodoro:** Alternância entre fases de **Foco**, **Pausa Curta** e **Pausa Longa**, com display regressivo (`mm:ss`), indicador visual e cromático da fase atual, contador de ciclos e barra de progresso acessível.
- **Controles Operacionais da Sessão:** Ações para **Iniciar**, **Pausar**, **Retomar**, **Pular Fase**, **Reiniciar Ciclos** e **Encerrar Sessão**, além de troca rápida de preset com reinício imediato da sessão ativa.
- **Persistência e Retomada Automática:** Restauração automática da sessão em andamento após recarregamento ou reabertura do navegador por meio de _timestamps_ absolutos, exibindo aviso contextual com opção para descartar a sessão retomada.
- **Alerta Sonoro Nativo:** Sinal sonoro sintetizado ao final de cada fase por meio da Web Audio API, sem dependência de arquivos de mídia externos.
- **Painel Lateral de Tarefas:** Criação, edição, conclusão rápida, exclusão e limpeza de concluídas, com suporte a descrição opcional, estados (**Backlog**, **Em andamento**, **Concluída**), prioridades (**Alta**, **Média**, **Baixa**), estimativa e acompanhamento de pomodoros concluídos, e ordenação determinística automática.
- **Confirmações e Acessibilidade:** Modal global reutilizável de confirmação para ações destrutivas ou críticas (encerrar sessão, reiniciar ciclos, descartar sessão retomada, excluir preset e excluir tarefa), com suporte a navegação por teclado e atributos ARIA.
- **Interface em Português e Responsiva:** Layout em duas colunas no desktop (temporizador principal à esquerda e painel de tarefas à direita) e empilhamento vertical fluido em telas menores.

---

## 2. Stack Tecnológica

- **Build Tool & Dev Server:** Vite
- **Interface & Tipagem:** React + TypeScript
- **Estilização:** Tailwind CSS v4 (com tokens de tema customizados por fase em `src/index.css`)
- **Persistência Local:** Web Storage API (`localStorage`)
- **Áudio:** Web Audio API (`AudioContext` + `OscillatorNode`)

---

## 3. Instalação e Execução

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (instalado junto ao Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/TaynaFerreira22/Trabalho-Pomodoro.git
cd Trabalho-Pomodoro

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento (Vite)
npm run dev
```

Após iniciar, abra no navegador o endereço exibido no terminal (por padrão, `http://localhost:5173`).

### Scripts Disponíveis

| Comando           | Descrição                                                                                   |
| :---------------- | :------------------------------------------------------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento do Vite com Hot Module Replacement (HMR).              |
| `npm run build`   | Executa a verificação de tipos TypeScript e gera o bundle otimizado de produção em `dist/`. |
| `npm run preview` | Sobe um servidor local para validar o build de produção gerado na pasta `dist/`.            |

---

## 4. Arquitetura de Pastas

O projeto organiza o código separando apresentação, regras de estado, acesso a armazenamento/API do navegador, contratos de tipo e funções puras:

```text
├── index.html
└── src/
    ├── components/
    │   ├── Common/
    │   │   └── ConfirmDialog.tsx       # Modal global acessível de confirmação
    │   ├── Layout/
    │   │   └── AppLayout.tsx           # Shell responsivo (duas colunas desktop / pilha mobile)
    │   ├── Presets/
    │   │   ├── PresetSelector.tsx      # Seletor rápido e barra de ações de presets
    │   │   └── PresetFormModal.tsx     # Modal de criação/edição com validação em tempo real
    │   ├── Tasks/
    │   │   └── TaskPanel.tsx           # Painel lateral, lista, cartões e modal de tarefas
    │   └── Timer/
    │       └── TimerDisplay.tsx        # Display mm:ss, fase atual, ciclo e barra de progresso
    ├── hooks/
    │   ├── useAudioAlert.ts            # Desbloqueio de áudio por interação e disparo do alerta
    │   ├── usePomodoroSession.ts       # Motor temporal, controles e retomada automática da sessão
    │   ├── usePresets.ts               # CRUD de presets e bloqueios durante sessão ativa
    │   └── useTasks.ts                 # CRUD de tarefas, foco ativo e persistência
    ├── services/
    │   ├── audioService.ts             # Síntese sonora via Web Audio API
    │   ├── presetStorage.ts            # Persistência e validação de presets no localStorage
    │   ├── sessionStorage.ts           # Persistência da sessão ativa no localStorage
    │   └── taskStorage.ts              # Persistência e normalização de tarefas no localStorage
    ├── types/
    │   ├── index.ts                    # Exportação centralizada das tipagens
    │   ├── preset.ts                   # Contratos e limites de validação de presets
    │   ├── session.ts                  # Contratos de sessão, fases e snapshot
    │   └── task.ts                     # Contratos de tarefas, status e prioridades
    ├── utils/
    │   ├── presetValidation.ts         # Validação pura dos limites dos campos de preset
    │   ├── taskSort.ts                 # Algoritmo determinístico de ordenação de tarefas
    │   └── timeMath.ts                 # Cálculos de tempo restante e avanço por timestamps
    ├── App.tsx                         # Composição principal, integração de hooks e modais globais
    ├── index.css                       # Configuração do Tailwind CSS v4 e tokens visuais por fase
    └── main.tsx                        # Ponto de entrada da aplicação React/Vite
```

---

## 5. Decisões Técnicas Adotadas

1. **Motor Temporal Baseado em Timestamps Absolutos em vez de `setInterval` Puro:**
   Navegadores reduzem a taxa de execução de timers (`setInterval`) em abas em segundo plano, provocando atraso acumulado (_drift_). Para evitar imprecisões e viabilizar a retomada automática após fechar o navegador, a sessão registra carimbos de tempo absolutos (`Date.now()`). O intervalo periódico serve apenas para recalcular o saldo exibido na interface, enquanto fases vencidas durante a ausência do usuário são recalculadas matematicamente na reabertura.
2. **Snapshot de Configuração e Proteção do Preset em Uso:**
   Ao iniciar uma sessão, os parâmetros do temporizador escolhido são preservados na sessão ativa, garantindo consistência durante o ciclo. Complementarmente, o hook `usePresets` e o componente `PresetSelector` bloqueiam operações de modificação/exclusão enquanto houver sessão ativa.
3. **Persistência Resiliente no `localStorage`:**
   Os serviços em `src/services/` encapsulam leitura e gravação com blocos `try/catch` e validação/normalização estrutural dos dados antes de hidratar o estado React, evitando que dados corrompidos ou restrições de cota quebrem a aplicação. As chaves utilizadas são `pomodoro.sessaoAtiva`, `pomodoro.presets` e `@pomodoro:tarefas:v1`.
4. **Ordenação Determinística Multinível das Tarefas:**
   A função pura `ordenarTarefasFixo` (`src/utils/taskSort.ts`) garante exibição previsível sem alterar o array original: (1) tarefas não concluídas antes de concluídas; (2) prioridade decrescente (`alta` → `media` → `baixa`); (3) data de criação mais antiga primeiro; e (4) desempate determinístico por `id`. Valores padrão na criação seguem `status: "backlog"` e `prioridade: "media"`.
5. **Alerta Sonoro Sintetizado com Web Audio API:**
   O serviço `audioService.ts` sintetiza três bipes senoidais (880 Hz) diretamente no navegador, dispensando arquivos `.mp3`/`.wav` externos. O hook `useAudioAlert` registra ouvintes únicos de `pointerdown` e `keydown` para desbloquear o `AudioContext` na primeira interação do usuário, respeitando as políticas de _autoplay_ dos navegadores modernos.
6. **Acessibilidade e Reutilização de Componentes:**
   Modais críticos utilizam `ConfirmDialog` com `role="dialog"`, `aria-modal="true"`, associação via `aria-labelledby`/`aria-describedby`, foco automático, travamento de tabulação (`Tab` / `Shift+Tab`) e fechamento pela tecla `Escape`. O `TimerDisplay` utiliza `aria-live="polite"` e `role="progressbar"`, e as cores de fase são centralizadas em variáveis `@theme` no Tailwind CSS v4.

---

## 6. Divisão de Responsabilidades da Equipe

- **Maria Cecília Freire — Domínio, Persistência e Motor Temporal:** Tipagens da sessão, serviço `sessionStorage.ts`, cálculos temporais em `timeMath.ts` e hook `usePomodoroSession.ts` (controles, snapshot e retomada automática).
- **Elise Welazkez — Gestão de Presets e Alerta Sonoro:** Tipagens e validações de presets, serviço `presetStorage.ts`, hook `usePresets.ts`, componentes `PresetSelector` e `PresetFormModal`, e sistema de áudio (`audioService.ts` e `useAudioAlert.ts`).
- **Samir Souza — Painel Lateral de Tarefas e Ordenação:** Tipagens de tarefas, serviço `taskStorage.ts`, algoritmo `taskSort.ts`, hook `useTasks.ts` e componente completo `TaskPanel.tsx`.
- **Tayná Nascimento — Shell Responsivo, Display do Timer, Modais Globais e Documentação:** Configuração inicial do projeto (Vite + React + TypeScript + Tailwind), `AppLayout.tsx`, `TimerDisplay.tsx`, `ConfirmDialog.tsx`, composição em `App.tsx` e documentação técnica (`README.md`).
