import { env } from '@/env';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

interface GetNewsListingParams {
  category?: string;
  sort?: 'desc' | 'asc';
  page?: number;
  perPage?: number;
  status?: string;
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
  if (typeof status !== 'undefined' && status !== null) params.set('status', status);

  let url = `/news`;
  if (category) {
    url = `/news/category/${encodeURIComponent(category)}`;
  }

  const token = localStorage.getItem('auth-token');
  const response = await fetch(`${env.VITE_API_BASE_URL}${url}?${params.toString()}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!response.ok) throw new Error('Falha ao carregar notícias');
  const payload = (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
  return payload;
}

export { getNewsListing };
export type { GetNewsListingParams };
