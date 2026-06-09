import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/lib/dialog';
import { Button } from '@/components/lib/button';
import { useCollaborators } from '@/hooks/use-collaborators';
import { AdminColaboratorCard } from '@/components/admin-colaborator-card';
import { CollaboratorForm } from '@/components/collaborator-form/collaborator-form';
import { updateCollaborator } from '@/api/collaborators/update-collaborator';
import { deleteCollaborator } from '@/api/collaborators/delete-collaborator';
import type { UserProfileDTO } from '@/domain/entities';
import type { EditCollaboratorFormData } from '@/schemas/user-schemas';

function CollaboratorsListPage() {
  const { collaborators, isLoading, error, refetch } = useCollaborators();

  const [editingCollaborator, setEditingCollaborator] = useState<UserProfileDTO | null>(null);
  const [deletingCollaborator, setDeletingCollaborator] = useState<UserProfileDTO | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleEditSubmit(data: EditCollaboratorFormData) {
    if (!editingCollaborator) return;

    await updateCollaborator(editingCollaborator.id, {
      name: data.name,
      email: data.email,
      profession: data.profession,
      role: data.role,
      bio: data.bio ?? null,
    });

    setEditingCollaborator(null);
    await refetch();
  }

  async function handleDeleteConfirm() {
    if (!deletingCollaborator) return;

    setIsDeleting(true);
    setDeleteError(null);

    try {
      await deleteCollaborator(deletingCollaborator.id);
      setDeletingCollaborator(null);
      await refetch();
    } catch {
      setDeleteError('Erro ao excluir colaborador. Tente novamente.');
    } finally {
      setIsDeleting(false);
    }
  }

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
            onEdit={(id) => {
              const found = collaborators.find((c) => c.id === id);
              if (found) setEditingCollaborator(found);
            }}
            onDelete={(id) => {
              const found = collaborators.find((c) => c.id === id);
              if (found) setDeletingCollaborator(found);
            }}
          />
        ))}
      </div>

      <Dialog
        open={editingCollaborator !== null}
        onOpenChange={(open) => {
          if (!open) setEditingCollaborator(null);
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Editar Colaborador</DialogTitle>
            <DialogDescription>
              Altere os dados do colaborador abaixo.
            </DialogDescription>
          </DialogHeader>

          {editingCollaborator && (
            <CollaboratorForm
              mode="edit"
              defaultValues={{
                name: editingCollaborator.name,
                email: editingCollaborator.email,
                profession: editingCollaborator.profession,
                role: editingCollaborator.role,
                bio: editingCollaborator.bio ?? '',
              }}
              onSubmit={handleEditSubmit}
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={deletingCollaborator !== null}
        onOpenChange={(open) => {
          if (!open) {
            setDeletingCollaborator(null);
            setDeleteError(null);
          }
        }}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Excluir Colaborador</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir este colaborador? Esta ação não pode
              ser desfeita.
            </DialogDescription>
          </DialogHeader>

          {deleteError && (
            <p className="text-sm text-destructive">{deleteError}</p>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setDeletingCollaborator(null);
                setDeleteError(null);
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="destructive"
              disabled={isDeleting}
              onClick={handleDeleteConfirm}
            >
              {isDeleting ? 'Excluindo...' : 'Excluir'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { CollaboratorsListPage };

