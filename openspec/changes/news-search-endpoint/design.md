## Context

O endpoint `POST /news/search` já existe no frontend (`src/api/news/search-news.ts`) e no mock MSW (`src/mocks/news/search-news.ts`). Atualmente, ele:
- Filtra notícias apenas por `title`
- Não suporta o parâmetro `order` para ordenação por data
- O mock usa `latestNewsExample`, cujos itens não incluem `slug`

O hook `useNewsSearch` consome a função `searchNews` mas também não expõe `order`.

O `NewsPreviewDTO` não possui campo `slug` — o slug existe apenas nos fixtures internos de detalhe (`newsDetailFixture`, `publishedNewsExample`).

## Goals / Non-Goals

**Goals:**
- Adicionar `order: 'asc' | 'desc'` (padrão `desc`) ao cliente de API `searchNews`, ao hook `useNewsSearch` e ao handler MSW
- Expandir a lógica de filtragem do mock para incluir correspondência por `slug`, sem alterar `NewsPreviewDTO`
- Adicionar campo `slug` aos itens de `latestNewsExample` para viabilizar filtragem por slug no mock

**Non-Goals:**
- Alterar a interface pública do servidor real (backend Firebase — fora de escopo deste projeto frontend)
- Modificar a paginação existente
- Adicionar `slug` ao `NewsPreviewDTO` retornado pela API (slug é campo interno de busca, não de apresentação)

## Decisions

### 1. `order` como query param, não body param

**Decisão**: `order` é enviado como query string (`?q=<term>&order=<asc|desc>`), seguindo o mesmo padrão do `q` já existente.

**Alternativa considerada**: Enviar `order` no body do POST. Rejeitado porque o endpoint usa POST semanticamente para busca (não criação), e os parâmetros de controle de listagem (`order`, `page`, `perPage`) são convencionalmente enviados via query string neste projeto (ver `get-news-listing.ts`).

### 2. Slug não exposto no `NewsPreviewDTO`

**Decisão**: Os itens de `latestNewsExample` receberão `slug` internamente, mas o mock filtra pelo campo e retorna apenas os campos do DTO existente.

**Alternativa considerada**: Adicionar `slug` ao `NewsPreviewDTO`. Rejeitado porque causaria mudança de contrato da API sem necessidade — a busca por slug é lógica do servidor, não um campo de exibição para o cliente.

### 3. Ordenação via `publishedAt`

**Decisão**: O mock ordena por `publishedAt` (string ISO). Itens com `publishedAt: null` ficam no final em ambas as ordens.

## Risks / Trade-offs

- **[Risco] `latestNewsExample` sem slug** → Os slugs precisam ser adicionados manualmente ao fixture. Risco de inconsistência se novos fixtures forem criados sem slug.  
  _Mitigação_: A task cobre adicionar slug a todos os itens do `latestNewsExample`.

- **[Trade-off] Filtro por slug apenas no mock** → O backend Firebase pode ter comportamento diferente (ex: busca case-insensitive parcial vs. exata). O mock simula correspondência parcial case-insensitive igual à do título.
