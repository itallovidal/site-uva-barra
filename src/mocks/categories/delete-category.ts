import { HttpResponse, http, type PathParams } from 'msw';

import { categoryExample } from './category-fixtures';

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

function handleDeleteCategory({ request, params }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  if (id !== categoryExample.id) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Categoria não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  return new HttpResponse(null, { status: 204 });
}

export const deleteCategoryHandler = http.delete('/categories/:id', handleDeleteCategory);
