import { HttpResponse, http, type PathParams } from 'msw';

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

function handleRejectRegistration({ request, params }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  const index = pendingRequests.findIndex((user) => user.id === id);

  if (index === -1) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Solicitação não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  pendingRequests.splice(index, 1);

  return HttpResponse.json({ status: 200, data: { success: true } });
}

export const rejectRegistrationHandler = http.post('/registration/:id/reject', handleRejectRegistration);
