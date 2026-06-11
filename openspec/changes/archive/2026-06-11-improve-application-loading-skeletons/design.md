## Context

A aplicação utiliza o componente `Skeleton` do shadcn/ui (`@src/components/lib/skeleton.tsx`) que já está configurado e disponível. Atualmente, os estados de loading são representados por textos simples como "Carregando notícias..." ou "Carregando colaboradores...", o que cria uma experiência visual quebrada e sem feedback estrutural.

O objetivo é criar um sistema de skeletons reutilizáveis que imitem fielmente o layout dos componentes reais, mantendo as mesmas dimensões, espaçamentos e estrutura visual para evitar layout shifts quando os dados carregam.

## Goals / Non-Goals

**Goals:**
- Criar componentes de skeleton reutilizáveis em `src/components/skeletons/`
- Substituir todos os estados de loading textual por skeletons animados
- Garantir que os skeletons respeitem as dimensões dos componentes reais
- Manter a consistência visual com o design system existente

**Non-Goals:**
- Alterar a lógica de fetching de dados ou hooks
- Modificar o componente `Skeleton` base do shadcn/ui
- Adicionar skeletons a componentes que não possuem estado de loading atual
- Criar animações customizadas além do `animate-pulse` padrão

## Decisions

**1. Estrutura de arquivos de skeletons**
- Criar um arquivo por skeleton principal: `news-card-skeleton.tsx`, `news-highlight-grid-skeleton.tsx`, `news-detail-skeleton.tsx`, `admin-dashboard-skeleton.tsx`, `collaborator-list-skeleton.tsx`, `news-list-skeleton.tsx`, `news-publication-review-skeleton.tsx`
- Exportar todos de um índice `src/components/skeletons/index.tsx`

**2. Composição sobre herança**
- Os skeletons serão compostos usando o componente `Skeleton` base do shadcn/ui com classes Tailwind para formar layouts
- Não criar uma abstração de "skeleton container" - cada skeleton é um componente React independente

**3. Mapeamento 1:1 de layout**
- Cada skeleton deve espelhar o layout exato do componente real:
  - `NewsCardSkeleton` → mesma estrutura do `NewsCard` (imagem, título, resumo, autor)
  - `NewsHighlightGridSkeleton` → grid de destaques com skeletons de cards
  - `NewsDetailSkeleton` → estrutura da página de detalhe (imagem, título, conteúdo)
  - `AdminDashboardSkeleton` → cards de estatísticas e seções
  - `CollaboratorListSkeleton` → lista de cards de colaboradores
  - `NewsListSkeleton` → lista de cards de notícias com barra de pesquisa
  - `NewsPublicationReviewSkeleton` → lista de cards de moderação

**4. Fallback para estados de erro**
- Manter os estados de erro existentes (não usar skeletons para erro)
- Skeletons são apenas para estados `isLoading === true`

## Risks / Trade-offs

- [Risco: Layout shift se skeleton não for preciso] → Mitigação: Testar visualmente cada skeleton comparando com o componente real
- [Trade-off: Manutenção extra quando componentes mudarem] → Mitigação: Manter skeletons simples e documentar que precisam ser atualizados junto com os componentes
- [Risco: Over-engineering com muitos skeletons] → Mitigação: Focar apenas nos componentes que já possuem loading state

## Migration Plan

1. Criar todos os componentes de skeleton
2. Atualizar cada página substituindo o texto de loading pelo skeleton correspondente
3. Verificar visualmente cada página no estado de loading
4. Nenhuma migração de dados ou deploy especial necessário

## Open Questions

- Nenhuma questão em aberto
