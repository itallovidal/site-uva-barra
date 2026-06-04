import { HttpResponse, http, type PathParams } from 'msw';

import { categoryExample } from './category-fixtures';

function handleGetCategoryById({ params }: { params: PathParams }) {
  const id = typeof params.id === 'string' ? params.id : '';

  if (id !== categoryExample.id) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Categoria não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  return HttpResponse.json({ status: 200, data: categoryExample });
}

export const getCategoryByIdHandler = http.get('/categories/:id', handleGetCategoryById);
