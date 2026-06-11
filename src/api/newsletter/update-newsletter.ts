import { env } from '@/env';
import type { Newsletter } from '@/domain/entities';
import type { UpdateNewsletterDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function updateNewsletter(id: string, data: UpdateNewsletterDTO): Promise<Newsletter> {
  const token = localStorage.getItem('auth-token');

  const response = await fetch(`${env.VITE_API_BASE_URL}/newsletter/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Falha ao atualizar newsletter');
  }

  const payload = (await response.json()) as ResponsePayload<Newsletter>;
  if (!payload.data) throw new Error('Falha ao atualizar newsletter');
  return payload.data;
}

export { updateNewsletter };
