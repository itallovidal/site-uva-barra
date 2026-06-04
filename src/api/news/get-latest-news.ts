import { env } from '@/env';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function getLatestNews(
  page: number = 1,
  perPage: number = 10
): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const response = await fetch(
    `${env.VITE_API_BASE_URL}/news/latest?page=${page}&perPage=${perPage}`
  );
  if (!response.ok) throw new Error('Failed to fetch news');
  return (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
}

export { getLatestNews };
