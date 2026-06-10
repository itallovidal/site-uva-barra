import { HttpResponse, http } from 'msw';

function handleRegister({ request }: { request: Request }) {
  return request.json().then(function (body: { email?: string }) {
    if (!body.email) {
      return HttpResponse.json(
        { status: 400, data: null, error: { message: 'Email é obrigatório', code: 'VALIDATION_ERROR' } },
        { status: 400 }
      );
    }

    return HttpResponse.json({ status: 201, data: { success: true } }, { status: 201 });
  });
}

export const newsletterRegisterHandler = http.post('/newsletter/register', handleRegister);
