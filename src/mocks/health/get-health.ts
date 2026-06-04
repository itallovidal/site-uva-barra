import { HttpResponse, http } from 'msw';

function handleHealthCheck() {
  return HttpResponse.json({ status: 200, data: { status: 'ok' } });
}

export const getHealthHandler = http.get('/api/health', handleHealthCheck);
