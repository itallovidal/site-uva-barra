import { HttpResponse, http } from 'msw';

import { createdUserExample } from './user-fixtures';

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

function handleCreateUser({ request }: { request: Request }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  return request.json().then(function (body: { email?: string }) {
    if (body.email === 'existente@exemplo.com') {
      return HttpResponse.json(
        { status: 409, data: null, error: { message: 'Email já cadastrado', code: 'EMAIL_ALREADY_EXISTS' } },
        { status: 409 }
      );
    }

    return HttpResponse.json({ status: 201, data: createdUserExample }, { status: 201 });
  });
}

export const createUserHandler = http.post('/user/', handleCreateUser);
