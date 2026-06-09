import { useState, useEffect, useCallback } from 'react';
import { listAllCollaborators } from '@/api/collaborators/list-all';
import type { UserProfileDTO } from '@/domain/entities';

interface UseCollaboratorsResult {
  collaborators: UserProfileDTO[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

function useCollaborators(): UseCollaboratorsResult {
  const [collaborators, setCollaborators] = useState<UserProfileDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async function () {
    setIsLoading(true);
    setError(null);
    try {
      const payload = await listAllCollaborators();
      setCollaborators(payload.data ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(function fetchCollaborators() {
    fetchData();
  }, [fetchData]);

  return { collaborators, isLoading, error, refetch: fetchData };
}

export { useCollaborators };
