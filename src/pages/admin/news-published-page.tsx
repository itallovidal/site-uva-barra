import { useCallback, useEffect, useState } from 'react';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
import { apiAuthClient } from '@/lib/api-auth-client';
import type { AdminNewsCardDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

function NewsPublishedPage() {
  const [publishedNews, setPublishedNews] = useState<AdminNewsCardDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [previewNews, setPreviewNews] = useState<AdminNewsCardDTO | null>(null);
  const [isUnpublishingId, setIsUnpublishingId] = useState<string | null>(null);

  useEffect(function loadPublishedNews() {
    let cancelled = false;

    async function doFetch() {
      try {
        const response = await fetch('/api/news/published');
        if (!response.ok) throw new Error('Falha ao carregar artigos publicados');
        const payload = (await response.json()) as ResponsePayload<AdminNewsCardDTO[]>;
        if (!cancelled) setPublishedNews(payload.data ?? []);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    doFetch();

    return function cleanup() {
      cancelled = true;
    };
  }, []);

  const unpublish = useCallback(async function (id: string) {
    const payload = await apiAuthClient<{ success: boolean }>(`/api/news/${id}/unpublish`, {
      method: 'POST',
    });

    if (!payload.data?.success) {
      throw new Error('Falha ao despublicar artigo');
    }

    setPublishedNews(function removeUnpublished(prev) {
      return prev.filter(function filterArticle(article) {
        return article.id !== id;
      });
    });
  }, []);

  async function handleUnpublish(id: string) {
    setIsUnpublishingId(id);
    setActionError(null);

    try {
      await unpublish(id);
    } catch (err) {
      setActionError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsUnpublishingId(null);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <p className="text-muted-foreground">Carregando artigos publicados...</p>
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

  if (publishedNews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-lg font-semibold text-zinc-900">Nenhum artigo publicado</p>
        <p className="text-muted-foreground text-sm mt-1">
          Os artigos publicados aparecerão aqui para revisão e despublicação.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-zinc-900">Artigos Publicados</h1>
        <p className="text-sm text-muted-foreground">
          Artigos já publicados ({publishedNews.length})
        </p>
      </div>

      {actionError && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {actionError}
        </div>
      )}

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
                  },
                },
                {
                  label: 'Despublicar',
                  variant: 'destructive',
                  onClick: function onClickUnpublish() {
                    void handleUnpublish(article.id);
                  },
                  isLoading: isUnpublishingId === article.id,
                  loadingLabel: 'Despublicando',
                },
              ]}
            />
          );
        })}
      </div>

      <Dialog
        open={previewNews !== null}
        onOpenChange={function onOpenChange(open) {
          if (!open) setPreviewNews(null);
        }}
      >
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Artigo publicado</DialogTitle>
            <DialogDescription>
              {previewNews ? `${previewNews.categoryName} · ${previewNews.authorName}` : ''}
            </DialogDescription>
          </DialogHeader>

          {previewNews && (
            <div className="space-y-5">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold leading-tight text-zinc-900">
                  {previewNews.title}
                </h2>
                <p className="text-sm text-muted-foreground">{previewNews.summary}</p>
              </div>

              {previewNews.coverImageUrl && (
                <div className="overflow-hidden rounded-lg border bg-zinc-100">
                  <img
                    src={previewNews.coverImageUrl}
                    alt={previewNews.title}
                    className="max-h-80 w-full object-cover"
                  />
                </div>
              )}

              <div className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-li:text-zinc-700 prose-a:text-red-600">
                <Markdown remarkPlugins={[remarkGfm]}>{previewNews.content}</Markdown>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={function closePreview() {
                setPreviewNews(null);
              }}
            >
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { NewsPublishedPage };
