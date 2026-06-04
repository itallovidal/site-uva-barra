import { HttpResponse, http, type PathParams } from 'msw';

import { publishedNewsExample } from './news-fixtures';

function isAuthenticated(request: Request): boolean {
  const authHeader = request.headers.get('Authorization');
  return !!authHeader?.startsWith('Bearer ');
}

function unauthorizedResponse() {
  return HttpResponse.json(
    { status: 401, data: null, error: { message: 'Não autorizado', code: 'UNAUTHORIZED' } },
    { status: 401 }
  );
}

function handleDeleteNews({ params, request }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  if (id !== publishedNewsExample.id) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Notícia não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  return new HttpResponse(null, { status: 204 });
}

export const deleteNewsHandler = http.delete('/news/:id', handleDeleteNews);
