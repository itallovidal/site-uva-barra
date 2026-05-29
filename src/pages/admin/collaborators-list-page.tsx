import { useCollaborators } from '@/hooks/use-collaborators';
import { AdminColaboratorCard } from '@/components/admin-colaborator-card';

function CollaboratorsListPage() {
  const { collaborators, isLoading, error } = useCollaborators();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-muted-foreground">Carregando colaboradores...</p>
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

  if (collaborators.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-lg font-semibold text-zinc-900">
          Nenhum colaborador encontrado
        </p>
        <p className="text-muted-foreground text-sm mt-1">
          Nenhum colaborador foi aprovado ainda.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-zinc-900">Lista de Colaboradores</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {collaborators.length} colaborador{collaborators.length !== 1 && 'es'}
        </p>
      </div>

      <div className="space-y-4">
        {collaborators.map((collaborator) => (
          <AdminColaboratorCard
            key={collaborator.id}
            id={collaborator.id}
            name={collaborator.name}
            avatarUrl={collaborator.avatarUrl}
            profession={collaborator.profession}
            variant="preview"
          />
        ))}
      </div>
    </div>
  );
}

export { CollaboratorsListPage };
