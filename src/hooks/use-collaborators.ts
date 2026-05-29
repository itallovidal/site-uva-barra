import { useState, useEffect } from 'react';
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
        const response = await fetch('/api/collaborators');
        if (!response.ok) throw new Error('Failed to fetch collaborators');
        const data = (await response.json()) as UserProfileDTO[];
        setCollaborators(data);
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
