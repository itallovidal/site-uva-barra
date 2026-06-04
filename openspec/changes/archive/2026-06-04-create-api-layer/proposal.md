## Why

Centralizar todas as chamadas HTTP em uma camada `src/api/` para eliminar duplicação de lógica de fetch, facilitar manutenção de endpoints, possibilitar testes unitários da camada de API independentemente dos hooks, e fornecer um local único e rastreável para todas as requisições da aplicação.

## What Changes

- Criar diretório `src/api/` com subdiretórios por domínio (ex: `src/api/news/`, `src/api/categories/`, `src/api/collaborators/`)
- Extrair a lógica de `fetch` dos hooks `use-news-highlights`, `use-news-by-category`, `use-collaborators` e `use-categories` para funções na camada `src/api/`
- Extrair a lógica de `fetch` de outros locais que fazem chamadas HTTP diretas (ex: formulários, páginas admin)
- Manter `src/lib/api-auth-client.ts` como cliente autenticado de baixo nível — a nova camada `src/api/` poderá utilizá-lo internamente
- Nenhuma mudança de comportamento ou interface pública — apenas refatoração de extração

## Capabilities

### New Capabilities
- `api-layer`: Camada centralizada de chamadas HTTP organizada por domínio, com funções nomeadas que encapsulam requisições fetch para a API REST do backend, retornando dados tipados com `ResponsePayload<T>`

### Modified Capabilities

- *(nenhuma — apenas refatoração interna, sem mudança de requisitos)*

## Impact

- `src/hooks/` — hooks passam a chamar funções de `src/api/` em vez de fazer fetch direto
- `src/lib/api-auth-client.ts` — permanece inalterado; pode ser usado internamente pelas funções em `src/api/`
- `src/api/` — novo diretório criado
- Nenhum endpoint, tipo ou comportamento externo é alterado
