## Why

A estrutura atual de `src/mocks/` concentra handlers, estado mutável e registros em um único arquivo grande. Isso está tornando o conjunto difícil de navegar, manter e evoluir conforme novos endpoints entram no projeto.

Esta mudança organiza os mocks por domínio e ação, reduzindo acoplamento e deixando cada handler mais fácil de localizar e alterar sem mexer no restante da suíte de mocks.

## What Changes

- Reorganizar `src/mocks/` em pastas por domínio, com arquivos por ação/endpoint.
- Transformar `src/mocks/handlers.ts` em um arquivo apenas de registro dos handlers, sem lógica de negócio.
- Separar handlers de `news`, `user`, `categories` e `collaborators` em módulos próprios.
- Manter o comportamento atual dos mocks e das respostas retornadas.
- **BREAKING**: caminhos de import internos dos mocks vão mudar para a nova estrutura.

## Capabilities

### New Capabilities
- Nenhuma.

### Modified Capabilities
- `mock-service-worker`: altera a organização e a responsabilidade dos mocks para uma estrutura modular por domínio/ação.

## Impact

- `src/mocks/handlers.ts` vira apenas ponto central de registro.
- Novos arquivos em `src/mocks/[dominio]/[acao-endpoint].ts`.
- `src/mocks/worker.ts` passa a consumir apenas o registro consolidado.
- Imports e referências internas aos mocks precisam ser atualizados para a nova estrutura.
