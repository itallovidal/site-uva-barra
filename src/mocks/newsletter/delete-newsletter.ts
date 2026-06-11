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

function handleDeleteNewsletter({ params, request }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  const index = newsletterList.findIndex((n) => n.id === id);

  if (index === -1) {
    return HttpResponse.json(
      { status: 404, data: null, error: { message: 'Newsletter não encontrada', code: 'NOT_FOUND' } },
      { status: 404 }
    );
  }

  newsletterList.splice(index, 1);
  return new HttpResponse(null, { status: 204 });
}

export const deleteNewsletterHandler = http.delete('/newsletter/:id', handleDeleteNewsletter);
