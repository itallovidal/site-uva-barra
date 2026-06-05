import { HttpResponse, http } from 'msw';
import { latestNewsExample } from './news-fixtures';

function handleSearchNews({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = (url.searchParams.get('q') ?? '').toLowerCase();
  const page = Number(url.searchParams.get('page') ?? '1') || 1;
  const perPage = Number(url.searchParams.get('perPage') ?? '10') || 10;

  const filtered = query
    ? latestNewsExample.filter((article) => article.title.toLowerCase().includes(query))
    : latestNewsExample;

  const total = filtered.length;
  const data = filtered.slice((page - 1) * perPage, page * perPage);

  return HttpResponse.json({
    status: 200,
    data,
    meta: {
      page,
      perPage,
      total,
      totalPages: Math.ceil(total / perPage) || 1,
    },
  });
}

export const searchNewsHandler = http.post('/news/search', handleSearchNews);
