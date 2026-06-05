import { HttpResponse, http, type PathParams } from 'msw';
import { latestNewsExample, latestNewsMeta } from './news-fixtures';

function handleGetNewsListing({ request, params }: { request: Request; params: PathParams }) {
  const url = new URL(request.url);
  const category = (params.category as string) || url.searchParams.get('category') || '';
  const sort = url.searchParams.get('sort') ?? 'desc';
  const page = Number(url.searchParams.get('page') ?? '1') || 1;
  const perPage = Number(url.searchParams.get('perPage') ?? '10') || 10;

  let filtered = category
    ? latestNewsExample.filter(
        (article) => article.category.toLowerCase() === category.toLowerCase()
      )
    : [...latestNewsExample];

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
