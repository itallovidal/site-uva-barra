import { env } from '@/env';
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
  const token = localStorage.getItem('auth-token');
  const response = await fetch(`${env.VITE_API_BASE_URL}/news/category/${encodedCategory}?page=${page}&perPage=${perPage}${statusParam}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!response.ok) throw new Error('Falha ao carregar notícias');
  const payload = (await response.json()) as ResponsePayload<NewsPreviewDTO[]>;
  return payload;
}

export { getNewsByCategory };
