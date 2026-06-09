import { CheckIcon, TrashIcon, NotePencilIcon } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/lib/card';
import { Button } from '@/components/lib/button';
import type { UserProfessionType } from '@/domain/constants';
import { UserProfession } from '@/domain/constants';
import { useAuth } from '@/hooks/use-auth';

const PROFESSION_LABELS: Record<UserProfessionType, string> = {
  [UserProfession.DESIGNER]: 'Designer',
  [UserProfession.REDATOR]: 'Redator(a)',
  [UserProfession.DESENVOLVEDOR]: 'Desenvolvedor(a)',
  [UserProfession.SOCIAL_MEDIA]: 'Social Media',
  [UserProfession.EDITOR_CHEFE]: 'Editor(a)-Chefe',
  [UserProfession.OUTRO]: 'Outro',
};

interface AdminColaboratorCardProps {
  id: string;
  name: string;
  avatarUrl?: string | null;
  profession: UserProfessionType;
  variant: 'admin' | 'preview';
  onApprove?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

function AdminColaboratorCard({
  id,
  name,
  avatarUrl,
  profession,
  variant,
  onApprove,
  onEdit,
  onDelete,
}: AdminColaboratorCardProps) {
  const { user, isAdmin } = useAuth();

  const isOwnCard = user?.id === id;
  const canEdit = isAdmin || isOwnCard;
  const canDelete = (isAdmin || isOwnCard) && !isOwnCard;

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card>
      <CardContent className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
              {initials}
            </div>
          )}
          <div>
            <p className="font-semibold text-zinc-900">{name}</p>
            <p className="text-sm text-muted-foreground">
              {PROFESSION_LABELS[profession]}
            </p>
          </div>
        </div>

        {(variant === 'admin' || canEdit) && (
          <div className="flex items-center gap-2">
            {variant === 'admin' && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onApprove?.(id)}
              >
                <CheckIcon size={16} className="text-green-600" />
                Aprovar
              </Button>
            )}

            {canEdit && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit?.(id)}
              >
                <NotePencilIcon size={16} />
                Editar
              </Button>
            )}

            {canDelete && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete?.(id)}
              >
                <TrashIcon size={16} />
                Excluir
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export { AdminColaboratorCard };
