import { HttpResponse, http } from 'msw';

import { newsletterEmails, newsletterEmailList } from './newsletter-state';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function handleRegister({ request }: { request: Request }) {
  return request.json().then(function (body: { email?: string }) {
    if (!body.email) {
      return HttpResponse.json(
        { status: 400, data: null, error: { message: 'Email é obrigatório', code: 'VALIDATION_ERROR' } },
        { status: 400 }
      );
    }

    if (!emailRegex.test(body.email)) {
      return HttpResponse.json(
        { status: 400, data: null, error: { message: 'Email inválido', code: 'VALIDATION_ERROR' } },
        { status: 400 }
      );
    }

    const exists = newsletterEmails.get(body.email);
    if (exists) {
      return HttpResponse.json(
        { status: 409, data: null, error: { message: 'Email já cadastrado', code: 'EMAIL_ALREADY_EXISTS' } },
        { status: 409 }
      );
    }

    newsletterEmails.set(body.email, { email: body.email, registeredAt: new Date().toISOString() });
    newsletterEmailList.push(newsletterEmails.get(body.email)!);

    return HttpResponse.json({ status: 201, data: { success: true } }, { status: 201 });
  });
}

export const newsletterRegisterHandler = http.post('/newsletter/register', handleRegister);
