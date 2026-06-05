import { Link } from 'react-router-dom';
import { useNewsByCategory } from '../../hooks/use-news-by-category';
import { NewsCard } from '../news-card/news-card';
import { Skeleton } from '../lib/skeleton';

interface CategorySectionProps {
  category: string;
  limit?: number;
}

function CategorySection({ category, limit = 3 }: CategorySectionProps) {
  const { articles, isLoading, error } = useNewsByCategory({
    category,
    page: 1,
    perPage: limit,
  });

  if (!isLoading && !error && articles.length === 0) return <></>;

  return (
    <section key={category} className="flex h-full flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 rounded-full bg-red-600" />
        <h2 className="text-2xl font-bold text-zinc-900">{category}</h2>
      </div>

      {isLoading && (
        <div className="flex flex-1 flex-col gap-3">
          {Array.from({ length: limit }).map((_, i) => (
            <div key={i} className="flex flex-1 flex-col gap-6 rounded-lg border bg-white p-4">
              <Skeleton className="aspect-video w-full shrink-0 rounded-md" />
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

      {error && <p className="flex-1 text-red-400">Erro ao carregar notícias: {error}</p>}

      {!isLoading && !error && articles.length === 0 && (
        <p className="flex-1 text-neutral-400">Nenhuma notícia encontrada.</p>
      )}

      {!isLoading && !error && articles.length > 0 && (
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-1 flex-col gap-3">
            {articles.map((article) => (
              <div key={article.id} className="flex-1">
                <NewsCard article={article} isVertical />
              </div>
            ))}
          </div>
          <div className="mt-auto pt-2">
            <Link
              to={`/noticias?categoria=${encodeURIComponent(category)}`}
              className="inline-flex items-center text-sm font-medium text-red-600 underline-offset-4 hover:underline"
            >
              Ver mais &rarr;
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export { CategorySection };
