import { HttpResponse, http } from 'msw';

import { categoryExample } from './category-fixtures';

function handleCategories() {
  return HttpResponse.json({ status: 200, data: [categoryExample] });
}

export const getCategoriesHandler = http.get('/categories', handleCategories);
