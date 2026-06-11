import { useNewsHighlights } from '../hooks/use-news-highlights';
import { NewsHighlightGrid } from '../components/home/news-highlight-grid';
import { NewsletterSection } from '../components/newsletter-section';
import { NewsCard } from '@/components/news-card/news-card';
import { NewsHighlightGridSkeleton, NewsCardSkeleton } from '@/components/skeletons';

function HomePage() {
  const { highlights, isLoading, error } = useNewsHighlights({
    perPage: 15,
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

  console.log('Destaques carregados:', highlights);

  const mainArticles = highlights.slice(0, 7);
  const rest = highlights.slice(7);

  return (
    <main className="lg:max-w-7xl mx-auto px-4 py-6 space-y-10">
      <NewsHighlightGrid highlights={mainArticles} />
      <NewsletterSection />

      {rest.length > 0 && (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <div key={article.id} className="flex-1">
              <NewsCard article={article} isVertical />
            </div>
          ))}
        </section>
      )}

      {rest.length === 0 && (
        <p className="text-neutral-500">Nenhuma notícia adicional encontrada.</p>
      )}

      {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.keys(categoryMap).map((category) => (
          <CategorySection key={category} category={category} limit={1} />
        ))}
      </div> */}
    </main>
  );
}

export { HomePage };
