# Pomodoro — Aplicação Web de Gestão de Foco

Aplicação web _single-user_ de temporizador Pomodoro para organização de ciclos de estudo e gerenciamento paralelo de tarefas, executada integralmente no navegador com persistência local via `localStorage`.

---

## 1. Stack Tecnológica

- **Build Tool & Dev Server:** Vite
- **Framework UI:** React 19 + TypeScript
- **Estilização:** Tailwind CSS v4
- **Persistência:** Web Storage API (`localStorage`)
- **Alerta Sonoro:** Web Audio API (síntese nativa no navegador, sem arquivos externos)

---

## 2. Requisitos e Escopo Implementados

- **Gestão de Temporizadores Personalizados (`RF-01` a `RF-04`):** Criação, edição, listagem e exclusão de presets com validações de limite (`VR-01` a `VR-05`) e bloqueio automático enquanto o preset estiver em uso por uma sessão ativa (`RN-01`).
- **Execução de Sessão de Foco (`RF-05` a `RF-11`, `RF-14`):** Controle completo de fases (_Foco_, _Pausa Curta_ e _Pausa Longa_), snapshot imutável dos parâmetros no início da sessão (`RN-05`), pular fase sem incrementar ciclos (`RN-03`), reiniciar ciclos (`RN-04`), encerrar sessão, troca automática de preset (`RN-02`) e alerta sonoro ao término de cada fase (`RN-13`).
- **Persistência e Retomada Automática (`RF-12`, `RF-13`):** Restauração automática da sessão ativa ao recarregar ou reabrir o navegador utilizando timestamps absolutos (`RN-06`, `RN-07`, `RN-08`), com opção de descarte da sessão retomada (`UC11`).
- **Painel Lateral de Tarefas (`RF-15` a `RF-20`):** CRUD de tarefas (`VR-06` a `VR-08`) desacoplado do timer (`RN-09`), valores padrão (`backlog` e prioridade `média` — `RN-12`), ordenação determinística multinível (`RN-10`) e confirmação explícita para operações destrutivas (`RN-11`).
- **Interface Responsiva e Acessível (`RNF-04`, `RNF-05`, `RNF-07`):** Layout em duas colunas no desktop e pilha vertical em dispositivos móveis, integralmente em português, com semântica ARIA e navegação por teclado.

---

