import { env } from '@/env';
import { apiAuthClient } from '@/lib/api-auth-client';
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

  const payload = await apiAuthClient<NewsPreviewDTO[]>(`${url}?${params.toString()}`);
  return payload as ResponsePayload<NewsPreviewDTO[]>;
}

export { getNewsListing };
export type { GetNewsListingParams };
