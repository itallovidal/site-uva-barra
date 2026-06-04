import { HttpResponse, http, type PathParams } from 'msw';

import { pendingRequests } from './collaborators-state';

function isAuthenticated(request: Request): boolean {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  return true;
}

function unauthorizedResponse() {
  return HttpResponse.json(
    { status: 401, error: { message: 'Não autorizado', code: 'UNAUTHORIZED' } },
    { status: 401 }
  );
}

function handleDeleteCollaborator({ request, params }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  const index = pendingRequests.findIndex((user) => user.id === id);

  if (index === -1) {
    return HttpResponse.json({ status: 404, error: { message: 'Solicitação não encontrada', code: 'NOT_FOUND' } }, { status: 404 });
  }

  pendingRequests.splice(index, 1);
  return HttpResponse.json({ status: 200, data: { success: true } });
}

export const deleteCollaboratorHandler = http.delete('/api/collaborators/:id', handleDeleteCollaborator);
