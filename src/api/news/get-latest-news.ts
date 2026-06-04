import { env } from '@/env';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function getLatestNews(): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const response = await fetch(`${env.VITE_API_BASE_URL}/api/news/latest`);
  if (!response.ok) throw new Error('Failed to fetch news');
  return (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
}

export { getLatestNews };
