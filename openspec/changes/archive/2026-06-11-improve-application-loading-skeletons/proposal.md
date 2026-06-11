## Why

A aplicação atualmente exibe textos estáticos como "Carregando notícias..." durante os estados de loading, o que resulta em uma experiência de usuário pobre e visualmente quebrada. Precisamos substituir esses estados por skeletons animados que imitam o layout real dos componentes, proporcionando uma percepção de velocidade e fluidez.

## What Changes

- Criar componentes de skeleton reutilizáveis em `src/components/skeletons/` usando o componente `Skeleton` do shadcn/ui já configurado
- Substituir estados de loading textual por skeletons nas páginas:
  - `src/pages/home-page.tsx`
  - `src/pages/news-detail-page.tsx` (página de detalhe de notícia)
  - `src/pages/admin/*` (dashboard, listagens, formulários)
- Criar skeletons específicos para componentes principais:
  - `NewsCardSkeleton`
  - `NewsHighlightGridSkeleton`
  - `NewsDetailPageSkeleton`
  - `AdminDashboardSkeleton`
  - `CollaboratorListSkeleton`
  - `NewsListSkeleton`
  - `NewsPublicationReviewSkeleton`
- Garantir que os skeletons respeitem as dimensões e layouts dos componentes reais para evitar layout shift

## Capabilities

### New Capabilities
- `loading-skeletons`: Sistema de skeletons reutilizáveis para estados de loading da aplicação

### Modified Capabilities
- `news-detail-page`: Adicionar requirement de estado de loading com skeleton no lugar de spinner/texto

## Impact

- Componentes afetados: `src/pages/home-page.tsx`, páginas de admin, página de detalhe de notícia
- Novos arquivos: `src/components/skeletons/*.tsx`
- Biblioteca já disponível: `@/components/lib/skeleton.tsx` (shadcn/ui)
- Nenhuma alteração de API ou dependências externas
