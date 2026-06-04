## Context

Atualmente, cada hook em `src/hooks/` contém lógica de fetch embutida — `fetch` + `env.VITE_API_BASE_URL` + tratamento de resposta + parse de `ResponsePayload`. Isso resulta em duplicação do padrão `fetch(`${env.VITE_API_BASE_URL}/api/...)` em 4 hooks (e potencialmente mais no futuro). O `src/lib/api-auth-client.ts` já existe como cliente autenticado, mas os hooks públicos (não-autenticados) continuam usando `fetch` diretamente.

## Goals / Non-Goals

**Goals:**
- Criar diretório `src/api/` com subdiretórios por domínio (`news/`, `categories/`, `collaborators/`)
- Extrair cada chamada fetch para uma função nomeada em seu respectivo arquivo em `src/api/`
- Hooks consomem as funções de `src/api/` em vez de fazer fetch direto
- Manter `src/lib/api-auth-client.ts` como cliente autenticado de baixo nível, disponível para funções em `src/api/` que precisem de autenticação

**Non-Goals:**
- Não alterar comportamento, interface ou tipos dos hooks
- Não introduzir novos frameworks HTTP (axios, etc.) — permanece com `fetch` nativo
- Não criar camada de cache ou estado global (React Query, SWR) — isso é decisão futura
- Não refatorar `api-auth-client.ts` — apenas deixá-lo disponível para uso

## Decisions

1. **Estrutura de diretórios**: `src/api/<domínio>/<ação>.ts`
   - Ex: `src/api/news/get-latest-news.ts`, `src/api/news/get-by-category.ts`, `src/api/categories/list-all.ts`, `src/api/collaborators/list-all.ts`
   - Cada arquivo exporta uma única função nomeada
   - Alternativa considerada: um arquivo por domínio (ex: `src/api/news.ts`) — rejeitada porque arquivos únicos por domínio crescê-lo-iam demais; um arquivo por endpoint mantém coesão e facilita localização

2. **Nome das funções**: `getLatestNews`, `getNewsByCategory`, `listAllCategories`, `listAllCollaborators`
   - `get`/`list`/`create`/`update`/`remove` + substantivo
   - Segue o padrão de funções nomeadas (CODING-RULES.md)

3. **Reúso do `api-auth-client`**: As funções que chamam endpoints públicos usam `fetch` diretamente (como hoje). Funções para endpoints autenticados (ex: criar notícia, deletar categoria) usarão `apiAuthClient` internamente.

4. **Tratamento de erros**: As funções em `src/api/` retornam `Promise<ResponsePayload<T>>` e **não** tratam erros — apenas fazem a requisição e retornam o payload. O tratamento de erro (try/catch, setError) permanece nos hooks. Exceção: `apiAuthClient` já trata 401.

5. **Rota relativa vs absoluta**: As funções em `src/api/` recebem apenas o path relativo (`/api/news/latest`) e constroem a URL completa internamente usando `env.VITE_API_BASE_URL`. Isso evita repetir a base URL.

## Risks / Trade-offs

- [Duplicação temporária] → Durante a migração, hooks terão tanto o fetch inline quanto a nova função. Mitigação: fazer a migração de um hook por vez e remover o código antigo imediatamente.
- [Esquecer de migrar] → Algum hook novo pode ser criado com fetch inline. Mitigação: adicionar verificação em code review.
- [Quebra de tipo] → Se `ResponsePayload` mudar, toda a camada `src/api/` precisará ser atualizada. Mitigação: isso é verdade também hoje, e a centralização torna mais fácil identificar os locais.
