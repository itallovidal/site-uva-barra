import { useCallback, useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/lib/dialog';
import { AdminNewsCard } from '@/components/admin-news-card';
import { Button } from '@/components/lib/button';
import { Textarea } from '@/components/lib/textarea';
import { env } from '@/env';
import { apiAuthClient } from '@/lib/api-auth-client';
import type { NewsModerationItemDTO, NewsReviewRequestDTO } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

interface UsePendingNewsModerationResult {
  pendingNews: NewsModerationItemDTO[];
  isLoading: boolean;
  error: string | null;
  approve: (id: string) => Promise<void>;
  requestReview: (id: string, comment: string) => Promise<void>;
}

function usePendingNewsModeration(): UsePendingNewsModerationResult {
  const [pendingNews, setPendingNews] = useState<NewsModerationItemDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(function loadPendingNews() {
    let cancelled = false;

    async function doFetch() {
        try {
        const payload = await apiAuthClient<NewsModerationItemDTO[]>('/news/pending');
        if (!cancelled) setPendingNews(payload.data ?? []);
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

  const approve = useCallback(async function (id: string) {
    const result = await apiAuthClient<{ success: boolean }>(`/news/${id}/publish`, {
      method: 'POST',
    });

    if (!result.data?.success) {
      throw new Error('Falha ao aprovar notícia');
    }

    setPendingNews(function removeApproved(prev) {
      return prev.filter(function filterNews(news) {
        return news.id !== id;
      });
    });
  }, []);

  const requestReview = useCallback(async function (id: string, comment: string) {
    const payload: NewsReviewRequestDTO = { comment };
    const result = await apiAuthClient<{ success: boolean }>(`/news/${id}/request-review`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (!result.data?.success) {
      const message = 'Falha ao enviar para revisão';
      throw new Error(message);
    }

    setPendingNews(function removeReviewed(prev) {
      return prev.filter(function filterNews(news) {
        return news.id !== id;
      });
    });
  }, []);

  return { pendingNews, isLoading, error, approve, requestReview };
}

function NewsPublicationReviewPage() {
  const { pendingNews, isLoading, error, approve, requestReview } = usePendingNewsModeration();
  const [selectedNews, setSelectedNews] = useState<NewsModerationItemDTO | null>(null);
  const [previewNews, setPreviewNews] = useState<NewsModerationItemDTO | null>(null);
  const [comment, setComment] = useState('');
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [isApprovingId, setIsApprovingId] = useState<string | null>(null);

  function openReviewModal(news: NewsModerationItemDTO) {
    setSelectedNews(news);
    setComment('');
    setReviewError(null);
    setActionError(null);
  }

  function openPreviewModal(news: NewsModerationItemDTO) {
    setPreviewNews(news);
  }

  function closeReviewModal() {
    setSelectedNews(null);
    setComment('');
    setReviewError(null);
  }

  function closePreviewModal() {
    setPreviewNews(null);
  }

  async function handleApprove(id: string) {
    setIsApprovingId(id);
    setActionError(null);

    try {
      await approve(id);
    } catch (err) {
      setActionError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsApprovingId(null);
    }
  }

  async function handleSubmitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedNews) {
      return;
    }

    if (!comment.trim()) {
      setReviewError('Comentário é obrigatório');
      return;
    }

    setIsSubmittingReview(true);
    setReviewError(null);
    setActionError(null);

    try {
      await requestReview(selectedNews.id, comment.trim());
      closeReviewModal();
    } catch (err) {
      setReviewError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsSubmittingReview(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <p className="text-muted-foreground">Carregando notícias pendentes...</p>
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

  if (pendingNews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-lg font-semibold text-zinc-900">Nenhuma notícia pendente</p>
        <p className="text-muted-foreground text-sm mt-1">
          Todas as notícias em análise já foram processadas.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-zinc-900">Aprovação de Notícias</h1>
        <p className="text-sm text-muted-foreground">
          Notícias pendentes para publicar ({pendingNews.length})
        </p>
      </div>

      {actionError && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {actionError}
        </div>
      )}

      <div className="grid gap-5">
        {pendingNews.map(function renderNews(news) {
          return (
            <AdminNewsCard
              key={news.id}
              article={news}
              actions={[
                {
                  label: 'Pré-Visualizar',
                  variant: 'secondary',
                  onClick: function onClickPreview() {
                    openPreviewModal(news);
                  },
                },
                {
                  label: 'Publicar',
                  onClick: function onClickApprove() {
                    void handleApprove(news.id);
                  },
                  isLoading: isApprovingId === news.id,
                  loadingLabel: 'Publicando',
                },
                {
                  label: 'Precisa de revisão',
                  variant: 'outline',
                  onClick: function onClickReview() {
                    openReviewModal(news);
                  },
                },
              ]}
            />
          );
        })}
      </div>

      <Dialog
        open={selectedNews !== null}
        onOpenChange={function onOpenChange(open) {
          if (!open) closeReviewModal();
        }}
      >
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Solicitar revisão</DialogTitle>
            <DialogDescription>
              Adicione um comentário para orientar os ajustes antes da publicação.
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-5" onSubmit={handleSubmitReview}>
            <div className="space-y-3">
              <Textarea
                value={comment}
                onChange={function onChangeComment(event) {
                  setComment(event.target.value);
                }}
                rows={6}
                placeholder="Descreva o que precisa ser revisado"
              />
              {reviewError && <p className="text-sm text-destructive">{reviewError}</p>}
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeReviewModal}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmittingReview}>
                {isSubmittingReview ? 'Enviando...' : 'Enviar para revisão'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={previewNews !== null}
        onOpenChange={function onOpenChange(open) {
          if (!open) closePreviewModal();
        }}
      >
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Em revisão - Ainda Não publicado</DialogTitle>
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
            <Button type="button" variant="outline" onClick={closePreviewModal}>
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { NewsPublicationReviewPage };
