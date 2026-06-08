import { apiAuthClient } from '@/lib/api-auth-client';
import type { UserProfileDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

async function listAllCollaborators(): Promise<ResponsePayload<UserProfileDTO[]>> {
  const payload = await apiAuthClient<UserProfileDTO[]>('/user/list');
  return payload as ResponsePayload<UserProfileDTO[]>;
}

export { listAllCollaborators };
