import { useState, useEffect } from 'react';
import { getLatestNews } from '@/api/news/get-latest-news';
import type { NewsPreviewDTO } from '@/domain/entities';

interface UseNewsHighlightsResult {
  highlights: NewsPreviewDTO[];
  isLoading: boolean;
  error: string | null;
}

interface HookProps {
  page?: number;
  perPage?: number;
}

function useNewsHighlights({ page = 1, perPage = 10 }: HookProps = {}): UseNewsHighlightsResult {
  const [highlights, setHighlights] = useState<NewsPreviewDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    function fetchHighlights() {
      async function doFetch() {
        try {
          const payload = await getLatestNews(page, perPage);
          setHighlights(payload.data ?? []);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
          setIsLoading(false);
        }
      }

      doFetch();
    },
    [page, perPage]
  );

  return { highlights, isLoading, error };
}

export { useNewsHighlights };
