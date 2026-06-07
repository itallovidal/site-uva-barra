import { HttpResponse, http } from 'msw';

import { mockJwt, userExample } from './user-fixtures';

function handleLogin({ request }: { request: Request }) {
  return request.json().then(function (body: { email?: string; password?: string }) {
    if (body.email === 'admin@gmail.com' && body.password === 'senha123') {
      return HttpResponse.json({
        status: 200,
        data: {
          accessToken: mockJwt,
          user: userExample,
        },
      });
    }

    return HttpResponse.json(
      {
        status: 401,
        data: null,
        error: { message: 'Credenciais inválidas', code: 'INVALID_CREDENTIALS' },
      },
      { status: 401 }
    );
  });
}

export const loginHandler = http.post('/user/login', handleLogin);
