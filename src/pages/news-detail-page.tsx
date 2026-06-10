import { Link, useParams } from 'react-router-dom';
import { useNewsById } from '@/hooks/use-news-by-id';
import { NewsArticleRenderer } from '@/components/news/news-article-renderer';

function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { news, isLoading, error } = useNewsById(id ?? '');

  if (isLoading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-64 w-full rounded-xl bg-zinc-200" />
          <div className="flex gap-2">
            <div className="h-5 w-16 rounded-full bg-zinc-200" />
            <div className="h-5 w-20 rounded-full bg-zinc-200" />
          </div>
          <div className="h-6 w-32 rounded-full bg-zinc-200" />
          <div className="h-8 w-3/4 rounded bg-zinc-200" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-zinc-200" />
            <div className="h-4 w-5/6 rounded bg-zinc-200" />
            <div className="h-4 w-4/6 rounded bg-zinc-200" />
          </div>
        </div>
      </div>
    );
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
