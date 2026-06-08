import { env } from '@/env';
import { apiAuthClient } from '@/lib/api-auth-client';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function searchNews(term: string): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const encodedTerm = encodeURIComponent(term);
  const payload = await apiAuthClient<NewsPreviewDTO[]>(`/news/search?q=${encodedTerm}`);
  return payload as ResponsePayload<NewsPreviewDTO[]>;
}

export { searchNews };
