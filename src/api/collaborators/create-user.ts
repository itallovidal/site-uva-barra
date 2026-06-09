import { env } from '@/env';

const TOKEN_KEY = 'auth-token';

interface CreateCollaboratorRequestDTO {
  name: string;
  email: string;
  password: string;
  profession: string;
  bio: string | null;
  role: string;
}

async function createCollaborator(data: CreateCollaboratorRequestDTO): Promise<{ id: string }> {
  const token = localStorage.getItem(TOKEN_KEY);

  const response = await fetch(`${env.VITE_API_BASE_URL}/user/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Falha ao criar colaborador');
  }

  const payload = (await response.json()) as { data?: { id: string } };

  if (!payload.data?.id) {
    throw new Error('Falha ao criar colaborador');
  }

  return payload.data;
}

export { createCollaborator };
export type { CreateCollaboratorRequestDTO };
