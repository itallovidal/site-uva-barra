import { env } from '@/env';
import type { NewsletterEmail } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

interface ListEmailsParams {
  page?: number;
  perPage?: number;
}

async function listEmails({
  page = 1,
  perPage = 10,
}: ListEmailsParams): Promise<ResponsePayload<NewsletterEmail[]>> {
  const token = localStorage.getItem('auth-token');
  const params = new URLSearchParams({
    page: String(page),
    perPage: String(perPage),
  });

  const response = await fetch(`${env.VITE_API_BASE_URL}/newsletter/email?${params.toString()}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error('Falha ao listar emails');
  }

  const payload = (await response.json()) as ResponsePayload<NewsletterEmail[]>;
  return payload;
}

export { listEmails };
export type { ListEmailsParams };
