import { HttpResponse, http } from 'msw';

import { categories } from './categories-state';

function handleCategories() {
  return HttpResponse.json({ status: 200, data: categories });
}

export const getCategoriesHandler = http.get('/categories', handleCategories);
