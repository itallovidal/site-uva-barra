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

function handleUpdateNews({ request, params }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  if (id !== publishedNewsExample.id) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Notícia não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  return request.json().then(function () {
    return HttpResponse.json({ status: 200, data: publishedNewsExample });
  });
}

export const updateNewsHandler = http.put('/news/:id', handleUpdateNews);
