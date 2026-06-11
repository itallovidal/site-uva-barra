import { env } from '@/env';
import type { NewsFormData } from '@/schemas/news-schemas';
import type { ResponsePayload } from '@/types/api-response-types';

async function createNews(data: NewsFormData): Promise<{ id: string }> {
  const token = localStorage.getItem('auth-token');

  const response = await fetch(`${env.VITE_API_BASE_URL}/news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Falha ao criar notícia');
  }

  const payload = (await response.json()) as ResponsePayload<{ id: string }>;

  if (!payload.data?.id) {
    throw new Error('Falha ao criar notícia');
  }

  return payload.data;
}

export { createNews };
