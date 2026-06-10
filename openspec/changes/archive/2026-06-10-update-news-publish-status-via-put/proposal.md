## Why

O sistema atual usa um endpoint separado `POST /news/:id/unpublish` para despublicar notícias. Isso cria uma rota adicional e não documentada no `docs/api-endpoints.md`, fragmentando a lógica de atualização. Consolidar a publicação/despublicação no `PUT /news/:id` (que já serve para atualizar notícias) simplifica a API, reduz a superfície de manutenção e mantém a documentação consistente.

## What Changes

- **Remover** a chamada ao endpoint `POST /news/:id/unpublish` do frontend (`news-listing-page.tsx`).
- **Modificar** a ação de despublicar no painel admin para usar `PUT /news/:id` com body `{ status: "draft", publishedAt: null }`.
- **Modificar** o mock handler `PUT /news/:id` para aceitar `status` e `publishedAt` no request body e refletir essas mudanças na resposta.
- **Atualizar** `docs/api-endpoints.md` para documentar que `PUT /news/:id` aceita `status` e `publishedAt` como campos parciais.
- **Atualizar** specs afetados (`api-endpoints-docs`, `mock-service-worker`, `admin-articles-list`, `news-schemas`) para refletir a nova forma de publicar/despublicar.

## Capabilities

### New Capabilities
- (nenhum — a mudança é um refactor de capabilities existentes)

### Modified Capabilities
- `api-endpoints-docs`: Adicionar ao `PUT /news/:id` a possibilidade de enviar `status` e `publishedAt` no body.
- `mock-service-worker`: Atualizar o mock `PUT /news/:id` para aceitar `status` e `publishedAt` no body; remover referências a handlers separados de publish/unpublish (se existirem no spec).
- `admin-articles-list`: Alterar a ação de despublicar para usar `PUT /news/:id` em vez de `POST /news/:id/unpublish`.
- `news-schemas`: Permitir que o schema de edição de notícia aceite `status` e `publishedAt` como campos opcionais/parciais.

## Impact

- `src/pages/admin/news-listing-page.tsx` — refatorar a função `unpublish`.
- `src/mocks/news/update-news.ts` — ajustar o mock para processar `status` e `publishedAt`.
- `docs/api-endpoints.md` — atualizar a seção `PUT /news/:id`.
- `openspec/specs/api-endpoints-docs/spec.md` — atualizar requisitos do endpoint `PUT /news/:id`.
- `openspec/specs/mock-service-worker/spec.md` — remover/ajustar requisitos de publish/unpublish separados e ajustar `PUT /news/:id`.
- `openspec/specs/admin-articles-list/spec.md` — ajustar cenário de despublicar.
- `openspec/specs/news-schemas/spec.md` — adicionar cenários de validação para `status` e `publishedAt` opcionais.
