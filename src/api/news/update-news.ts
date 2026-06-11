import { env } from '@/env';
import type { NewsFormData } from '@/schemas/news-schemas';
import type { ResponsePayload } from '@/types/api-response-types';

async function updateNews(id: string, data: Partial<NewsFormData>): Promise<void> {
  const token = localStorage.getItem('auth-token');

  const response = await fetch(`${env.VITE_API_BASE_URL}/news/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Falha ao atualizar notícia');
  }

  const payload = (await response.json()) as ResponsePayload;

  if (!payload.data) {
    throw new Error('Falha ao atualizar notícia');
  }
}

export { updateNews };
