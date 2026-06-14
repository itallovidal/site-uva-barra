import type { ComponentProps, ReactNode } from 'react';

import { NewsStatus } from '@/domain/constants';
import type { AdminNewsCardDTO } from '@/domain/entities';
import { Button } from '@/components/lib/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/lib/card';

interface AdminNewsCardAction {
  label: string;
  onClick: () => void;
  variant?: ComponentProps<typeof Button>['variant'];
  disabled?: boolean;
  isLoading?: boolean;
  loadingLabel?: string;
  icon?: ReactNode;
}

interface AdminNewsCardProps {
  article: AdminNewsCardDTO;
  actions: AdminNewsCardAction[];
}

function formatDate(value: Date | string | null | undefined): string {
  if (!value) return '';
  const date = new Date(value);
  if (isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}

function getStatusLabel(status: AdminNewsCardDTO['status']): string {
  if (status === NewsStatus.PUBLISHED) return 'Publicado';
  if (status === NewsStatus.REVIEW) return 'Em revisão';
  if (status === NewsStatus.ARCHIVED) return 'Arquivado';
  return 'Rascunho';
}

function AdminNewsCard({ article, actions }: AdminNewsCardProps) {
  const viewAction = actions.find((a) => a.label === 'Pré-Visualizar');
  const otherActions = actions.filter((a) => a.label !== 'Pré-Visualizar');
  const leftActions = otherActions.filter((a) => a.label !== 'Deletar');
  const rightActions = otherActions.filter((a) => a.label === 'Deletar');

  return (
    <Card className="py-0">
      <CardHeader className="border-b px-6 pb-5 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <CardTitle className="text-lg leading-snug">{article.title}</CardTitle>
            <CardDescription>
              {article.author ? `${article.category} · ${article.author}` : article.category}
            </CardDescription>
          </div>
          {viewAction && (
            <Button
              variant={viewAction.variant}
              onClick={viewAction.onClick}
              disabled={viewAction.disabled || viewAction.isLoading}
              size="sm"
              className="shrink-0"
            >
              {viewAction.icon}
              {viewAction.isLoading ? (viewAction.loadingLabel ?? `${viewAction.label}...`) : viewAction.label}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-5 px-6 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="h-28 w-full overflow-hidden rounded-md bg-zinc-100 sm:h-24 sm:w-36 sm:flex-shrink-0">
            {article.coverImageUrl ? (
              <img
                src={article.coverImageUrl}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                Sem imagem
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1 space-y-2">
            <p className="text-sm text-zinc-700">{article.summary}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Status: {getStatusLabel(article.status)}
            </p>
            {article.updatedAt && (
              <p className="text-xs text-muted-foreground">
                Atualizada em {formatDate(article.updatedAt)}
              </p>
            )}
            {article.publishedAt && (
              <p className="text-xs text-muted-foreground">
                Publicada em {formatDate(article.publishedAt)}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap gap-3">
            {leftActions.map(function renderAction(action) {
              return (
                <Button
                  key={action.label}
                  variant={action.variant}
                  onClick={action.onClick}
                  disabled={action.disabled || action.isLoading}
                  size="sm"
                >
                  {action.icon}
                  {action.isLoading ? (action.loadingLabel ?? `${action.label}...`) : action.label}
                </Button>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3">
            {rightActions.map(function renderAction(action) {
              return (
                <Button
                  key={action.label}
                  variant={action.variant}
                  onClick={action.onClick}
                  disabled={action.disabled || action.isLoading}
                  size="sm"
                >
                  {action.icon}
                  {action.isLoading ? (action.loadingLabel ?? `${action.label}...`) : action.label}
                </Button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export { AdminNewsCard };
export type { AdminNewsCardAction, AdminNewsCardProps };
