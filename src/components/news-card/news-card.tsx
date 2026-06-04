import { Link } from 'react-router-dom';
import type { NewsPreviewDTO } from '../../domain/entities';
import { timeAgo } from '../../utils/time-ago';

interface NewsCardProps {
  article: NewsPreviewDTO;
}

function NewsCard({ article }: NewsCardProps) {
  const { id, coverImageUrl, category, title, summary, authorName, publishedAt } = article;

  const cover = coverImageUrl.length > 3 ? coverImageUrl : '/agencia-uva-fallback.jpg';

  return (
    <Link
      to={`/noticia/${id}`}
      className="group flex gap-6 rounded-lg border bg-white p-4 transition-colors hover:bg-zinc-50"
    >
      <div className="h-40 w-60 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <span className="inline-block rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
            {category}
          </span>
          <h3 className="mt-2 text-xl font-bold text-zinc-900 line-clamp-2 group-hover:underline">
            {title}
          </h3>
          {summary && (
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-600 line-clamp-2">
              {summary}
            </p>
          )}
        </div>

        <div className="mt-2 text-sm text-zinc-400">
          {publishedAt && <span>{timeAgo(publishedAt)}</span>}
          {authorName && (
            <>
              <span className="mx-1">-</span>
              <span>Por {authorName}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export { NewsCard };
