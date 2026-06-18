import { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '@/env';
import type { ReactNode } from 'react';
import type { NewsPreviewDTO } from '../../domain/entities';
import { timeAgo } from '../../utils/time-ago';

interface NewsCardContextValue {
  article: NewsPreviewDTO;
}

const NewsCardCtx = createContext<NewsCardContextValue | null>(null);

function useNewsCard() {
  const ctx = useContext(NewsCardCtx);
  if (!ctx) throw new Error('useNewsCard must be used within a NewsCard.Root');
  return ctx;
}

interface NewsCardRootProps {
  article: NewsPreviewDTO;
  children: ReactNode;
  className?: string;
}

function NewsCardRoot({ article, children, className }: NewsCardRootProps) {
  const cover =
    article.coverImageUrl.length > 3
      ? article.coverImageUrl
      : `${BASE_URL}agencia-uva-fallback.jpg`;

  return (
    <NewsCardCtx.Provider value={{ article: { ...article, coverImageUrl: cover } }}>
      <Link to={`/noticia/${article.id}`} className={className}>
        {children}
      </Link>
    </NewsCardCtx.Provider>
  );
}

interface NewsCardImageProps {
  className?: string;
}

function NewsCardImage({ className }: NewsCardImageProps) {
  const { article } = useNewsCard();
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <img
        src={article.coverImageUrl}
        alt={article.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

interface NewsCardCategoryProps {
  className?: string;
}

function NewsCardCategory({ className }: NewsCardCategoryProps) {
  const { article } = useNewsCard();
  return (
    <span
      className={`inline-block rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white ${className ?? ''}`}
    >
      {article.category}
    </span>
  );
}

interface NewsCardTitleProps {
  className?: string;
}

function NewsCardTitle({ className }: NewsCardTitleProps) {
  const { article } = useNewsCard();
  return (
    <h3
      className={`mt-2 text-lg font-bold text-zinc-900 line-clamp-2 group-hover:underline ${className ?? ''}`}
    >
      {article.title}
    </h3>
  );
}

interface NewsCardSummaryProps {
  className?: string;
}

function NewsCardSummary({ className }: NewsCardSummaryProps) {
  const { article } = useNewsCard();
  if (!article.summary) return null;
  return (
    <p
      className={`mt-2 max-w-prose text-sm leading-relaxed text-zinc-600 line-clamp-2 ${className ?? ''}`}
    >
      {article.summary}
    </p>
  );
}

interface NewsCardMetaProps {
  className?: string;
}

function NewsCardMeta({ className }: NewsCardMetaProps) {
  const { article } = useNewsCard();
  return (
    <div className={`mt-2 text-sm text-zinc-400 ${className ?? ''}`}>
      {article.publishedAt && <span>{timeAgo(article.publishedAt)}</span>}
      {article.author && (
        <>
          <span className="mx-1">-</span>
          <span>Por {article.author}</span>
        </>
      )}
    </div>
  );
}

interface NewsCardContentProps {
  children: ReactNode;
  className?: string;
}

function NewsCardContent({ children, className }: NewsCardContentProps) {
  return (
    <div className={`flex flex-1 flex-col justify-between ${className ?? ''}`}>
      {children}
    </div>
  );
}

interface NewsCardProps {
  article: NewsPreviewDTO;
  isVertical?: boolean;
}

function NewsCard({ article, isVertical = false }: NewsCardProps) {
  const cardClasses =
    'group rounded-lg border bg-white p-4 transition-colors hover:bg-zinc-50';

  if (isVertical) {
    return (
      <NewsCardRoot article={article} className={`${cardClasses} flex h-full flex-col gap-6`}>
        <NewsCardImage className="aspect-video w-full flex-shrink-0 rounded-md" />
        <NewsCardContent>
          <div className="space-y-2">
            <NewsCardCategory />
            <NewsCardTitle className="mt-0" />
            <NewsCardSummary className="mt-0" />
          </div>
          <NewsCardMeta />
        </NewsCardContent>
      </NewsCardRoot>
    );
  }

  return (
    <NewsCardRoot article={article} className={`${cardClasses} flex flex-col gap-4 sm:flex-row sm:gap-6`}>
      <NewsCardImage className="aspect-video w-full flex-shrink-0 rounded-md sm:h-40 sm:w-60 sm:aspect-auto" />
      <NewsCardContent>
        <div className="space-y-2">
          <NewsCardCategory />
          <NewsCardTitle className="mt-0" />
          <NewsCardSummary className="mt-0" />
        </div>
        <NewsCardMeta />
      </NewsCardContent>
    </NewsCardRoot>
  );
}

function NewsCardSquare({ article }: { article: NewsPreviewDTO }) {
  return (
    <NewsCardRoot
      article={article}
      className="group flex flex-col overflow-hidden rounded-lg border bg-white transition-colors hover:bg-zinc-50"
    >
      <NewsCardImage className="aspect-square w-full" />
      <div className="flex flex-1 flex-col justify-between p-3">
        <div className="space-y-1">
          <NewsCardTitle className="mt-0 text-sm font-semibold" />
          <NewsCardSummary className="mt-0 text-xs leading-relaxed line-clamp-2" />
        </div>
        <NewsCardCategory className="mt-2 text-[10px]" />
      </div>
    </NewsCardRoot>
  );
}

function NewsCardListItemMeta() {
  const { article } = useNewsCard();
  return (
    <div className="flex items-center gap-1 text-[11px] text-zinc-400">
      <span>{article.category}</span>
      {article.publishedAt && (
        <>
          <span>•</span>
          <span>{timeAgo(article.publishedAt)}</span>
        </>
      )}
    </div>
  );
}

function NewsCardListItem({ article }: { article: NewsPreviewDTO }) {
  return (
    <NewsCardRoot
      article={article}
      className="group flex flex-col gap-0.5 bg-white px-4 py-3 transition-colors hover:bg-zinc-50"
    >
      <NewsCardTitle className="mt-0 truncate text-sm font-medium leading-snug" />
      <NewsCardListItemMeta />
    </NewsCardRoot>
  );
}

Object.assign(NewsCard, {
  Root: NewsCardRoot,
  Image: NewsCardImage,
  Category: NewsCardCategory,
  Title: NewsCardTitle,
  Summary: NewsCardSummary,
  Meta: NewsCardMeta,
  Content: NewsCardContent,
  Square: NewsCardSquare,
  ListItem: NewsCardListItem,
});

export { NewsCard };
