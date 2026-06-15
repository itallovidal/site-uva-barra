import { Link, useParams } from 'react-router-dom';
import { useNewsById } from '@/hooks/use-news-by-id';
import { useNewsByCategory } from '@/hooks/use-news-by-category';
import { NewsArticleRenderer } from '@/components/news/news-article-renderer';
import { NewsCard } from '@/components/news-card/news-card';
import { NewsDetailSkeleton } from '@/components/skeletons';
import { Skeleton } from '@/components/lib/skeleton';

function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { news, isLoading, error } = useNewsById(id ?? '');

  const suggestionsResult = useNewsByCategory({
    category: news?.category ?? '',
    page: 1,
    perPage: 4,
  });

  const suggestions = suggestionsResult.articles
    .filter((article) => article.id !== news?.id)
    .slice(0, 3);

  const showSuggestions = news?.category && (suggestionsResult.isLoading || suggestions.length > 0);

  if (isLoading) {
    return <NewsDetailSkeleton />;
  }

  if (error || !news) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="mb-4 text-lg font-semibold text-zinc-700">
          {error ?? 'Notícia não encontrada.'}
        </p>
        <Link
          to="/"
          className="inline-block rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold leading-tight text-zinc-900 sm:text-3xl">
        {news.title}
      </h1>

      <NewsArticleRenderer
        title={news.title}
        summary={news.summary}
        category={news.category}
        author={news.author}
        coverImageUrl={news.coverImageUrl}
        tags={news.tags}
        content={news.content}
      />

      {showSuggestions && (
        <div className="mt-12">
          <h2 className="mb-6 text-lg font-bold uppercase tracking-wider text-zinc-900">
            Leia também
          </h2>

          {suggestionsResult.isLoading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-72 w-full rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {suggestions.map((article) => (
                <NewsCard key={article.id} article={article} isVertical />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export { NewsDetailPage };
