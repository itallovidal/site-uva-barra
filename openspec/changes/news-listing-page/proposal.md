## Why

O site não possui uma página de listagem completa de notícias com pesquisa, filtros e paginação. A página atual de categoria (`/news/category/:category`) apenas exibe um número limitado de artigos sem interatividade. Isso impede o usuário de explorar o acervo completo de notícias.

## What Changes

- **Nova página de listagem** em `/noticias` que exibe todos os artigos publicados com suporte a pesquisa, filtros e paginação.
- **Parâmetro de categoria via URL** (`/noticias?categoria=tecnologia`) pré-seleciona a categoria no dropdown e filtra os resultados automaticamente, reaproveitando a mesma página.
- **Barra de pesquisa** que envia POST para `/news/search?q=<term>` ao submeter o formulário.
- **Dropdowns de filtro**: ordenação (mais novo / mais antigo) e categoria (lista dinâmica de categorias disponíveis).
- **Paginação** usando a infraestrutura `MetaApiPayload` já existente.
- **Reutilização** do componente `NewsCard` existente para renderizar cada artigo.
- O componente `CategorySection` e a rota `/news/category/:category` permanecem inalterados (são usados na home page com limite de 3 itens).

## Capabilities

### New Capabilities

- `news-listing`: Página de listagem completa de notícias com pesquisa full-text, filtros de categoria e ordenação, e paginação — acessível em `/noticias` ou pré-filtrada em `/noticias?categoria=<slug>`.

### Modified Capabilities

<!-- Nenhuma alteração de requisitos em specs existentes -->

## Impact

- **Novas rotas**: `/noticias` adicionada ao router.
- **Nova página**: `src/pages/news-listing-page.tsx`
- **Novo componente**: `src/components/news-listing/` (barra de pesquisa + dropdowns + grid + paginação)
- **API**: Usa endpoint existente com query params (`category`, `sort`, `page`, `perPage`) + novo endpoint de busca via POST `/news/search`.
- **Dependências**: Nenhuma nova dependência externa; usa `react-router-dom` (já presente) para leitura de `searchParams`.
