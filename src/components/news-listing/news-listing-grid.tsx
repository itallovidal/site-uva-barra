import { NewsCard } from '@/components/news-card/news-card';
import { Skeleton } from '@/components/lib/skeleton';
import type { NewsPreviewDTO } from '@/domain/entities';

interface NewsListingGridProps {
  articles: NewsPreviewDTO[];
  isLoading: boolean;
  error: string | null;
  searchTerm?: string;
}

function NewsListingGridSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-40 w-full rounded-lg" />
      ))}
    </div>
  );
}

function NewsListingGrid({ articles, isLoading, error, searchTerm }: NewsListingGridProps) {
  if (isLoading) {
    return <NewsListingGridSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-8 text-center text-sm text-red-600">
        Ocorreu um erro ao carregar as notícias. Tente novamente mais tarde.
      </div>
    );
  }

  if (articles.length === 0) {
    const message = searchTerm
      ? `Nenhum resultado encontrado para: "${searchTerm}"`
      : 'Nenhuma notícia encontrada';

    return (
      <div className="rounded-lg border border-zinc-200 px-4 py-12 text-center text-sm text-zinc-500">
        {message}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export { NewsListingGrid };
