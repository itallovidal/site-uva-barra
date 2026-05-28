import { useNewsByCategory } from '../../hooks/use-news-by-category';
import { NewsCard } from '../news-card/news-card';
import { Skeleton } from '../lib/skeleton';

interface CategorySectionProps {
  category: string;
  limit?: number;
}

function CategorySection({ category, limit = 3 }: CategorySectionProps) {
  const { articles, isLoading, error } = useNewsByCategory(category, limit);

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 rounded-full bg-red-600" />
        <h2 className="text-2xl font-bold text-zinc-900">{category}</h2>
      </div>

      {isLoading && (
        <div className="space-y-3">
          {Array.from({ length: limit }).map((_, i) => (
            <div key={i} className="flex gap-6 rounded-lg border bg-white p-4">
              <Skeleton className="h-40 w-60 flex-shrink-0 rounded-md" />
              <div className="flex flex-1 flex-col gap-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="mt-2 h-3 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="text-red-400">Erro ao carregar notícias: {error}</p>
      )}

      {!isLoading && !error && articles.length === 0 && (
        <p className="text-neutral-400">Nenhuma notícia encontrada.</p>
      )}

      {!isLoading && !error && articles.length > 0 && (
        <div className="space-y-3">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}

export { CategorySection };
