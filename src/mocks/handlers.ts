import { http, HttpResponse } from 'msw';
import { newsHighlightMocks } from './news-highlight-mocks';

function handleHealthCheck() {
  return HttpResponse.json({ status: 'ok' });
}

function handleNewsLatest() {
  return HttpResponse.json(newsHighlightMocks);
}

export const handlers = [
  http.get('/api/health', handleHealthCheck),
  http.get('/api/news/latest', handleNewsLatest),
];
