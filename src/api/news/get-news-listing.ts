import { env } from '@/env';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

interface GetNewsListingParams {
  category?: string;
  sort?: 'desc' | 'asc';
  page?: number;
  perPage?: number;
}

async function getNewsListing({
  category,
  sort = 'desc',
  page = 1,
  perPage = 10,
}: GetNewsListingParams): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const params = new URLSearchParams({
    sort,
    page: String(page),
    perPage: String(perPage),
  });

  let url = `${env.VITE_API_BASE_URL}/news`;
  if (category) {
    url = `${env.VITE_API_BASE_URL}/news/category/${encodeURIComponent(category)}`;
  }

  const response = await fetch(`${url}?${params.toString()}`);
  if (!response.ok) throw new Error('Failed to fetch news listing');
  return (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
}

export { getNewsListing };
export type { GetNewsListingParams };
