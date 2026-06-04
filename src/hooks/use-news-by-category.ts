import { useState, useEffect } from 'react';
import { getNewsByCategory } from '@/api/news/get-by-category';
import type { NewsPreviewDTO } from '@/domain/entities';

interface UseNewsByCategoryResult {
  articles: NewsPreviewDTO[];
  isLoading: boolean;
  error: string | null;
}

function useNewsByCategory(category: string, limit = 3): UseNewsByCategoryResult {
  const [articles, setArticles] = useState<NewsPreviewDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    function fetchByCategory() {
      async function doFetch() {
        setIsLoading(true);
        setError(null);
        try {
          const payload = await getNewsByCategory(category, limit);
          setArticles(payload.data ?? []);
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
