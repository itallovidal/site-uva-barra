import { env } from '@/env';
import { apiAuthClient } from '@/lib/api-auth-client';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function getNewsByCategory(
  category: string,
  page = 1,
  perPage = 3,
  status?: string
): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const encodedCategory = encodeURIComponent(category);

  const statusParam = status ? `&status=${encodeURIComponent(status)}` : '';
  const payload = await apiAuthClient<NewsPreviewDTO[]>(`/news/category/${encodedCategory}?page=${page}&perPage=${perPage}${statusParam}`);
  return payload as ResponsePayload<NewsPreviewDTO[]>;
}

export { getNewsByCategory };
