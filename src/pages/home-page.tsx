import { useNewsHighlights } from '../hooks/use-news-highlights';
import { NewsHighlightGrid } from '../components/home/news-highlight-grid';
import { NewsletterSection } from '../components/newsletter-section';
import { NewsCard } from '@/components/news-card/news-card';

function HomePage() {
  const { highlights, isLoading, error } = useNewsHighlights({
    perPage: 15,
  });

  if (isLoading) {
    return (
      <main className="lg:max-w-7xl mx-auto px-4 py-6">
        <p className="text-neutral-500">Carregando notícias...</p>
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
  const rest = highlights.slice(7);

  return (
    <main className="lg:max-w-7xl mx-auto px-4 py-6 space-y-10">
      <NewsHighlightGrid highlights={mainArticles} />
      <NewsletterSection />

      {rest.length > 0 && (
        <section className="flex flex-col gap-4 md:flex-row">
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
