import { useState, useEffect, useCallback } from 'react';
import { AdminColaboratorCard } from '@/components/admin-colaborator-card';
import { env } from '@/env';
import type { User } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

interface UseCollaboratorRequestsResult {
  requests: User[];
  isLoading: boolean;
  error: string | null;
  approve: (id: string) => Promise<void>;
  remove: (id: string) => Promise<void>;
}

function useCollaboratorRequests(): UseCollaboratorRequestsResult {
  const [requests, setRequests] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(function loadRequests() {
    let cancelled = false;

    async function doFetch() {
      try {
        const response = await fetch(`${env.VITE_API_BASE_URL}/api/collaborators/requests`);
        if (!response.ok) throw new Error('Falha ao carregar solicitações');
        const payload = (await response.json()) as ResponsePayload<User[]>;
        if (!cancelled) setRequests(payload.data ?? []);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    doFetch();

    return () => {
      cancelled = true;
    };
  }, []);

  const approve = useCallback(async function (id: string) {
    const token = localStorage.getItem('auth-token');
    const response = await fetch(`${env.VITE_API_BASE_URL}/api/collaborators/${id}/approve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!response.ok) throw new Error('Falha ao aprovar solicitação');
    const payload = (await response.json()) as ResponsePayload<{ success: boolean }>;

    if (!payload.data?.success) {
      throw new Error('Falha ao aprovar solicitação');
    }

    setRequests((prev) => prev.filter((user) => user.id !== id));
  }, []);

  const remove = useCallback(async function (id: string) {
    const token = localStorage.getItem('auth-token');
    const response = await fetch(`${env.VITE_API_BASE_URL}/api/collaborators/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!response.ok) throw new Error('Falha ao excluir solicitação');
    const payload = (await response.json()) as ResponsePayload<{ success: boolean }>;

    if (!payload.data?.success) {
      throw new Error('Falha ao excluir solicitação');
    }

    setRequests((prev) => prev.filter((user) => user.id !== id));
  }, []);

  return { requests, isLoading, error, approve, remove };
}

function CollaboratorsRequestsPage() {
  const { requests, isLoading, error, approve, remove } = useCollaboratorRequests();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-muted-foreground">Carregando solicitações...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-destructive font-semibold">Erro ao carregar</p>
        <p className="text-muted-foreground text-sm mt-1">{error}</p>
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold text-zinc-900">
          Nenhuma solicitação pendente
        </p>
        <p className="text-muted-foreground text-sm mt-1">
          Todas as solicitações foram processadas.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-zinc-900">Solicitações</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Colaboradores aguardando aprovação ({requests.length})
        </p>
      </div>

      <div className="space-y-4">
        {requests.map((user) => (
          <AdminColaboratorCard
            key={user.id}
            id={user.id}
            name={user.name}
            avatarUrl={user.avatarUrl}
            profession={user.profession}
            variant="admin"
            onApprove={approve}
            onDelete={remove}
          />
        ))}
      </div>
    </div>
  );
}

export { CollaboratorsRequestsPage };
