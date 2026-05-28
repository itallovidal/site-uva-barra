import { useNewsHighlights } from '../hooks/use-news-highlights';
import { NewsHighlightGrid } from '../components/home/news-highlight-grid';

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
    <main className="lg:max-w-7xl mx-auto px-4 py-6">
      <NewsHighlightGrid highlights={highlights} />
    </main>
  );
}

export { HomePage };
