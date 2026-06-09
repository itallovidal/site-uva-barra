import { env } from '@/env';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function getLatestNews(
  page: number = 1,
  perPage: number = 10
): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const token = localStorage.getItem('auth-token');
  const response = await fetch(`${env.VITE_API_BASE_URL}/news?page=${page}&perPage=${perPage}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!response.ok) throw new Error('Falha ao carregar notícias');
  const payload = (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
  return payload;
}

export { getLatestNews };
