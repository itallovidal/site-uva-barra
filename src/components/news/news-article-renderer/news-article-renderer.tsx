import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BASE_URL } from '@/env';
import { NewsHtmlContent } from '@/components/news/news-html-content';

const FALLBACK_IMAGE = `${BASE_URL}agencia-uva-fallback.jpg`;

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
        <Link
          to={`/noticias?categoria=${encodeURIComponent(category)}`}
          className="inline-block rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-red-700"
        >
          {category}
        </Link>
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
        <div
          className={[
            'text-zinc-700 leading-relaxed',
            // Paragraphs
            '[&_p]:mb-4 [&_p]:leading-relaxed',
            // Headings
            '[&_h1]:mb-4 [&_h1]:mt-8 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-zinc-900',
            '[&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-zinc-900',
            '[&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-900',
            '[&_h4]:mb-2 [&_h4]:mt-4 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-zinc-900',
            // Images
            '[&_img]:my-6 [&_img]:w-full [&_img]:rounded-xl [&_img]:object-cover',
            // Links
            '[&_a]:text-red-600 [&_a]:underline [&_a:hover]:text-red-700',
            // Lists
            '[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6',
            '[&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6',
            '[&_li]:mb-1',
            // Blockquote
            '[&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-red-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-zinc-600',
            // Strong / em
            '[&_strong]:font-semibold [&_strong]:text-zinc-900',
            '[&_em]:italic',
            // Code
            '[&_code]:rounded [&_code]:bg-zinc-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:font-mono [&_code]:text-zinc-800',
            '[&_pre]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-zinc-900 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-zinc-100',
            '[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit',
            // Horizontal rule
            '[&_hr]:my-8 [&_hr]:border-zinc-300',
            // Tables
            '[&_table]:my-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm',
            '[&_th]:border [&_th]:border-zinc-300 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:bg-zinc-100',
            '[&_td]:border [&_td]:border-zinc-300 [&_td]:px-3 [&_td]:py-2',
          ].join(' ')}
        >
          <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </div>
      )}
    </>
  );
}

export { NewsArticleRenderer };
export type { NewsArticleRendererProps };
