import { useState, useEffect } from 'react';
import type { NewsHighlight } from '../types/news-highlight-types';

interface UseNewsByCategoryResult {
  articles: NewsHighlight[];
  isLoading: boolean;
  error: string | null;
}

function useNewsByCategory(category: string, limit = 3): UseNewsByCategoryResult {
  const [articles, setArticles] = useState<NewsHighlight[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    function fetchByCategory() {
      async function doFetch() {
        setIsLoading(true);
        setError(null);
        try {
          const params = new URLSearchParams({ category, limit: String(limit) });
          const response = await fetch(`/api/news?${params}`);
          if (!response.ok) throw new Error('Failed to fetch news');
          const data = (await response.json()) as NewsHighlight[];
          setArticles(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
          setIsLoading(false);
        }
      }

      doFetch();
    },
    [category, limit]
  );

  return { articles, isLoading, error };
}

export { useNewsByCategory };
