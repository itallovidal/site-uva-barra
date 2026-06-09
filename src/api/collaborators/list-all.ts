import { env } from '@/env';
import type { UserProfileDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

const TOKEN_KEY = 'auth-token';

async function listAllCollaborators(): Promise<ResponsePayload<UserProfileDTO[]>> {
  const token = localStorage.getItem(TOKEN_KEY);

  const response = await fetch(`${env.VITE_API_BASE_URL}/user/list`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error('Falha ao listar colaboradores');
  }

  return (await response.json()) as ResponsePayload<UserProfileDTO[]>;
}

export { listAllCollaborators };
