import { HttpResponse, http, type PathParams } from 'msw';

import { userExample } from './user-fixtures';

function handleGetUserById({ params }: { params: PathParams }) {
  const id = typeof params.id === 'string' ? params.id : '';

  if (id !== userExample.id) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Usuário não encontrado', code: 'USER_NOT_FOUND' } },
      { status: 404 }
    );
  }

  return HttpResponse.json({ status: 200, data: userExample });
}

export const getUserByIdHandler = http.get('/user/:id', handleGetUserById);
