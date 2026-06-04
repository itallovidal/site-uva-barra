import { env } from '@/env';
import type { Category } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function listAllCategories(): Promise<ResponsePayload<Category[]>> {
  const response = await fetch(`${env.VITE_API_BASE_URL}/api/categories`);
  if (!response.ok) throw new Error('Failed to fetch categories');
  return (await response.json()) as ResponsePayload<Category[]>;
}

export { listAllCategories };
