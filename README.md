# Pomodoro — Aplicação Web de Gestão de Foco

Aplicação desenvolvida em Next.js (App Router), React e TypeScript com persistência local (`localStorage`) e execução cliente única.

## Decisões Técnicas de Engenharia

1. **Cálculo Baseado em Timestamps Absolutos (RNF-03, RN-07):**
   - Não foram utilizados temporizadores lineares contínuos baseados em `setInterval` para controle de estado, pois abas em segundo plano têm sua taxa de execução reduzida ou suspensa pelo navegador.
   - O estado do tempo restante é derivado matematicamente da diferença entre o timestamp do sistema (`Date.now()`) e o `fimFasePrevistoEm`, assegurando a reconstituição correta da sessão após fechamento ou atualização da aba.
2. **Mitigação de SSR e Hidratação no Next.js (RT-02, RT-03):**
   - Como o escopo restringe a persistência estritamente ao `localStorage` do navegador do usuário, as rotas e componentes utilizam diretivas de execução no cliente (`'use client'`) com salvaguardas de montagem, prevenindo erros de hidratação ou chamadas prematuras a APIs do navegador no servidor Node.js.
3. **Desacoplamento de Tarefas e Sessão (RN-09):**
   - O painel de tarefas e a sessão de foco mantêm contratos de dados e chaves de armazenamento separadas (`pomodoro.tarefas` e `pomodoro.sessaoAtiva`), de modo que operações em tarefas não afetam o temporizador e vice-versa.

## Instruções para o Avaliador (Execução Local)

### Pré-requisitos

- Node.js versão 18.17.0 ou superior instalada.

### Como Rodar

1. Extraia os arquivos ou clone o repositório no seu computador:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DA_PASTA>
   ```

## Para os colegas APAGAR DEPOIS

### Entrega Pessoa 1 — Motor Temporal, Persistência e Sessão (`usePomodoroSession`)

A camada de domínio, persistência (`localStorage`) e motor temporal da sessão já está implementada e validada, já adaptada para **Vite** e tipagens da equipe.

- **Arquivos implementados:**
  - `src/types/session.ts` — Tipagens centrais (`SessaoAtiva`, `SnapshotPreset`, `FaseSessao`, `StatusSessao`).
  - `src/utils/timeMath.ts` — Funções puras de cálculo temporal, transição de fases/ciclos e recálculo offline por timestamps (`recalcularSessaoPorTimestamp`).
  - `src/services/sessionStorage.ts` — Persistência isolada na chave `pomodoro.sessaoAtiva` com validação estrutural contra dados corrompidos (`R-03`, `RNF-06`).
  - `src/hooks/usePomodoroSession.ts` — Hook principal com snapshot imutável de preset (`RN-05`), controles operacionais, retomada automática e descarte de sessão.
  - `src/TesteTimer.tsx` — Componente temporário de teste visual do motor. Para testar isoladamente, basta alterar o `src/main.tsx` trocando `<App />` por `<TesteTimer />` 

#### Como consumir o hook na interface (`App.tsx` / Componentes):

```tsx
import { usePomodoroSession } from './hooks/usePomodoroSession';

const {
  // Estados prontos para exibição
  sessao,                      // Objeto SessaoAtiva | null
  tempoFormatado,              // String formatada em "MM:SS" (ex: "25:00")
  progressoPercentual,         // Número de 0 a 100 para a barra de progresso
  carregado,                   // Boolean (aguardar ser true antes de renderizar)
  foiRetomadaAutomaticamente,  // Boolean (exibe aviso/botão de descartar sessão retomada )
  erroPersistencia,            // String | null (alerta caso o localStorage falhe)
  presetEmUsoId,               // String | null (ID do preset ativo para bloqueio na UI)

  // Ações operacionais
  iniciarSessao,               // (preset: TemporizadorPersonalizado) => void
  pausarSessao,                // () => void
  retomarSessao,               // () => void
  pularFase,                   // () => void (avança sem incrementar ciclos)
  reiniciarCiclos,             // () => void (chamar após confirmação no modal)
  encerrarSessao,              // () => void (chamar após confirmação no modal)
  descartarSessaoRetomada,     // () => void (chamar após confirmação no modal)
} = usePomodoroSession({
  aoFinalizarFase: (faseConcluida, proximaFase) => {
    // Conectar aqui o alerta sonoro da Pessoa 2 
  },
});
## Resumo da Arquitetura e Base Implementada

A estrutura inicial do projeto foi configurada para garantir execução 100% no navegador (_client-side_), persistência local e desenvolvimento paralelo entre os integrantes sem conflitos de código.

### Tecnologias e Configurações Aplicadas

