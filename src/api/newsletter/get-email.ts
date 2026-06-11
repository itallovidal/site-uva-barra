import { env } from '@/env';
import type { NewsletterEmail } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function getEmail(email: string): Promise<NewsletterEmail> {
  const token = localStorage.getItem('auth-token');

  const response = await fetch(`${env.VITE_API_BASE_URL}/newsletter/email/${encodeURIComponent(email)}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error('Email não encontrado');
  }

  const payload = (await response.json()) as ResponsePayload<NewsletterEmail>;
  if (!payload.data) throw new Error('Email não encontrado');
  return payload.data;
}

export { getEmail };
