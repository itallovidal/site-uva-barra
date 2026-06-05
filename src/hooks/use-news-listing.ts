import { useState, useEffect } from 'react';
import { getNewsListing } from '@/api/news/get-news-listing';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { MetaApiPayload } from '@/types/api-response-types';

interface UseNewsListingParams {
  category?: string;
  sort?: 'desc' | 'asc';
  page?: number;
  perPage?: number;
}

interface UseNewsListingResult {
  articles: NewsPreviewDTO[];
  meta: MetaApiPayload | null;
  isLoading: boolean;
  error: string | null;
}

function useNewsListing({
  category,
  sort = 'desc',
  page = 1,
  perPage = 10,
}: UseNewsListingParams): UseNewsListingResult {
  const [articles, setArticles] = useState<NewsPreviewDTO[]>([]);
  const [meta, setMeta] = useState<MetaApiPayload | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    function fetchListing() {
      async function doFetch() {
        setIsLoading(true);
        setError(null);
        try {
          const payload = await getNewsListing({ category, sort, page, perPage });
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
    [category, sort, page, perPage]
  );

  return { articles, meta, isLoading, error };
}

export { useNewsListing };
