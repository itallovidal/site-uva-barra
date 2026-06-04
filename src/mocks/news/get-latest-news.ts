import { HttpResponse, http } from 'msw';

import { latestNewsExample, latestNewsMeta } from './news-fixtures';

function handleLatestNews({ request }: { request: Request }) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') ?? '1') || 1;
  const perPage = Number(url.searchParams.get('perPage') ?? '10') || 10;

  return HttpResponse.json({
    status: 200,
    data: latestNewsExample.slice((page - 1) * perPage, page * perPage),
    meta: {
      ...latestNewsMeta,
      page,
      perPage,
      totalPages: Math.ceil(latestNewsMeta.total / perPage),
    },
  });
}

export const getLatestNewsHandler = http.get('/news/latest', handleLatestNews);