- **Stack Principal:** Next.js (App Router), React, TypeScript e Tailwind CSS v4.
- **Estilização Semântica (`globals.css`):** Configuração via `@import "tailwindcss"` e bloco `@theme` definindo paletas suaves e acessíveis para diferenciar visualmente cada estado do ciclo: **Foco** (tons de azul), **Pausa Curta** (tons de amarelo pastel) e **Pausa Longa** (tons de âmbar).
- **Prevenção de Hydration Mismatch (`page.tsx`):** Utilização da diretiva `'use client'` combinada com o hook nativo `useSyncExternalStore` para garantir que a leitura do `localStorage` ocorra exclusivamente após a montagem no navegador, evitando discrepâncias entre SSR e cliente.
- **Contratos de Dados Canônicos (`types.ts`):** Definição centralizada das interfaces `TemporizadorPersonalizado`, `SessaoAtiva`, `Tarefa` e das chaves exclusivas de armazenamento (`STORAGE_KEYS`), permitindo integração previsível entre todos os módulos.
- **Limpeza de Ambiente:** Remoção de arquivos demonstrativos padrão e configuração do `.gitignore` para impedir o versionamento de pastas geradas localmente (`node_modules/` e `.next/`).

### Componentes Base e Stubs Entregues

- **Shell Responsivo (`AppLayout`):** Estrutura em grid adaptável com cabeçalho fixo, área principal de duas colunas no desktop (temporizador à esquerda e tarefas à direita) e coluna única em telas menores.
- **Visor do Temporizador (`TimerDisplay`):** Exibição numérica formatada (`mm:ss`) com espaçamento fixo (`tabular-nums`), etiqueta de fase atual, contador de ciclos e barra de progresso acessível.
- **Modal de Confirmação Global (`ConfirmDialog`):** Diálogo reutilizável com foco automático no botão de ação, atributos ARIA e fechamento via tecla `Escape`.
- **Stubs de Integração:** Interfaces provisórias para o seletor de presets, painel de tarefas e hook de sessão, permitindo que a aplicação compile e rode localmente (`npm run dev`) desde o início.

### Divisão de Responsabilidades

- **Pessoa 1 (Motor do Timer):** Lógica de contagem regressiva baseada em timestamps absolutos (`Date.now()`), transição automática de fases, controles operacionais e persistência da sessão ativa.
- **Pessoa 2 (Presets e Áudio):** CRUD de temporizadores personalizados, validações de limites e emissão de alerta sonoro via Web Audio API ao fim das fases.
- **Pessoa 3 (Gestão de Tarefas):** CRUD de tarefas, alteração de estados/prioridades, ordenação determinística e persistência independente do cronômetro.
- **Pessoa 4 (Interface e Documentação):** Layout responsivo, visor visual do timer, modais globais de confirmação e documentação técnica no `README.md`.
Aplicação web _client-side_ para gerenciamento de tempo e produtividade baseada na técnica Pomodoro, desenvolvida em **React** e **TypeScript** com **Vite** e **Tailwind CSS v4**.

---

## 1. Especificações Técnicas e Arquitetura

- **Execução 100% Local (_Client-Side_):** A aplicação roda integralmente no navegador sem dependência de servidores externos, APIs de backend ou serviços em nuvem.
- **Persistência Exclusiva em `localStorage`:** Todos os dados (temporizadores personalizados, tarefas e estado da sessão ativa) são armazenados localmente no navegador sob chaves padronizadas (`STORAGE_KEYS`), garantindo recuperação do estado mesmo após recarregar ou fechar a página.
- **Cronômetro Baseado em Timestamps Absolutos:** O cálculo de tempo restante utiliza referências reais de relógio (`Date.now()`), evitando atrasos (_drift_) causados pela suspensão de abas em segundo plano.
- **Interface Responsiva e Acessível:** Layout adaptável (duas colunas no desktop e coluna única em dispositivos móveis), suporte a navegação por teclado nos modais (`Escape` e foco automático) e diferenciação visual suave entre fases:
  - **Foco:** Tons suaves de azul (`foco-*`)
  - **Pausa Curta:** Tons suaves de amarelo (`pausaCurta-*`)
  - **Pausa Longa:** Tons suaves de âmbar (`pausaLonga-*`)

---

## 2. Como Executar Localmente

### Pré-requisitos

- **Node.js** (versão 18 ou superior) e **npm**.

### Passo a passo

