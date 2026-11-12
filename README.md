# Aplicação Web de Gestão de Foco (Pomodoro)

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

---

## Guia de Comandos Git para Trabalho em Equipe

Para evitar conflitos de código e perda de alterações, o repositório utiliza o fluxo baseado em **branches isoladas** a partir de `develop`. Nenhum integrante deve fazer alterações diretamente nas branches `main` ou `develop`.

### Mapa de Branches

- `main`: Código estável e finalizado para entrega/avaliação.
- `develop`: Branch de integração onde as funcionalidades prontas da equipe são reunidas.
- `feature/<nome-da-tarefa>`: Branches individuais de trabalho (ex.: `feature/timer-engine`, `feature/presets-audio`, `feature/tasks-panel`, `feature/ui-docs`).

### 1. Configuração Inicial (Apenas na primeira vez)

Após clonar o repositório, mude para a branch `develop` e crie a sua branch individual antes de editar qualquer arquivo:

```bash
git clone <URL_DO_REPOSITORIO>
cd trabalho-pomodoro
npm install

git checkout develop
git checkout -b feature/nome-da-sua-feature
```

### 2. Rotina Diária (Antes de começar a programar)

Sempre atualize a sua branch local com as novidades que os colegas já integraram na `develop` para evitar conflitos grandes no final:

```bash
# 1. Salve ou descarte alterações locais pendentes antes de trocar de branch
git checkout develop
git pull origin develop

# 2. Volte para a sua branch e traga as atualizações da develop para ela
git checkout feature/nome-da-sua-feature
git merge develop
```

### 3. Salvando e Enviando Alterações (Commit e Push)

Ao concluir uma etapa ou funcionalidade na sua pasta:

```bash
# Verifique quais arquivos foram modificados (confira se não há arquivos fora da sua pasta)
git status

# Adicione os arquivos modificados
git add .

# Crie um commit descritivo seguindo o padrão convencional
git commit -m "feat: implementa ordenacao fixa e persistencia de tarefas"

# Envie sua branch para o GitHub
git push -u origin feature/nome-da-sua-feature
```

### 4. Integrando o Trabalho na `develop` (Pull Request)

1. Acesse o repositório no GitHub após dar o `git push`.
2. Clique em **Compare & pull request**.
3. Certifique-se de que a base de destino (**base**) é **`develop`** (nunca `main`) e a origem (**compare**) é a sua **`feature/...`**.
4. Solicite a revisão de outro integrante da equipe e conclua o **Merge pull request**.

### 5. Comandos Úteis de Recuperação

- **Guardar alterações temporariamente sem fazer commit** (útil quando precisa trocar de branch rápido):
  ```bash
  git stash
  # Para recuperar as alterações guardadas depois:
  git stash pop
  ```
- **Descartar alterações erradas em um arquivo específico** (antes do `git add`):
  ```bash
  git restore caminho/do/arquivo.tsx
  ```
- **Verificar em qual branch você está trabalhando no momento:**
  ```bash
  git branch
  ```
