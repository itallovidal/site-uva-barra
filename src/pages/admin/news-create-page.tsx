import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/lib/card';
import { env } from '@/env';
import { NewsForm } from '@/components/news-form/news-form';
import type { NewsFormData } from '@/schemas/news-schemas';
import type { ResponsePayload } from '@/types/api-response-types';

function NewsCreatePage() {
  const navigate = useNavigate();

  async function handleCreate(data: NewsFormData) {
    const token = localStorage.getItem('auth-token');
    const response = await fetch(`${env.VITE_API_BASE_URL}/news`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!response.ok) throw new Error('Falha ao criar notícia');
    const payload = (await response.json()) as ResponsePayload<{ id: string }>;

    if (!payload.data?.id) {
      throw new Error('Falha ao criar notícia');
    }

    navigate('/admin/news/published');
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-2xl items-start justify-center px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Criar Notícia</CardTitle>
          <CardDescription className="text-center">
            Preencha os campos abaixo para criar uma nova notícia
          </CardDescription>
        </CardHeader>

        <CardContent>
          <NewsForm
            mode="create"
            onSubmit={handleCreate}
          />
        </CardContent>
      </Card>
    </main>
  );
}

export { NewsCreatePage };
