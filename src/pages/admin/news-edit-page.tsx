import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/lib/card';
import { Skeleton } from '@/components/lib/skeleton';
import { NewsForm } from '@/components/news-form/news-form';
import { getNewsById } from '@/api/news/get-news-by-id';
import { updateNews } from '@/api/news/update-news';
import type { NewsFormData } from '@/schemas/news-schemas';
import type { News } from '@/domain/entities';

function mapNewsToFormData(news: News): Partial<NewsFormData> {
  return {
    title: news.title,
    summary: news.summary,
    content: news.content,
    category: news.category,
    tags: news.tags,
    coverImageUrl: news.coverImageUrl || undefined,
    status: news.status as NewsFormData['status'],
    featured: news.featured,
    author: news.author,
    publishedAt: news.publishedAt
      ? news.publishedAt instanceof Date
        ? news.publishedAt.toISOString()
        : String(news.publishedAt)
      : null,
  };
}

function NewsEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [defaultValues, setDefaultValues] = useState<Partial<NewsFormData> | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    function loadArticle() {
      let cancelled = false;

      async function doFetch() {
        try {
          const payload = await getNewsById(id!);
          if (!cancelled && payload.data) {
            setDefaultValues(mapNewsToFormData(payload.data));
          }
        } catch (err) {
          if (!cancelled) {
            setError(err instanceof Error ? err.message : 'Erro ao carregar notícia');
          }
        } finally {
          if (!cancelled) setIsLoading(false);
        }
      }

      doFetch();

      return function cleanup() {
        cancelled = true;
      };
    },
    [id]
  );

  async function handleUpdate(data: NewsFormData) {
    await updateNews(id!, data);
    navigate('/admin/news?status=unpublished');
  }

  if (!id) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl items-start justify-center px-4 py-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Editar Notícia</CardTitle>
            <CardDescription className="text-center text-destructive">
              ID da notícia não encontrado
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl items-start justify-center px-4 py-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Editar Notícia</CardTitle>
            <CardDescription className="text-center">
              Carregando dados da notícia...
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-40" />
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl items-start justify-center px-4 py-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Editar Notícia</CardTitle>
            <CardDescription className="text-center text-destructive">
              {error}
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl items-start justify-center px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Editar Notícia</CardTitle>
          <CardDescription className="text-center">
            Edite os campos abaixo para atualizar a notícia
          </CardDescription>
        </CardHeader>

        <CardContent>
          <NewsForm
            mode="edit"
            defaultValues={defaultValues}
            onSubmit={handleUpdate}
          />
        </CardContent>
      </Card>
    </main>
  );
}

export { NewsEditPage };
