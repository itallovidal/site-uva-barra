import { HttpResponse, http, type PathParams } from 'msw';

import { latestNewsExample, latestNewsMeta } from './news-fixtures';

function handleLatestNewsByCategory({ request, params }: { request: Request; params: PathParams }) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') ?? '1') || 1;
  const perPage = Number(url.searchParams.get('perPage') ?? '10') || 10;
  const category = typeof params.category === 'string' ? params.category : '';

  return HttpResponse.json({
    status: 200,
    data: [{ ...latestNewsExample, category }],
    meta: {
      ...latestNewsMeta,
      page,
      perPage,
      totalPages: Math.ceil(latestNewsMeta.total / perPage),
    },
  });
}

export const getLatestNewsByCategoryHandler = http.get(
  '/news/latest/:category',
  handleLatestNewsByCategory
);

export const getNewsQueryAliasHandler = http.get('/news/latest', function ({ request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category') ?? 'tecnologia';
  const page = Number(url.searchParams.get('page') ?? '1') || 1;
  const perPage =
    Number(url.searchParams.get('perPage') ?? url.searchParams.get('limit') ?? '10') || 10;

  return HttpResponse.json({
    status: 200,
    data: [{ ...latestNewsExample, category }],
    meta: {
      page,
      perPage,
      total: 42,
      totalPages: Math.ceil(42 / perPage),
    },
  });
});
