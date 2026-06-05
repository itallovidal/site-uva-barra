import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useNewsById } from '@/hooks/use-news-by-id';
import { NewsHtmlContent } from '@/components/news/news-html-content';

const FALLBACK_IMAGE = '/agencia-uva-fallback.jpg';

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

  const coverSrc = news.coverImageUrl || FALLBACK_IMAGE;
  const isHtml = /<main[^>]*id=["']materia["']/i.test(news.content);

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      {/* Título */}
      <h1 className="mb-4 text-2xl font-bold leading-tight text-zinc-900 sm:text-3xl">
        {news.title}
      </h1>

      {/* Resumo */}
      <p className="mb-8 text-lg italic text-zinc-600">{news.summary}</p>

      {/* Tags */}
      {news.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {news.tags.map(function renderTag(tag) {
            return (
              <span
                key={tag}
                className="rounded-full border border-zinc-300 px-3 py-0.5 text-xs text-zinc-600"
              >
                {tag}
              </span>
            );
          })}
        </div>
      )}

      {/* Badge de categoria + Autor */}
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="inline-block rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
          {news.category}
        </span>
        <span className="text-sm text-zinc-500">
          Escrito por: <span className="font-medium text-zinc-700">{news.author}</span>
        </span>
      </div>

      {/* Imagem de capa */}
      <div className="mb-6 overflow-hidden rounded-xl">
        <img
          src={coverSrc}
          alt={news.title}
          className="h-72 w-full object-cover sm:h-96"
          onError={function handleImgError(e) {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
          }}
        />
      </div>

      {/* Corpo da notícia */}
      {isHtml ? (
        <NewsHtmlContent content={news.content} />
      ) : (
        <div className="prose max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-li:text-zinc-700 prose-a:text-red-600">
          <Markdown remarkPlugins={[remarkGfm]}>{news.content}</Markdown>
        </div>
      )}
    </article>
  );
}

export { NewsDetailPage };
