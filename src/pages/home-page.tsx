import { useNewsHighlights } from '../hooks/use-news-highlights';
import { NewsHighlightGrid } from '../components/home/news-highlight-grid';
import { NewsletterSection } from '../components/newsletter-section';
import { CategorySection } from '../components/news/category-section';

function HomePage() {
  const { highlights, isLoading, error } = useNewsHighlights();

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
      <CategorySection category="Tecnologia" limit={3} />
      <CategorySection category="Saúde" limit={3} />
      <CategorySection category="Educação" limit={3} />
    </main>
  );
}

export { HomePage };
