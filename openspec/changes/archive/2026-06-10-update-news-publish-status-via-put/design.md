## Context

O painel administrativo (`news-listing-page.tsx`) despublica notícias usando um endpoint separado e não documentado: `POST /news/:id/unpublish`. O `docs/api-endpoints.md` não menciona esse endpoint, e o `mock-service-worker` spec ainda lista `POST /api/news/:id/publish` e `POST /api/news/:id/unpublish` como requisitos. A ação de despublicar é, na prática, uma atualização de estado (`status` e `publishedAt`), o que semanticamente se alinha com `PUT /news/:id`.

## Goals / Non-Goals

**Goals:**
- Consolidar a ação de publicar/despublicar notícia no endpoint `PUT /news/:id` existente.
- Atualizar o frontend do painel admin para usar `PUT /news/:id` com `status` e `publishedAt` no body.
- Atualizar mocks e documentação para refletir o novo comportamento.
- Garantir que o schema de edição de notícia aceite `status` e `publishedAt` como campos opcionais.

**Non-Goals:**
- Não criar novas páginas ou componentes visuais.
- Não alterar o endpoint de criação de notícia (`POST /news`).
- Não alterar o backend real (a mudança é frontend + mocks + docs).

## Decisions

1. **Usar `PUT /news/:id` para despublicar**
   - **Rationale:** `PUT` é idempotente e semanticamente correto para atualizar recursos. Publicar/despublicar é uma atualização de campos (`status`, `publishedAt`), não uma ação transiente.
   - **Alternativa considerada:** Manter `POST /news/:id/unpublish`. Rejeitada porque fragmenta a API e contradiz o `docs/api-endpoints.md`.

2. **Enviar `status` e `publishedAt` explicitamente no body**
   - **Rationale:** O frontend deve ter controle total sobre o estado. Para despublicar, envia `status: "draft"` e `publishedAt: null`. Para publicar, envia `status: "published"` e `publishedAt: <ISO string>`.
   - **Alternativa considerada:** Apenas enviar `status` e deixar o backend inferir `publishedAt`. Rejeitada porque o frontend já pode enviar o timestamp correto e reduz lógica implícita no backend.

3. **Atualizar o mock `update-news.ts` para refletir `status` e `publishedAt`**
   - **Rationale:** O mock já existe para `PUT /news/:id`. Basta processar os novos campos no body.
   - **Alternativa considerada:** Criar mock separado para unpublish. Rejeitada porque o objetivo é eliminar o endpoint separado.

## Risks / Trade-offs

- **[Risco]** O backend real ainda pode exigir o endpoint `POST /news/:id/unpublish` se não foi atualizado.  
  → **Mitigação:** A mudança do frontend é acompanhada pela atualização do `docs/api-endpoints.md`, que serve como contrato para o backend. O backend deve ser atualizado para refletir o contrato.

- **[Trade-off]** A ação de despublicar no painel admin agora envia `publishedAt: null`, o que pode exigir ajuste no `AdminNewsCardDTO` ou no filtro de listagem.  
  → **Mitigação:** A listagem já usa `statusFilter` (`published`/`unpublished`), portanto o frontend atualizará a lista corretamente após a resposta do `PUT`.

## Migration Plan

1. Refatorar `news-listing-page.tsx`: substituir `POST /news/:id/unpublish` por `PUT /news/:id` com body.
2. Ajustar `src/mocks/news/update-news.ts` para processar `status` e `publishedAt`.
3. Atualizar `docs/api-endpoints.md`: documentar `status` e `publishedAt` no `PUT /news/:id`.
4. Atualizar specs: `api-endpoints-docs`, `mock-service-worker`, `admin-articles-list`, `news-schemas`.

## Open Questions

- Nenhuma — a mudança é um refactor direto consolidando lógica existente.
