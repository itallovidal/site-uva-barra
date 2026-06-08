import { apiAuthClient } from '@/lib/api-auth-client';

interface CreateCollaboratorRequestDTO {
  name: string;
  email: string;
  password: string;
  profession: string;
  bio: string | null;
  role: string;
}

async function createCollaborator(data: CreateCollaboratorRequestDTO): Promise<{ id: string }> {
  const payload = await apiAuthClient<{ id: string }>('/user/', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!payload.data?.id) {
    throw new Error('Falha ao criar colaborador');
  }

  return payload.data;
}

export { createCollaborator };
export type { CreateCollaboratorRequestDTO };
