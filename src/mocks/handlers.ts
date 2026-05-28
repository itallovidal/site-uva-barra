import { http, HttpResponse } from 'msw';
import { newsHighlightMocks } from './news-highlight-mocks';
import { newsCategoryMocks } from './news-category-mocks';
import { teamMemberMocks } from './team-members-mocks';

function handleHealthCheck() {
  return HttpResponse.json({ status: 'ok' });
}

function handleNewsLatest() {
  return HttpResponse.json(newsHighlightMocks);
}

function handleNewsByCategory({ request }: { request: Request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const limit = Number(url.searchParams.get('limit')) || 3;

  const filtered = category
    ? newsCategoryMocks.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase(),
      )
    : newsCategoryMocks;

  return HttpResponse.json(filtered.slice(0, limit));
}

export const handlers = [
  http.get('/api/health', handleHealthCheck),
  http.get('/api/news/latest', handleNewsLatest),
  http.get('/api/news', handleNewsByCategory),
  http.get('/api/collaborators', () => HttpResponse.json(teamMemberMocks)),
];
