import { env } from '@/env';
import type { UserProfileDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function listAllCollaborators(): Promise<ResponsePayload<UserProfileDTO[]>> {
  const response = await fetch(`${env.VITE_API_BASE_URL}/api/collaborators`);
  if (!response.ok) throw new Error('Failed to fetch collaborators');
  return (await response.json()) as ResponsePayload<UserProfileDTO[]>;
}

export { listAllCollaborators };
