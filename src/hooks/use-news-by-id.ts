import { useState, useEffect } from 'react';
import { getNewsById } from '@/api/news/get-news-by-id';
import type { News } from '@/domain/entities';

interface UseNewsByIdResult {
  news: News | null;
  isLoading: boolean;
  error: string | null;
}

function useNewsById(id: string): UseNewsByIdResult {
  const [news, setNews] = useState<News | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    function fetchNewsById() {
      async function doFetch() {
        setIsLoading(true);
        setError(null);
        try {
          const payload = await getNewsById(id);
          setNews(payload.data ?? null);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
          setIsLoading(false);
        }
      }

      doFetch();
    },
    [id]
  );

  return { news, isLoading, error };
}

export { useNewsById };
