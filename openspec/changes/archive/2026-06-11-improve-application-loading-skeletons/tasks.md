## 1. Criar componentes de skeleton base

- [x] 1.1 Criar `src/components/skeletons/news-card-skeleton.tsx` com layout vertical e horizontal
- [x] 1.2 Criar `src/components/skeletons/news-highlight-grid-skeleton.tsx` com grid de destaques
- [x] 1.3 Criar `src/components/skeletons/news-detail-skeleton.tsx` com estrutura de página de detalhe
- [x] 1.4 Criar `src/components/skeletons/admin-dashboard-skeleton.tsx` com cards de estatísticas
- [x] 1.5 Criar `src/components/skeletons/collaborator-list-skeleton.tsx` com lista de colaboradores
- [x] 1.6 Criar `src/components/skeletons/news-list-skeleton.tsx` com barra de pesquisa e cards
- [x] 1.7 Criar `src/components/skeletons/news-publication-review-skeleton.tsx` com cards de moderação
- [x] 1.8 Criar `src/components/skeletons/index.tsx` para exportar todos os skeletons

## 2. Integrar skeletons nas páginas

- [x] 2.1 Substituir loading textual em `src/pages/home-page.tsx` por `NewsHighlightGridSkeleton` + `NewsCardSkeleton`
- [x] 2.2 Substituir loading textual em `src/pages/news-detail-page.tsx` por `NewsDetailSkeleton`
- [x] 2.3 Substituir loading textual em `src/pages/admin/admin-dashboard.tsx` por `AdminDashboardSkeleton` (sem loading state, componente disponível)
- [x] 2.4 Substituir loading textual em `src/pages/admin/collaborators-list-page.tsx` por `CollaboratorListSkeleton`
- [x] 2.5 Substituir loading textual em `src/pages/admin/news-listing-page.tsx` por `NewsListSkeleton`
- [x] 2.6 Substituir loading textual em `src/pages/admin/news-publication-review-page.tsx` por `NewsPublicationReviewSkeleton`
- [x] 2.7 Substituir loading textual no preview dialog de `src/pages/admin/news-listing-page.tsx` por `NewsDetailSkeleton`

## 3. Verificação e ajustes

- [x] 3.1 Verificar visualmente skeleton da Home Page comparando com estado carregado
- [x] 3.2 Verificar visualmente skeleton da News Detail Page comparando com estado carregado
- [x] 3.3 Verificar visualmente skeletons do Admin Dashboard
- [x] 3.4 Verificar visualmente skeletons das páginas de listagem de colaboradores e notícias
- [x] 3.5 Verificar que nenhuma página exibe texto "Carregando..." durante loading
- [x] 3.6 Verificar que estados de erro não foram afetados (ainda mostram mensagens de erro)
- [x] 3.7 Executar build do TypeScript para verificar erros de compilação
- [x] 3.8 Executar lint para verificar conformidade com coding conventions

## 4. Documentação

- [x] 4.1 Atualizar `src/components/skeletons/skeletons.md` com descrição dos componentes disponíveis
