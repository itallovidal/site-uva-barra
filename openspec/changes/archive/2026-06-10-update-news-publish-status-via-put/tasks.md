## 1. Frontend — Refatorar despublicação no painel admin

- [x] 1.1 Em `src/pages/admin/news-listing-page.tsx`, substituir a função `unpublish` para usar `PUT /news/:id` com body `{ status: "draft", publishedAt: null }`.
- [x] 1.2 Ajustar a mensagem de erro e o tratamento de resposta para refletir o retorno de `News` (em vez de `{ success: boolean }`).
- [x] 1.3 Verificar se o botão "Despublicar" continua funcionando e atualiza a lista após sucesso.

## 2. Schema — Atualizar newsSchema

- [x] 2.1 Em `src/schemas/news-schemas.ts`, expandir o enum `status` para incluir `NewsStatus.PUBLISHED` e `NewsStatus.ARCHIVED` (além de `DRAFT` e `REVIEW`).
- [x] 2.2 Adicionar `publishedAt: z.string().datetime().nullable().optional()` ao `newsSchema`.
- [x] 2.3 Garantir que `CreateNewsDTO` continue compatível com o schema atualizado.

## 3. Mocks — Ajustar handler de update

- [x] 2.1 Em `src/mocks/news/update-news.ts`, ler `status` e `publishedAt` do request body.
- [x] 2.2 Refletir os valores recebidos no objeto de resposta retornado pelo mock.
- [x] 2.3 Remover qualquer referência a handlers separados de `publish` ou `unpublish` (se existirem no arquivo de setup de mocks).

## 4. Documentação — Atualizar docs/api-endpoints.md

- [x] 4.1 Na seção `PUT /news/:id`, adicionar ao request body exemplo os campos `status` e `publishedAt`.
- [x] 4.2 Garantir que a resposta 200 do `PUT /news/:id` mostre `status` e `publishedAt` atualizados.

## 5. Specs — Sincronizar especificações

- [x] 5.1 Atualizar `openspec/specs/api-endpoints-docs/spec.md` para refletir `status` e `publishedAt` no `PUT /news/:id`.
- [x] 5.2 Atualizar `openspec/specs/mock-service-worker/spec.md` para remover requisitos de `POST /api/news/:id/publish` e `unpublish` e ajustar `PUT /news/:id`.
- [x] 5.3 Atualizar `openspec/specs/admin-articles-list/spec.md` para refletir o uso de `PUT /news/:id` na ação de despublicar.
- [x] 5.4 Atualizar `openspec/specs/news-schemas/spec.md` para adicionar cenários de `status` e `publishedAt`.
