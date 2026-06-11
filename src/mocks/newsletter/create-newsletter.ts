import { HttpResponse, http } from 'msw';

import { newsletterList, generateNewsletterId } from './newsletter-state';

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

function handleCreateNewsletter({ request }: { request: Request }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  return request.json().then(function (body: { content?: string }) {
    if (!body.content) {
      return HttpResponse.json(
        { status: 400, data: null, error: { message: 'Conteúdo é obrigatório', code: 'VALIDATION_ERROR' } },
        { status: 400 }
      );
    }

    const id = generateNewsletterId();
    const now = new Date().toISOString();
    const newsletter = { id, content: body.content, createdAt: now, updatedAt: now };

    newsletterList.push(newsletter);

    return HttpResponse.json({ status: 201, data: newsletter }, { status: 201 });
  });
}

export const createNewsletterHandler = http.post('/newsletter/', handleCreateNewsletter);
