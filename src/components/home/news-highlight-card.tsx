import { Link } from 'react-router-dom';
import type { NewsPreviewDTO } from '../../domain/entities';

interface NewsHighlightCardProps {
  highlight: NewsPreviewDTO;
  isFeatured?: boolean;
  isCompact?: boolean;
}

function NewsHighlightCard({
  highlight,
  isFeatured = false,
  isCompact = false,
}: NewsHighlightCardProps) {
  const { coverImageUrl, categoryName, title, summary } = highlight;

  return (
    <Link
      to={`/noticia/${highlight.id}`}
      className={`group relative block overflow-hidden rounded-lg bg-neutral-800 ${
        isCompact
          ? 'aspect-[4/3]'
          : isFeatured
            ? 'aspect-[16/9] lg:aspect-auto lg:h-full'
            : 'aspect-[16/9]'
      }`}
    >
      {coverImageUrl ? (
        <img
          src={coverImageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-neutral-700 to-neutral-900" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className={`absolute bottom-0 left-0 right-0 ${isCompact ? 'p-3' : 'p-4 md:p-6'}`}>
        <span
          className={`inline-block rounded-full bg-red-600 px-3 py-0.5 font-semibold uppercase tracking-wider text-white ${
            isCompact ? 'mb-1 text-[10px]' : 'mb-2 text-xs'
          }`}
        >
          {categoryName}
        </span>
        <h2
          className={`mt-1 text-white line-clamp-2 ${
            isCompact ? 'text-sm' : isFeatured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
          }`}
        >
          {title}
        </h2>
        {!isCompact && <p className="mt-1 text-sm text-neutral-300 line-clamp-2">{summary}</p>}
      </div>
    </Link>
  );
}

export { NewsHighlightCard };
