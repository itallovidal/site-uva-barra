import { http, HttpResponse } from 'msw';

function handleHealthCheck() {
  return HttpResponse.json({ status: 'ok' });
}

export const handlers = [
  http.get('/api/health', handleHealthCheck),
];
