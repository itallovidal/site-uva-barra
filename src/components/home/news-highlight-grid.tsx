import type { NewsHighlight } from '../../types/news-highlight-types';
import { NewsHighlightCard } from './news-highlight-card';

interface NewsHighlightGridProps {
  highlights: NewsHighlight[];
}

function NewsHighlightGrid({ highlights }: NewsHighlightGridProps) {
  if (highlights.length < 6) return null;

  const [featured, second, third, ...rest] = highlights;

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="lg:row-span-2">
          <NewsHighlightCard highlight={featured} isFeatured />
        </div>
        <NewsHighlightCard highlight={second} />
        <NewsHighlightCard highlight={third} />
      </section>

      <section className="flex flex-col gap-4 md:flex-row">
        {rest.map(function renderCompactCard(highlight) {
          return (
            <div key={highlight.id} className="flex-1">
              <NewsHighlightCard highlight={highlight} isCompact />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export { NewsHighlightGrid };
