## 1. Fixtures do Mock

- [ ] 1.1 Adicionar campo `slug` a todos os itens do array `latestNewsExample` em `src/mocks/news/news-fixtures.ts` (slugs kebab-case derivados do título de cada notícia)

## 2. Handler MSW

- [ ] 2.1 Atualizar `handleSearchNews` em `src/mocks/news/search-news.ts` para ler o parâmetro `order` da query string (default `'desc'`)
- [ ] 2.2 Expandir o filtro de busca para verificar correspondência parcial em `slug` além de `title`
- [ ] 2.3 Aplicar ordenação por `publishedAt` após filtragem: `desc` (mais recente primeiro) ou `asc` (mais antigo primeiro), com `null` sempre ao final

## 3. Função de API

- [ ] 3.1 Atualizar `searchNews` em `src/api/news/search-news.ts` para aceitar parâmetro opcional `order: 'asc' | 'desc'` com default `'desc'`
- [ ] 3.2 Incluir `order` como query param na URL da requisição `POST /news/search`

## 4. Hook

- [ ] 4.1 Atualizar `useNewsSearch` em `src/hooks/use-news-search.ts` para aceitar segundo parâmetro opcional `order: 'asc' | 'desc'` com default `'desc'`
- [ ] 4.2 Repassar `order` para `searchNews` na chamada dentro do `useEffect`
- [ ] 4.3 Adicionar `order` ao array de dependências do `useEffect`
