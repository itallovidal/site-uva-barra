import { env } from '@/env';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function getNewsByCategory(
  category: string,
  page = 1,
  perPage = 3
): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const encodedCategory = encodeURIComponent(category);

  const response = await fetch(
    `${env.VITE_API_BASE_URL}/news/category/${encodedCategory}?page=${page}&perPage=${perPage}`
  );

  if (!response.ok) throw new Error('Failed to fetch news');
  return (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
}

export { getNewsByCategory };
