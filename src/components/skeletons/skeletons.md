# Skeletons

Componentes de skeleton reutilizáveis para estados de loading, baseados no componente `Skeleton` do shadcn/ui.

## Componentes disponíveis

| Componente | Descrição |
|---|---|
| `NewsCardSkeleton` | Skeleton para card de notícia, com suporte a layout vertical e horizontal |
| `NewsHighlightGridSkeleton` | Skeleton para o grid de destaques da home page |
| `NewsDetailSkeleton` | Skeleton para a página de detalhe de notícia |
| `AdminDashboardSkeleton` | Skeleton para o dashboard administrativo |
| `CollaboratorListSkeleton` | Skeleton para a lista de colaboradores |
| `NewsListSkeleton` | Skeleton para a listagem de notícias (com barra de pesquisa) |
| `NewsPublicationReviewSkeleton` | Skeleton para a página de aprovação de notícias |

## Como usar

```tsx
import { NewsCardSkeleton } from '@/components/skeletons';

function MyComponent() {
  if (isLoading) {
    return <NewsCardSkeleton isVertical />;
  }

  return <NewsCard article={article} isVertical />;
}
```

## Manutenção

Ao alterar o layout de um componente, lembre-se de atualizar o skeleton correspondente para que ele continue espelhando fielmente o layout real e evitando layout shifts.
