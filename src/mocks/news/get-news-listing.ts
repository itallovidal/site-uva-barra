import { HttpResponse, http, type PathParams } from 'msw';
import { latestNewsExample, latestNewsMeta } from './news-fixtures';

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

function handleGetNewsListing({ request, params }: { request: Request; params: PathParams }) {
  const url = new URL(request.url);
  const category = (params.category as string) || '';
  const status = url.searchParams.get('status');
  const sort = url.searchParams.get('sort') ?? 'desc';
  const page = Number(url.searchParams.get('page') ?? '1') || 1;
  const perPage = Number(url.searchParams.get('perPage') ?? '10') || 10;

  if (status === 'unpublished' && !isAuthenticated(request)) {
    return unauthorizedResponse();
  }

  let filtered = [...latestNewsExample];

  if (category) {
    filtered = filtered.filter(
      (article) => article.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (status === 'published') {
    filtered = filtered.filter((article) => article.publishedAt);
  } else if (status === 'unpublished') {
    filtered = filtered.filter((article) => !article.publishedAt);
  }

  if (sort === 'asc') {
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
      ...latestNewsMeta,
      page,
      perPage,
      total,
      totalPages: Math.ceil(total / perPage) || 1,
    },
  });
}

export const getNewsListingHandler = http.get('/news', handleGetNewsListing);
export const getNewsListingByCategoryHandler = http.get('/news/category/:category', handleGetNewsListing);
