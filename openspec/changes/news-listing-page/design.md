## Context

O projeto já possui `NewsCard`, hooks de listagem por categoria (`useNewsByCategory`), hook de categorias (`useCategories`), e a infraestrutura de paginação via `MetaApiPayload`. A página atual `/news/category/:category` (via `CategorySection`) exibe apenas 3 artigos sem interação. A nova página `/noticias` deve ser a experiência completa de listagem.

## Goals / Non-Goals

**Goals:**
- Página única `/noticias` que serve como listagem geral E como listagem filtrada por categoria (via query param `?categoria=<slug>`).
- Pesquisa full-text submetendo POST para `/news/search?q=<term>`.
- Dropdowns de filtro: ordenação (`mais-novo` / `mais-antigo`) e categoria.
- Paginação usando `MetaApiPayload` já suportada pela API.
- Título da página com o nome da categoria (quando filtrada) + barra vermelha decorativa lateral.
- Reuso do componente `NewsCard` existente.

**Non-Goals:**
- Substituir ou alterar `CategorySection` / `/news/category/:category`.
- Autenticação ou permissões na listagem pública.
- Suporte a múltiplas categorias simultâneas (somente uma de cada vez).

## Decisions

### 1. Uma página, dois modos (geral vs. filtrado por categoria)

**Decisão:** Usar a mesma rota `/noticias` com `useSearchParams` para ler `?categoria=`. Se presente, pré-seleciona o dropdown e filtra os resultados. Sem o param, exibe tudo.

**Alternativa considerada:** Rota separada `/noticias/categoria/:slug`. Rejeitada porque duplicaria a lógica de layout e filtros.

**Rationale:** Código único, comportamento derivado de URL — mais fácil de manter e permite que links de categoria sejam simplesmente `/noticias?categoria=tecnologia`.

---

### 2. Dois modos de busca: listagem filtrada vs. pesquisa full-text

**Decisão:** Modo listagem usa GET na API existente com query params (`category`, `sort`, `page`, `perPage`). Ao submeter a pesquisa, navega para `/noticias/busca?q=<term>` (GET redirect) ou, conforme requisito, envia POST para `/news/search?q=<term>`.

**Abordagem:** A barra de pesquisa, ao ser submetida, realiza um POST para `/news/search?q=<term>` e exibe os resultados na mesma página (substituindo o grid de listagem). Os filtros de ordenação e categoria permanecem visíveis mas são desabilitados durante o modo de pesquisa.

**Rationale:** Isola os dois fluxos (navegação + busca) sem criar rota extra, e mantém a URL limpa.

---

### 3. Novo hook `useNewsListing` centraliza os parâmetros

**Decisão:** Criar `src/hooks/use-news-listing.ts` que aceita `{ category?, sort, page, perPage }` e gerencia fetch + estado. Para busca, criar `useNewsSearch` separado.

**Rationale:** Evita prop drilling do estado de filtros entre os subcomponentes da página; cada hook tem responsabilidade única.

---

### 4. Novo endpoint de API `searchNews`

**Decisão:** Criar `src/api/news/search-news.ts` que faz POST para `${VITE_API_BASE_URL}/news/search?q=<term>` e retorna `ResponsePayload<NewsPreviewDTO[]>` com metadados de paginação.

**Rationale:** Segue o padrão estabelecido nos outros arquivos de `src/api/news/`.

---

### 5. Estrutura de componentes da listagem

```
src/
  pages/
    news-listing-page.tsx          ← página principal
  components/
    news-listing/
      news-listing-filters.tsx     ← barra de pesquisa + dropdowns
      news-listing-grid.tsx        ← grid de NewsCards + empty state + loading
      news-listing-pagination.tsx  ← controles de paginação
      news-listing-header.tsx      ← título com nome da categoria + barra vermelha
```

**Rationale:** Alinha com a convenção de feature-folders existente (e.g., `src/components/news-card/`).

## Risks / Trade-offs

- **Compatibilidade da API de busca** → A API ainda não tem o endpoint POST `/news/search`. O MSW mock deverá ser criado junto. Mitigation: criar handler de mock e marcar como pendente de integração real.
- **Estado de URL vs. estado local** → Manter filtros sincronizados com `searchParams` pode causar re-renders excessivos. Mitigation: usar `useCallback` e `useMemo` para derivar estado dos params apenas quando necessário.
- **Modo pesquisa desabilita filtros** → UX pode ser confusa. Mitigation: exibir mensagem "Resultados para: <termo>" e botão "Limpar pesquisa" para retornar ao modo listagem.
