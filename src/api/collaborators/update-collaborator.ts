import { env } from '@/env';

const TOKEN_KEY = 'auth-token';

interface UpdateCollaboratorDTO {
  name: string;
  email: string;
  profession: string;
  role?: string;
  bio?: string | null;
}

async function updateCollaborator(id: string, data: UpdateCollaboratorDTO): Promise<void> {
  const token = localStorage.getItem(TOKEN_KEY);

  const response = await fetch(`${env.VITE_API_BASE_URL}/user/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Falha ao atualizar colaborador');
  }
}

export { updateCollaborator };
export type { UpdateCollaboratorDTO };

