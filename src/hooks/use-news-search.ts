import { useState, useEffect } from 'react';
import { searchNews } from '@/api/news/search-news';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { MetaApiPayload } from '@/types/api-response-types';

interface UseNewsSearchResult {
  articles: NewsPreviewDTO[];
  meta: MetaApiPayload | null;
  isLoading: boolean;
  error: string | null;
}

function useNewsSearch(term: string): UseNewsSearchResult {
  const [articles, setArticles] = useState<NewsPreviewDTO[]>([]);
  const [meta, setMeta] = useState<MetaApiPayload | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    function fetchSearch() {
      async function doFetch() {
        if (!term.trim()) {
          setArticles([]);
          setMeta(null);
          setIsLoading(false);
          setError(null);
          return;
        }

        setIsLoading(true);
        setError(null);
        try {
          const payload = await searchNews(term);
          setArticles(payload.data ?? []);
          setMeta(payload.meta ?? null);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
          setIsLoading(false);
        }
      }

      doFetch();
    },
    [term]
  );

  return { articles, meta, isLoading, error };
}

export { useNewsSearch };
