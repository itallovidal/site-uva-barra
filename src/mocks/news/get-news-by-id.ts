import { HttpResponse, http, type PathParams } from 'msw';

import { publishedNewsExample } from './news-fixtures';

function handleGetNewsById({ params }: { params: PathParams }) {
  const id = typeof params.id === 'string' ? params.id : '';

  if (id !== publishedNewsExample.id) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Notícia não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  return HttpResponse.json({ status: 200, data: publishedNewsExample });
}

export const getNewsByIdHandler = http.get('/news/:id', handleGetNewsById);
