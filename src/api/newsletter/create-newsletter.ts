import { env } from '@/env';
import type { Newsletter } from '@/domain/entities';
import type { CreateNewsletterDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function createNewsletter(data: CreateNewsletterDTO): Promise<Newsletter> {
  const token = localStorage.getItem('auth-token');

  const response = await fetch(`${env.VITE_API_BASE_URL}/newsletter/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Falha ao criar newsletter');
  }

  const payload = (await response.json()) as ResponsePayload<Newsletter>;
  if (!payload.data) throw new Error('Falha ao criar newsletter');
  return payload.data;
}

export { createNewsletter };
