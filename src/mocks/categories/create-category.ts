import { HttpResponse, http } from 'msw';

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

function handleCreateCategory({ request }: { request: Request }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  return request.json().then(function () {
    return HttpResponse.json({ status: 201, data: categoryExample }, { status: 201 });
  });
}

export const createCategoryHandler = http.post('/categories', handleCreateCategory);
