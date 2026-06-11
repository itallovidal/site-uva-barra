import { env } from '@/env';

async function deleteNewsletter(id: string): Promise<void> {
  const token = localStorage.getItem('auth-token');

  const response = await fetch(`${env.VITE_API_BASE_URL}/newsletter/${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error('Falha ao deletar newsletter');
  }
}

export { deleteNewsletter };
