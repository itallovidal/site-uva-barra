## Why

O endpoint `POST /news/search` existe mas não suporta ordenação por data nem busca por slug, limitando a utilidade da busca de notícias. Adicionar `order` e expandir a busca para cobrir título e slug torna a pesquisa mais completa e consistente com o contrato esperado pelo backend Firebase.

## What Changes

- Adicionar parâmetro `order` (`asc` | `desc`) ao endpoint `POST /news/search`
- Expandir a lógica de busca para verificar `title` e `slug` da notícia (não apenas `title`)
- Atualizar a função de API `searchNews` para aceitar e enviar `order`
- Atualizar o hook `useNewsSearch` para aceitar e repassar `order`
- Atualizar o handler MSW `searchNewsHandler` para filtrar por `slug` e aplicar ordenação por `publishedAt`

## Capabilities

### New Capabilities

- `news-search-order`: Suporte ao parâmetro `order` (`asc`/`desc`) na busca de notícias para ordenar por data de publicação
- `news-search-by-slug`: Busca de notícias que considera correspondência no campo `slug` além do `title`

### Modified Capabilities

- `mock-service-worker`: O handler MSW de busca de notícias precisa refletir o novo comportamento (filtro por slug + ordenação)

## Impact

- `src/api/news/search-news.ts` — adicionar parâmetro `order`
- `src/hooks/use-news-search.ts` — aceitar e repassar `order`
- `src/mocks/news/search-news.ts` — filtrar por slug e ordenar resultados
- Nenhuma breaking change na interface do componente consumidor; `order` é opcional com default `desc`
