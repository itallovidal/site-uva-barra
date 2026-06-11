import { HttpResponse, http } from 'msw';

import { newsletterEmailList } from './newsletter-state';

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

function handleListEmails({ request }: { request: Request }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') ?? '1') || 1;
  const perPage = Number(url.searchParams.get('perPage') ?? '10') || 10;

  const total = newsletterEmailList.length;
  const data = newsletterEmailList.slice((page - 1) * perPage, page * perPage);

  return HttpResponse.json({
    status: 200,
    data,
    meta: {
      page,
      perPage,
      total,
      totalPages: Math.ceil(total / perPage) || 1,
    },
  });
}

export const listEmailsHandler = http.get('/newsletter/email', handleListEmails);
