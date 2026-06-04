import { HttpResponse, http, type PathParams } from 'msw';

import { publishedNewsExample } from './news-fixtures';

function handleGetNewsBySlug({ params }: { params: PathParams }) {
  const slug = typeof params.slug === 'string' ? params.slug : '';

  if (slug !== publishedNewsExample.slug) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Notícia não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  return HttpResponse.json({ status: 200, data: publishedNewsExample });
}

export const getNewsBySlugHandler = http.get('/news/slug/:slug', handleGetNewsBySlug);