## 3. Instalação e Execução

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (incluso com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/TaynaFerreira22/Trabalho-Pomodoro.git
cd trabalho-pomodoro

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento (Vite)
npm run dev
```

Após iniciar, acesse o endereço exibido no terminal (por padrão, `http://localhost:5173`).

### Scripts Disponíveis

| Comando           | Descrição                                                                                           |
| :---------------- | :-------------------------------------------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento do Vite com Hot Module Replacement (HMR).                      |
| `npm run build`   | Executa a verificação de tipos TypeScript (`tsc`) e gera o bundle otimizado de produção em `dist/`. |
| `npm run preview` | Sobe um servidor local para validar o build final gerado na pasta `dist/`.                          |

---

## 4. Arquitetura de Pastas

O projeto adota separação clara entre domínio, persistência e interface (`RNF-09`):

```text
src/
├── components/
│   ├── Common/          # Componentes globais reutilizáveis (ex.: ConfirmDialog acessível)
│   ├── Layout/          # Shell responsivo da aplicação (AppLayout)
│   ├── Presets/         # Seletor, listagem e formulário modal de presets
│   ├── Tasks/           # Painel lateral, cartões e modal de tarefas
│   └── Timer/           # Display regressivo, indicador de fase/ciclo e barra de progresso
├── hooks/               # Hooks de estado e regras de negócio (usePomodoroSession, usePresets, useTasks)
├── services/            # Camada de acesso ao localStorage e serviço de áudio Web Audio API
├── types/               # Contratos e interfaces TypeScript (preset.ts, session.ts, task.ts)
├── utils/               # Funções puras de cálculo temporal (timeMath.ts) e ordenação (taskSort.ts)
├── App.tsx              # Composição principal, controles da sessão e modais globais
├── index.css            # Configuração do Tailwind CSS e tokens de tema por fase
└── main.tsx             # Ponto de entrada da aplicação Vite
```

---

## 5. Justificativas Técnicas

1. **Timestamps Absolutos em vez de `setInterval` Puro (`RNF-03`, `R-02`):**
   Navegadores modernos reduzem a frequência de timers (`setInterval` / `setTimeout`) em abas inativas ou minimizadas para economizar recursos, causando atraso (_drift_) na contagem. Para garantir precisão, o motor registra `inicioFaseEm` e `fimFasePrevistoEm` (em milissegundos via `Date.now()`). O intervalo de `250ms` apenas atualiza a interface calculando `fimFasePrevistoEm - Date.now()`. Ao reabrir o navegador (`UC10`), o algoritmo `recalcularSessaoPorTimestamp` avança sequencialmente pelas fases vencidas com exatidão matemática.
2. **Snapshot Imutável na Sessão Ativa (`RN-05`):**
   Ao iniciar uma sessão, os valores do preset escolhido são copiados para `snapshotPreset` dentro de `SessaoAtiva`, isolando a sessão em andamento de eventuais alterações posteriores.
3. **Validação Estrutural na Leitura do `localStorage` (`R-03`, `RNF-06`):**
   Os dados lidos das chaves `pomodoro.sessaoAtiva`, `pomodoro.presets` e `pomodoro.tarefas` passam por validação de integridade em tempo de execução antes de hidratar o estado React, prevenindo falhas causadas por armazenamento corrompido ou inconsistente.
4. **Acessibilidade e Bloqueio de Foco em Modais (`RNF-07`, `RF-20`):**
   O componente `ConfirmDialog` implementa `role="dialog"`, `aria-modal="true"`, associação semântica via `aria-labelledby`/`aria-describedby`, foco automático, travamento de tabulação (`Tab` / `Shift+Tab`) e fechamento via tecla `Escape`.
5. **Web Audio API para Alerta Sonoro (`RNF-10`, `R-01`):**
   Utiliza oscilador nativo do navegador acionado a partir da interação do usuário, evitando bloqueios de políticas de _autoplay_ e eliminando dependência de arquivos de mídia externos.

---

## 6. Divisão da Equipe

- **Pessoa 1:** Domínio da sessão, persistência (`pomodoro.sessaoAtiva`) e motor temporal baseado em timestamps.
- **Pessoa 2:** CRUD de presets (`pomodoro.presets`), regras de bloqueio (`RN-01`) e alerta sonoro (`Web Audio API`).
- **Pessoa 3:** Painel lateral de tarefas (`pomodoro.tarefas`), validações e ordenação fixa multinível (`RN-10`).
- **Pessoa 4:** Estrutura base Vite + React + TypeScript, shell responsivo, display do timer, modal global de confirmação e documentação.

---

---

## Guia para os Colegas — Resumo do Progresso e Fluxo no GitHub

### Resumo do que já está implementado

- **Base e Interface Principal (Pessoa 4):**
  - Projeto configurado em **Vite + React + TypeScript + Tailwind CSS**.
  - Layout responsivo em duas colunas no desktop e pilha vertical no mobile (`src/components/Layout/AppLayout.tsx`).
  - Display do temporizador (`src/components/Timer/TimerDisplay.tsx`) com formatação `mm:ss`, cores semânticas por fase (_Foco_, _Pausa Curta_, _Pausa Longa_), contagem de ciclos e barra de progresso acessível.
  - Modal global acessível (`src/components/Common/ConfirmDialog.tsx`) com suporte a `Escape`, `Enter` e travamento de foco (`Tab`), já conectado no `src/App.tsx` para **Encerrar Sessão (`UC08`)**, **Reiniciar Ciclos (`UC07`)** e **Descartar Sessão Retomada (`UC11`)**.
  - Placeholders isolados (`src/components/Presets/PresetSelector.tsx` e `src/components/Tasks/TaskPanel.tsx`) já encaixados no layout para evitar conflitos durante o desenvolvimento paralelo.

- **Motor Temporal e Persistência de Sessão (Pessoa 1):**
  - Tipagens centrais completas em `src/types/` (`preset.ts`, `session.ts`, `task.ts` e `index.ts` com `STORAGE_KEYS`).
  - Serviço de persistência validada em `src/services/sessionStorage.ts` (`pomodoro.sessaoAtiva`).
  - Cálculos temporais e recálculo de fases vencidas em `src/utils/timeMath.ts`.
  - Hook completo `usePomodoroSession` em `src/hooks/usePomodoroSession.ts` (iniciar com snapshot, pausar, retomar, pular fase sem incrementar ciclo, reiniciar ciclos, encerrar e retomada automática por timestamp).

### Onde cada integrante deve plugar sua parte

- **Pessoa 2 (Gestão de Presets e Áudio):**
  1. Criar `src/services/presetStorage.ts`, `src/hooks/usePresets.ts` e `src/services/audioService.ts`.
  2. Substituir o placeholder `src/components/Presets/PresetSelector.tsx` e criar o formulário modal de presets (`VR-01` a `VR-05`).
  3. No `src/App.tsx`:
     - Passar `presetEmUsoId={session.presetEmUsoId}` para bloquear edição/exclusão do preset ativo (`RN-01`).
     - Substituir o `PRESET_PADRAO` provisório pelo preset selecionado no `usePresets`.
     - Na troca de preset com sessão ativa (`RN-02`), chamar `session.iniciarSessao(novoPreset)` (que substitui a sessão anterior e inicia a nova com snapshot).
     - Conectar o alerta sonoro no callback `usePomodoroSession({ aoFinalizarFase: ... })` (`RN-13`).
     - Reutilizar `<ConfirmDialog />` na exclusão de presets (`RN-11`).

- **Pessoa 3 (Painel Lateral de Tarefas e Ordenação):**
  1. Criar `src/services/taskStorage.ts`, `src/utils/taskSort.ts` (ordenação fixa `RN-10`) e `src/hooks/useTasks.ts` (valores padrão `backlog` e `media` — `RN-12`).
  2. Substituir o placeholder `src/components/Tasks/TaskPanel.tsx` pelos componentes da lista, cartões de tarefa e modal de criação/edição (`VR-06` a `VR-08`).
  3. Reutilizar `<ConfirmDialog />` na exclusão de tarefas (`RN-11`).

---

### Fluxo de Atualizações no Repositório (Git / GitHub)

#### 1. Configuração Inicial (Apenas na primeira vez)

Após clonar o repositório, mude para `develop` e crie a sua branch individual antes de alterar qualquer arquivo:

```bash
git clone https://github.com/TaynaFerreira22/Trabalho-Pomodoro.git
cd trabalho-pomodoro
npm install

git checkout develop
git checkout -b feature/nome-da-sua-feature
```

#### 2. Rotina Diária (Antes de começar a programar)

Atualize sua branch local com as últimas integrações feitas pelos colegas na `develop`:

```bash
git checkout develop
git pull origin develop

git checkout feature/nome-da-sua-feature
git merge develop
```

#### 3. Salvando e Enviando Alterações (Commit e Push)

Ao concluir uma etapa funcional nos seus arquivos:

```bash
# Confira se apenas os arquivos da sua responsabilidade foram alterados
git status

# Adicione e registre o commit
git add .
git commit -m "feat: descreva brevemente o que foi implementado"

# Envie sua branch para o GitHub
git push -u origin feature/nome-da-sua-feature
```

#### 4. Integrando na `develop` (Pull Request)

1. Acesse o repositório no GitHub após o `git push`.
2. Clique em **Compare & pull request**.
3. Verifique se o destino (`base`) é **`develop`** (nunca `main`) e a origem (`compare`) é a sua **`feature/...`**.
4. Revise as alterações e conclua o **Merge pull request**.

> **Atenção:** Nunca utilize `git push --force` nas branches `main` ou `develop`, pois isso sobrescreve o histórico remoto e apaga o trabalho enviado pelos outros integrantes.

#### 5. Comandos Úteis de Recuperação

- **Guardar alterações temporariamente sem commitar (para trocar de branch):**
  ```bash
  git stash
  ```
- **Recuperar as alterações guardadas depois:**
  ```bash
  git stash pop
  ```
- **Descartar alterações locais em um arquivo específico (antes do `git add`):**
  ```bash
  git restore caminho/do/arquivo.tsx
  ```
- **Conferir em qual branch você está no momento:**
  ```bash
  git branch
  ```
