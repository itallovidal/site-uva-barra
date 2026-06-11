import { HttpResponse, http, type PathParams } from 'msw';

import { newsletterList } from './newsletter-state';

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

function handleUpdateNewsletter({ params, request }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  const index = newsletterList.findIndex((n) => n.id === id);

  if (index === -1) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Newsletter não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  return request.json().then(function (body: { content?: string }) {
    if (!body.content) {
      return HttpResponse.json(
        { status: 400, data: null, error: { message: 'Conteúdo é obrigatório', code: 'VALIDATION_ERROR' } },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    newsletterList[index] = { ...newsletterList[index], content: body.content, updatedAt: now };

    return HttpResponse.json({ status: 200, data: newsletterList[index] });
  });
}

export const updateNewsletterHandler = http.put('/newsletter/:id', handleUpdateNewsletter);
