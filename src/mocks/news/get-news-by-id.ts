import { HttpResponse, http, type PathParams } from 'msw';

import { newsDetailFixture } from './news-fixtures';

const knownFixtures: Record<string, typeof newsDetailFixture> = {
  [newsDetailFixture.id]: newsDetailFixture,
};

function handleGetNewsById({ params }: { params: PathParams }) {
  const id = typeof params.id === 'string' ? params.id : '';
  const fixture = knownFixtures[id];

  if (!fixture) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Notícia não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  return HttpResponse.json({ status: 200, data: fixture });
}

export const getNewsByIdHandler = http.get('/news/:id', handleGetNewsById);