1. Clone o repositório e acesse a pasta do projeto:

   ```bash
   git clone https://github.com/TaynaFerreira22/Trabalho-Pomodoro.git
   cd trabalho-pomodoro
````

2. Instale as dependências:

   ```bash
   npm install
   ```

   _(No Windows PowerShell, caso a execução de scripts `.ps1` esteja bloqueada, utilize `npm.cmd install`)._

3. Inicie o servidor de desenvolvimento local:

   ```bash
   npm run dev
   ```

   _(Ou `npm.cmd run dev` no PowerShell)._

4. Acesse no navegador o endereço exibido no terminal:
   ```text
   http://localhost:5173
   ```

---

## 3. Estrutura de Pastas e Base Implementada

```text
src/
├── components/
│   ├── Common/
│   │   └── ConfirmDialog.tsx      # [Pronto] Modal global acessível de confirmação
│   ├── Layout/
│   │   └── AppLayout.tsx          # [Pronto] Shell responsivo (cabeçalho + 2 colunas)
│   ├── Presets/
│   │   └── PresetSelector.tsx     # [Stub] Seletor e CRUD de presets (Pessoa 2)
│   ├── Tasks/
│   │   └── TaskPanel.tsx          # [Stub] Painel e lista de tarefas (Pessoa 3)
│   └── Timer/
│       └── TimerDisplay.tsx       # [Pronto] Visor visual mm:ss, fase, ciclo e progresso
├── hooks/
│   └── usePomodoroSession.ts      # [Stub] Motor do cronômetro e sessão ativa (Pessoa 1)
├── types/
│   └── index.ts                   # [Pronto] Contratos de dados canônicos e STORAGE_KEYS
├── App.tsx                        # [Pronto] Composição principal dos módulos e modais
├── index.css                      # [Pronto] Configuração Tailwind v4 e paleta @theme
└── main.tsx                       # Ponto de entrada React
```

### Divisão de Responsabilidades da Equipe

- **Pessoa 1 (Motor e Lógica do Timer):** Implementar `usePomodoroSession.ts` com contagem regressiva via timestamps absolutos, transições automáticas de fase, controles operacionais e persistência da sessão ativa no `localStorage`.
- **Pessoa 2 (Presets e Áudio):** Implementar `PresetSelector.tsx` com CRUD de temporizadores personalizados, validações de intervalo e alerta sonoro via Web Audio API ao término de cada fase.
- **Pessoa 3 (Gestão de Tarefas):** Implementar `TaskPanel.tsx` com CRUD de tarefas, alteração de estados/prioridades, ordenação determinística fixa e persistência independente do timer.
- **Pessoa 4 (Interface Base e Documentação):** Estruturação do projeto (Vite + Tailwind v4), `AppLayout`, `TimerDisplay`, `ConfirmDialog`, contratos em `types/index.ts` e `README.md`.

---

## 4. Avisos Técnicos para os Integrantes

1. **Importação Estrita de Tipos (`import type`):** O TypeScript deste projeto está configurado com `verbatimModuleSyntax`. Sempre que importar uma interface ou tipo (ex.: `Tarefa`, `FaseSessao`, `TemporizadorPersonalizado`), utilize obrigatoriamente `import type`:
   ```typescript
   import type { Tarefa, EstadoTarefa } from "../../types";
   ```
2. **Caminhos Relativos:** Utilize caminhos relativos padrão (`./` e `../`) nas importações entre pastas dentro de `src/`.
3. **Sem Variáveis Não Utilizadas:** O compilador bloqueia variáveis ou funções declaradas sem uso (`noUnusedLocals`). Remova estados ou imports não utilizados antes de commitar.

---

## 5. Guia de Comandos Git para Trabalho em Equipe

Para evitar conflitos de código, **ninguém deve editar ou enviar commits diretamente para `main` ou `develop`**. Todo desenvolvimento ocorre em branches individuais criadas a partir de `develop`.

### Mapa de Branches

- `main`: Versão estável final para entrega/avaliação.
- `develop`: Branch de integração onde as entregas da equipe são reunidas.
- `feature/<nome-da-tarefa>`: Branches individuais (ex.: `feature/timer-engine`, `feature/presets-audio`, `feature/tasks-panel`, `feature/ui-docs`).

### 1. Configuração Inicial (Apenas na primeira vez)

Após clonar o repositório, mude para `develop` e crie a sua branch individual antes de alterar qualquer arquivo:

```bash
git clone https://github.com/TaynaFerreira22/Trabalho-Pomodoro.git
cd trabalho-pomodoro
npm install

git checkout develop
git checkout -b feature/nome-da-sua-feature
```

### 2. Rotina Diária (Antes de começar a programar)

Atualize sua branch local com as últimas integrações feitas pelos colegas na `develop`:

```bash
git checkout develop
git pull origin develop

git checkout feature/nome-da-sua-feature
git merge develop
```

### 3. Salvando e Enviando Alterações (Commit e Push)

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

### 4. Integrando na `develop` (Pull Request)

1. Acesse o repositório no GitHub após o `git push`.
2. Clique em **Compare & pull request**.
3. Verifique se o destino (**base**) é **`develop`** (nunca `main`) e a origem (**compare**) é a sua **`feature/...`**.
4. Revise as alterações e conclua o **Merge pull request**.

> **Atenção:** Nunca utilize `git push --force` nas branches `main` ou `develop`, pois isso sobrescreve o histórico remoto e apaga o trabalho enviado pelos outros integrantes.

### 5. Comandos Úteis de Recuperação

- **Guardar alterações temporariamente sem commitar** (para trocar de branch):
  ```bash
  git stash
  # Para recuperar depois:
  git stash pop
  ```
- **Descartar alterações locais em um arquivo específico** (antes do `git add`):
  ```bash
  git restore caminho/do/arquivo.tsx
  ```
- **Conferir em qual branch você está no momento:**
  ```bash
  git branch
  ```
