import { env } from '@/env';

const TOKEN_KEY = 'auth-token';

async function deleteCollaborator(id: string): Promise<void> {
  const token = localStorage.getItem(TOKEN_KEY);

  const response = await fetch(`${env.VITE_API_BASE_URL}/user/${id}`, {
    method: 'DELETE',
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error('Falha ao excluir colaborador');
  }
}

export { deleteCollaborator };

