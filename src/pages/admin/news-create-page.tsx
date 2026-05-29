import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/lib/card';
import { NewsForm } from '@/components/news-form/news-form';
import type { NewsFormData } from '@/schemas/news-schemas';

function NewsCreatePage() {
  const navigate = useNavigate();

  async function handleCreate(data: NewsFormData) {
    const response = await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Falha ao criar notícia');
    }

    navigate('/admin/articles');
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
