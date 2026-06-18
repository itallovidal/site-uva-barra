import { useNewsHighlights } from '../hooks/use-news-highlights';
import { NewsHighlightGrid, RadioCtaCard } from '../components/home';
import { NewsletterSection } from '../components/newsletter-section';
import { NewsCard } from '@/components/news-card/news-card';
import { NewsHighlightGridSkeleton, NewsCardSkeleton } from '@/components/skeletons';

function HomePage() {
  const { highlights, isLoading, error } = useNewsHighlights({
    perPage: 30,
  });

  if (isLoading) {
    return (
      <main className="lg:max-w-7xl mx-auto px-4 py-6 space-y-10">
        <NewsHighlightGridSkeleton />
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex-1">
              <NewsCardSkeleton isVertical />
            </div>
          ))}
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="lg:max-w-7xl mx-auto px-4 py-6">
        <p className="text-red-500">{error}</p>
      </main>
    );
  }

  const mainArticles = highlights.slice(0, 7);
  const horizontals = highlights.slice(7, 13);
  const square = highlights.slice(13, 21);
  const listItems = highlights.slice(21, 27);

  return (
    <main className="lg:max-w-7xl mx-auto px-4 py-6 space-y-10">
      <NewsHighlightGrid highlights={mainArticles} />
      <NewsletterSection />

      {horizontals.length > 0 && (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-4">
            {horizontals.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="divide-y overflow-hidden rounded-lg border bg-white">
              {listItems.map((article) => (
                <NewsCard.ListItem key={article.id} article={article} />
              ))}
            </div>
            <RadioCtaCard coverUrl="/radiouvabarracover.png" />
          </div>
        </section>
      )}

      {square.length > 0 && (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {square.map((article) => (
            <NewsCard.Square key={article.id} article={article} />
          ))}
        </section>
      )}
    </main>
  );
}

export { HomePage };
