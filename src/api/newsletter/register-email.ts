import { env } from '@/env';
import type { ResponsePayload } from '@/types/api-response-types';

async function registerEmail(email: string): Promise<void> {
  const response = await fetch(`${env.VITE_API_BASE_URL}/newsletter/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const payload = (await response.json()) as ResponsePayload;
    throw new Error(payload.error?.message ?? 'Falha ao cadastrar email');
  }
}

export { registerEmail };
