import { env } from '@/env';
import type { NewsPreviewDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function searchNews(term: string): Promise<ResponsePayload<NewsPreviewDTO[]>> {
  const encodedTerm = encodeURIComponent(term);
  const token = localStorage.getItem('auth-token');
  const response = await fetch(`${env.VITE_API_BASE_URL}/news/search?q=${encodedTerm}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!response.ok) throw new Error('Falha ao buscar notícias');
  const payload = (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
  return payload;
}

export { searchNews };
