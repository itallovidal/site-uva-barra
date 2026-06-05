import { useNewsHighlights } from '../hooks/use-news-highlights';
import { NewsHighlightGrid } from '../components/home/news-highlight-grid';
import { NewsletterSection } from '../components/newsletter-section';
import { CategorySection } from '../components/news/category-section';
import { categoryMap } from '@/types/category-map';

function HomePage() {
  const { highlights, isLoading, error } = useNewsHighlights({
    perPage: 7,
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

  return (
    <main className="lg:max-w-7xl mx-auto px-4 py-6 space-y-10">
      <NewsHighlightGrid highlights={highlights} />
      <NewsletterSection />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.keys(categoryMap).map((category) => (
          <CategorySection key={category} category={category} limit={1} />
        ))}
      </div>
    </main>
  );
}

export { HomePage };
