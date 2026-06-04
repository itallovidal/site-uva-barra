import { useState, useEffect } from 'react';
import { listAllCollaborators } from '@/api/collaborators/list-all';
import type { UserProfileDTO } from '@/domain/entities';

interface UseCollaboratorsResult {
  collaborators: UserProfileDTO[];
  isLoading: boolean;
  error: string | null;
}

function useCollaborators(): UseCollaboratorsResult {
  const [collaborators, setCollaborators] = useState<UserProfileDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(function fetchCollaborators() {
    async function doFetch() {
      try {
        const payload = await listAllCollaborators();
        setCollaborators(payload.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    }

    doFetch();
  }, []);

  return { collaborators, isLoading, error };
}

export { useCollaborators };
