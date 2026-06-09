import { HttpResponse, http, type PathParams } from 'msw';

import { userExample } from './user-fixtures';
import { teamMemberMocks } from '../collaborators/collaborators-state';

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

function handleUpdateUser({ request, params }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';

  const memberIndex = teamMemberMocks.findIndex((m) => m.id === id);
  if (memberIndex !== -1) {
    return request.json().then(function (body) {
      const updated = { ...teamMemberMocks[memberIndex], ...body };
      teamMemberMocks[memberIndex] = updated;
      return HttpResponse.json({ status: 200, data: updated });
    });
  }

  if (id === userExample.id) {
    return request.json().then(function () {
      return HttpResponse.json({ status: 200, data: userExample });
    });
  }

  return HttpResponse.json(
    { status: 404, data: null, error: { message: 'Usuário não encontrado', code: 'USER_NOT_FOUND' } },
    { status: 404 }
  );
}

export const updateUserHandler = http.put('/user/:id', handleUpdateUser);
