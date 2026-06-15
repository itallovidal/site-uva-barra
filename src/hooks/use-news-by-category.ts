import { useState, useEffect } from 'react';
import { getNewsByCategory } from '@/api/news/get-by-category';
import type { NewsPreviewDTO } from '@/domain/entities';

interface UseNewsByCategoryResult {
  articles: NewsPreviewDTO[];
  isLoading: boolean;
  error: string | null;
}

interface HookParams {
  category: string;
  page: number;
  perPage: number;
}

function useNewsByCategory({
  category,
  page = 1,
  perPage = 3,
}: HookParams): UseNewsByCategoryResult {
  const [articles, setArticles] = useState<NewsPreviewDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    function fetchByCategory() {
      async function doFetch() {
        if (!category) {
          setIsLoading(false);
          return;
        }
        setIsLoading(true);
        setError(null);
        try {
          const payload = await getNewsByCategory(category, page, perPage);
          setArticles(payload.data ?? []);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
          setIsLoading(false);
        }
      }

      doFetch();
    },
    [category, page, perPage]
  );

  return { articles, isLoading, error };
}

export { useNewsByCategory };
