import { useState, useEffect } from 'react';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

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
        const response = await fetch('/api/news/latest');
        if (!response.ok) throw new Error('Failed to fetch news');
        const payload = (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
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
