import { HttpResponse, http, type PathParams } from 'msw';

import { userExample } from './user-fixtures';

function handleGetUserByEmail({ params }: { params: PathParams }) {
  const email = typeof params.email === 'string' ? params.email : '';

  if (email !== userExample.email) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Usuário não encontrado', code: 'USER_NOT_FOUND' } },
      { status: 404 }
    );
  }

  return HttpResponse.json({ status: 200, data: userExample });
}

export const getUserByEmailHandler = http.get('/user/email/:email', handleGetUserByEmail);
