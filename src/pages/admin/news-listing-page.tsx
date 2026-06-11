import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NewspaperIcon } from 'lucide-react';

import { AdminNewsCard } from '@/components/admin-news-card';
import { Button } from '@/components/lib/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/lib/dialog';
import { NewsArticleRenderer } from '@/components/news/news-article-renderer';
import { env } from '@/env';
import { getNewsById } from '@/api/news/get-news-by-id';
import type { AdminNewsCardDTO, News } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

function NewsListingPage() {
  const [searchParams] = useSearchParams();
  const [publishedNews, setPublishedNews] = useState<AdminNewsCardDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'published' | 'unpublished'>(() => {
    const statusParam = searchParams.get('status');
    if (statusParam === 'unpublished') return 'unpublished';
    return 'published';
  });
  const [actionError, setActionError] = useState<string | null>(null);
  const [previewNews, setPreviewNews] = useState<AdminNewsCardDTO | null>(null);
  const [previewNewsData, setPreviewNewsData] = useState<News | null>(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [isTogglingPublishId, setIsTogglingPublishId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);

  useEffect(
    function loadPublishedNews() {
      let cancelled = false;

      async function doFetch() {
        try {
          const q = searchTerm ? `&q=${encodeURIComponent(searchTerm)}` : '';
          const token = localStorage.getItem('auth-token');
          const response = await fetch(
            `${env.VITE_API_BASE_URL}/news?page=1&perPage=10&status=${statusFilter}${q}`,
            {
              headers: {
                'Content-Type': 'application/json',
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
              },
            }
          );
          if (!response.ok) throw new Error('Falha ao carregar notícias');
          const payload = (await response.json()) as ResponsePayload<AdminNewsCardDTO[]>;
          if (!cancelled) setPublishedNews(payload.data ?? []);
        } catch (err) {
          if (!cancelled) setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
          if (!cancelled) setIsLoading(false);
        }
      }

      setIsLoading(true);
      doFetch();

      return function cleanup() {
        cancelled = true;
      };
    },
    [searchTerm, statusFilter]
  );

  const togglePublish = useCallback(async function (id: string, shouldPublish: boolean) {
    const token = localStorage.getItem('auth-token');
    const response = await fetch(`${env.VITE_API_BASE_URL}/news/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(
        shouldPublish
          ? { status: 'published', publishedAt: new Date().toISOString() }
          : { status: 'draft', publishedAt: null }
      ),
    });
    if (!response.ok)
      throw new Error(shouldPublish ? 'Falha ao publicar notícia' : 'Falha ao despublicar notícia');
    const payload = (await response.json()) as ResponsePayload<News>;

    if (!payload.data) {
      throw new Error(shouldPublish ? 'Falha ao publicar notícia' : 'Falha ao despublicar notícia');
    }

    // Recarrega a lista para refletir o novo estado
    setPublishedNews(function removeToggled(prev) {
      return prev.filter(function filterArticle(article) {
        return article.id !== id;
      });
    });
  }, []);

  async function handleTogglePublish(id: string) {
    const shouldPublish = statusFilter === 'unpublished';
    setIsTogglingPublishId(id);
    setActionError(null);

    try {
      await togglePublish(id, shouldPublish);
    } catch (err) {
      setActionError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsTogglingPublishId(null);
    }
  }

  async function handleDelete(id: string) {
    const token = localStorage.getItem('auth-token');
    setIsDeletingId(id);
    setActionError(null);

    try {
      const response = await fetch(`${env.VITE_API_BASE_URL}/news/${id}`, {
        method: 'DELETE',
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!response.ok) throw new Error('Falha ao deletar notícia');

      setDeleteConfirmId(null);
      setPublishedNews(function removeDeleted(prev) {
        return prev.filter(function filterArticle(article) {
          return article.id !== id;
        });
      });
    } catch (err) {
      setActionError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsDeletingId(null);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <p className="text-muted-foreground">Carregando notícias...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-destructive font-semibold">Erro ao carregar</p>
        <p className="text-muted-foreground text-sm mt-1">{error}</p>
      </div>
    );
  }

  const emptyTitle =
    statusFilter === 'unpublished' ? 'Sem notícias pendentes.' : 'Sem notícias para mostrar';
  const emptyDescription =
    statusFilter === 'unpublished'
      ? 'Não há notícias que precisam de aprovação.'
      : 'As notícias publicadas aparecerão aqui.';

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-zinc-900">Listagem de Notícias</h1>
        <p className="text-sm text-muted-foreground">
          Notícias cadastradas ({publishedNews.length})
        </p>
      </div>

      <div className="flex items-center gap-3">
        <input
          placeholder="Pesquisar notícias"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-md border px-3 py-2 w-64"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as 'published' | 'unpublished')}
          className="rounded-md border px-3 py-2"
        >
          <option value="published">Publicadas</option>
          <option value="unpublished">Não publicadas</option>
        </select>
      </div>

      {actionError && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {actionError}
        </div>
      )}

      {publishedNews.length > 0 ? (
        <div className="grid gap-5">
          {publishedNews.map(function renderArticle(article) {
            return (
              <AdminNewsCard
                key={article.id}
                article={article}
                actions={[
                  {
                    label: 'Pré-Visualizar',
                    variant: 'secondary',
                    onClick: function onClickPreview() {
                      setPreviewNews(article);
                      setIsLoadingPreview(true);
                      getNewsById(article.id)
                        .then(function (payload) {
                          setPreviewNewsData(payload.data ?? null);
                        })
                        .catch(function () {
                          setPreviewNewsData(null);
                        })
                        .finally(function () {
                          setIsLoadingPreview(false);
                        });
                    },
                  },
                  {
                    label: statusFilter === 'unpublished' ? 'Publicar' : 'Despublicar',
                    variant: statusFilter === 'unpublished' ? 'default' : 'destructive',
                    onClick: function onClickTogglePublish() {
                      void handleTogglePublish(article.id);
                    },
                    isLoading: isTogglingPublishId === article.id,
                    loadingLabel: statusFilter === 'unpublished' ? 'Publicando' : 'Despublicando',
                  },
                  {
                    label: 'Deletar',
                    variant: 'destructive',
                    onClick: function onClickDelete() {
                      setDeleteConfirmId(article.id);
                    },
                    isLoading: isDeletingId === article.id,
                    loadingLabel: 'Deletando',
                  },
                ]}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <NewspaperIcon className="size-16 text-muted-foreground/20 mb-4" />
          <p className="text-lg font-semibold text-zinc-900">{emptyTitle}</p>
          <p className="text-muted-foreground text-sm mt-1">{emptyDescription}</p>
        </div>
      )}

      <Dialog
        open={previewNews !== null}
        onOpenChange={function onOpenChange(open) {
          if (!open) {
            setPreviewNews(null);
            setPreviewNewsData(null);
          }
        }}
      >
        <DialogContent className="sm:max-w-4xl flex flex-col max-h-[80vh] !p-0">
          <DialogHeader className="px-6 pt-6 pb-2 flex-shrink-0">
            <DialogTitle>Notícia</DialogTitle>
            <DialogDescription>
              {previewNews
                ? previewNews.category + (previewNews.author ? ` · ${previewNews.author}` : '')
                : ''}
            </DialogDescription>
          </DialogHeader>

          {previewNews && (
            <div className="overflow-y-auto flex-1 px-6 py-4">
              {isLoadingPreview ? (
                <p className="text-sm text-muted-foreground">Carregando conteúdo...</p>
              ) : previewNewsData ? (
                <>
                  <h1 className="mb-4 text-2xl font-bold leading-tight text-zinc-900 sm:text-3xl">
                    {previewNewsData.title}
                  </h1>
                  <NewsArticleRenderer
                    title={previewNewsData.title}
                    summary={previewNewsData.summary}
                    category={previewNewsData.category}
                    author={previewNewsData.author}
                    coverImageUrl={previewNewsData.coverImageUrl}
                    tags={previewNewsData.tags}
                    content={previewNewsData.content}
                  />
                </>
              ) : null}
            </div>
          )}

          <DialogFooter className="px-6 pb-6 pt-2 flex-shrink-0">
            <Button
              type="button"
              variant="outline"
              onClick={function closePreview() {
                setPreviewNews(null);
                setPreviewNewsData(null);
              }}
            >
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={deleteConfirmId !== null}
        onOpenChange={function onOpenChange(open) {
          if (!open) setDeleteConfirmId(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deletar notícia</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja deletar esta notícia? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={function cancelDelete() {
                setDeleteConfirmId(null);
              }}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              variant="destructive"
              disabled={isDeletingId === deleteConfirmId}
              onClick={function confirmDelete() {
                if (deleteConfirmId) void handleDelete(deleteConfirmId);
              }}
            >
              {isDeletingId === deleteConfirmId ? 'Deletando...' : 'Deletar'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { NewsListingPage };
