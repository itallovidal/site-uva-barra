import { env } from '@/env';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function getNewsByCategory(
  category: string,
  limit = 3
): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const params = new URLSearchParams({ category, limit: String(limit) });
  const response = await fetch(`${env.VITE_API_BASE_URL}/api/news?${params}`);
  if (!response.ok) throw new Error('Failed to fetch news');
  return (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
}

export { getNewsByCategory };
