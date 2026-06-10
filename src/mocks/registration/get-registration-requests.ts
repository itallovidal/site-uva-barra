import { HttpResponse, http } from 'msw';

import { pendingRequests } from './registration-state';

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

function handleGetRegistrationRequests({ request }: { request: Request }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const url = new URL(request.url);
  const statusFilter = url.searchParams.get('status')?.toUpperCase();
  const page = Number(url.searchParams.get('page') ?? '1') || 1;
  const perPage = Number(url.searchParams.get('perPage') ?? '10') || 10;

  let filtered = [...pendingRequests];

  if (statusFilter) {
    filtered = filtered.filter(
      (req) => req.status.toUpperCase() === statusFilter
    );
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage) || 1;
  const start = (page - 1) * perPage;
  const data = filtered.slice(start, start + perPage);

  return HttpResponse.json({
    status: 200,
    data,
    meta: {
      page,
      perPage,
      total,
      totalPages,
    },
  });
}

export const getRegistrationRequestsHandler = http.get('/registration/requests', handleGetRegistrationRequests);
