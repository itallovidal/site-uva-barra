import { Link, useParams } from 'react-router-dom';
import { useNewsById } from '@/hooks/use-news-by-id';
import { NewsArticleRenderer } from '@/components/news/news-article-renderer';
import { NewsDetailSkeleton } from '@/components/skeletons';

function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { news, isLoading, error } = useNewsById(id ?? '');

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
    </article>
  );
}

export { NewsDetailPage };
