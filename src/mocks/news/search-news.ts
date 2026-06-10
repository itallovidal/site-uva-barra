import { HttpResponse, http } from 'msw';
import { latestNewsExample } from './news-fixtures';

function handleSearchNews({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  if (!query) {
    return HttpResponse.json(
      { status: 400, data: null, error: { message: 'Parâmetro de busca é obrigatório', code: 'VALIDATION_ERROR' } },
      { status: 400 }
    );
  }

  const queryLower = query.toLowerCase();
  const order = url.searchParams.get('order') ?? 'newest';
  const page = Number(url.searchParams.get('page') ?? '1') || 1;
  const perPage = Number(url.searchParams.get('perPage') ?? '10') || 10;

  let filtered = latestNewsExample.filter(
    (article) =>
      article.title.toLowerCase().includes(queryLower) ||
      article.summary.toLowerCase().includes(queryLower)
  );

  if (order === 'oldest') {
    filtered = filtered.sort(
      (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    );
  } else {
    filtered = filtered.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

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

export const searchNewsHandler = http.get('/news/search', handleSearchNews);
