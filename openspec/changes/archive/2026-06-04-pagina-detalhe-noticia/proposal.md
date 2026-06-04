## Why

Os cards de notícia no site já linkam para `/noticia/:id`, mas essa rota não existe — o usuário cai na página 404. A leitura de notícias é a funcionalidade central do portal, então a ausência de uma página de detalhe impede completamente o consumo de conteúdo pelos visitantes.

## What Changes

- Adicionar a rota pública `/noticia/:id` no router
- Criar a página `NoticiaDetailPage` que busca a notícia pelo ID e exibe: imagem de capa → tags → badge de categoria (vermelho) → resumo → corpo da notícia
- Criar a função de API `getNewsById` para buscar `GET /news/:id`
- Criar o hook `useNewsById` seguindo o padrão `useState + useEffect` do projeto
- Adicionar mock MSW para `GET /news/:id` com uma notícia genérica em Markdown e imagem de fallback (`/agencia-uva-fallback.jpg`)
- Suportar dois formatos de conteúdo: **HTML** (detectado por `<main id="materia">`) e **Markdown** (renderizado com `react-markdown` + `remark-gfm`)

## Capabilities

### New Capabilities

- `news-detail-page`: Página pública de detalhe de notícia com suporte a conteúdo HTML e Markdown, exibindo capa, tags, categoria, resumo e corpo.

### Modified Capabilities

<!-- Nenhuma capability existente tem seus requisitos alterados -->

## Impact

- **Routing**: `src/routes/index.tsx` — nova rota pública `/noticia/:id`
- **Pages**: novo arquivo `src/pages/news-detail-page.tsx`
- **API**: novo arquivo `src/api/news/get-news-by-id.ts`
- **Hooks**: novo arquivo `src/hooks/use-news-by-id.ts`
- **Mocks**: novo handler `src/mocks/news/get-news-by-id.ts` com fixture atualizada em `src/mocks/news/news-fixtures.ts`
- **Types**: `News` entity já existe em `src/domain/entities.ts` — sem alterações necessárias
- **Dependências**: nenhuma nova dependência (`react-markdown` + `remark-gfm` já instalados)
