import { env } from '@/env';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function searchNews(term: string): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const encodedTerm = encodeURIComponent(term);
  const response = await fetch(`${env.VITE_API_BASE_URL}/news/search?q=${encodedTerm}`);
  if (!response.ok) throw new Error('Failed to search news');
  return (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
}

export { searchNews };
