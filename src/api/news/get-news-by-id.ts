import { env } from '@/env';
import type { News } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function getNewsById(id: string): Promise<ResponsePayload<News>> {
  const response = await fetch(`${env.VITE_API_BASE_URL}/news/${id}`);
  if (!response.ok) throw new Error('Notícia não encontrada');
  return (await response.json()) as ResponsePayload<News>;
}

export { getNewsById };
