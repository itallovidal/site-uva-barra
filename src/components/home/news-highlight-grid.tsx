import type { NewsHighlight } from '../../types/news-highlight-types';
import { NewsHighlightCard } from './news-highlight-card';

interface NewsHighlightGridProps {
  highlights: NewsHighlight[];
}

function NewsHighlightGrid({ highlights }: NewsHighlightGridProps) {
  if (highlights.length < 3) return null;

  const [featured, second, third] = highlights;

  return (
    <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="lg:row-span-2">
        <NewsHighlightCard highlight={featured} isFeatured />
      </div>
      <NewsHighlightCard highlight={second} />
      <NewsHighlightCard highlight={third} />
    </section>
  );
}

export { NewsHighlightGrid };
