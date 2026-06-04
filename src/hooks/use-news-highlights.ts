import { useState, useEffect } from 'react';
import { getLatestNews } from '@/api/news/get-latest-news';
import type { NewsPreviewDTO } from '@/domain/entities';

interface UseNewsHighlightsResult {
  highlights: NewsPreviewDTO[];
  isLoading: boolean;
  error: string | null;
}

function useNewsHighlights(): UseNewsHighlightsResult {
  const [highlights, setHighlights] = useState<NewsPreviewDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(function fetchHighlights() {
    async function doFetch() {
      try {
        const payload = await getLatestNews();
        setHighlights(payload.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    }

    doFetch();
  }, []);

  return { highlights, isLoading, error };
}

export { useNewsHighlights };
