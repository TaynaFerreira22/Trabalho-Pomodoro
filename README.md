# Pomodoro — Aplicação Web de Gestão de Foco

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
   ```

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
