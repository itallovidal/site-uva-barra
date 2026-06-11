import { HttpResponse, http, type PathParams } from 'msw';

import { newsletterEmails } from './newsletter-state';

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

function handleGetEmail({ params, request }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const email = typeof params.email === 'string' ? params.email : '';
  const entry = newsletterEmails.get(email);

  if (!entry) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Email não encontrado', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  return HttpResponse.json({ status: 200, data: entry });
}

export const getEmailHandler = http.get('/newsletter/email/:email', handleGetEmail);
