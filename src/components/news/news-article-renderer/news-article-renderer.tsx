import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { NewsHtmlContent } from '@/components/news/news-html-content';

const FALLBACK_IMAGE = '/agencia-uva-fallback.jpg';

interface NewsArticleRendererProps {
  title: string;
  summary: string;
  category: string;
  author: string | null | undefined;
  coverImageUrl: string | null | undefined;
  tags: string[];
  content: string;
}

function NewsArticleRenderer({
  title,
  summary,
  category,
  author,
  coverImageUrl,
  tags,
  content,
}: NewsArticleRendererProps) {
  const coverSrc = coverImageUrl || FALLBACK_IMAGE;
  const isHtml = /<main[^>]*id=["']materia["']/i.test(content);

  return (
    <>
      <p className="mb-8 text-lg italic text-zinc-600">{summary}</p>

      {tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map(function renderTag(tag) {
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

      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="inline-block rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
          {category}
        </span>
        {author && (
          <span className="text-sm text-zinc-500">
            Escrito por: <span className="font-medium text-zinc-700">{author}</span>
          </span>
        )}
      </div>

      <div className="mb-6 overflow-hidden rounded-xl">
        <img
          src={coverSrc}
          alt={title}
          className="h-72 w-full object-cover sm:h-96"
          onError={function handleImgError(e) {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
          }}
        />
      </div>

      {isHtml ? (
        <NewsHtmlContent content={content} />
      ) : (
        <div className="prose max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-li:text-zinc-700 prose-a:text-red-600">
          <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </div>
      )}
    </>
  );
}

export { NewsArticleRenderer };
export type { NewsArticleRendererProps };
