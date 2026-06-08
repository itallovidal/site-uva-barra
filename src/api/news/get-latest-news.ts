import { env } from '@/env';
import { apiAuthClient } from '@/lib/api-auth-client';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function getLatestNews(
  page: number = 1,
  perPage: number = 10
): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const payload = await apiAuthClient<NewsPreviewDTO[]>(`/news?page=${page}&perPage=${perPage}`);
  return payload as ResponsePayload<NewsPreviewDTO[]>;
}

export { getLatestNews };
