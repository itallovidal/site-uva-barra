import { http, HttpResponse } from 'msw';
import type { PathParams } from 'msw';
import { newsHighlightMocks } from './news-highlight-mocks';
import { newsCategoryMocks } from './news-category-mocks';
import { newsModerationMocks } from './news-moderation-mocks';
import { newsPublishedMocks } from './news-published-mocks';
import { teamMemberMocks } from './team-members-mocks';
import { collaboratorRequestMocks } from './collaborator-requests-mocks';
import { categoriesMock } from './news-categories-mocks';
import { tagsMock } from './news-tags-mocks';
import { NewsStatus } from '@/domain/constants';

const pendingRequests = [...collaboratorRequestMocks];
const pendingNews = [...newsModerationMocks];
const publishedNews = [...newsPublishedMocks];
const categories = [...categoriesMock];

const ADMIN_CREDENTIALS = {
  email: 'admin@email.com',
  password: '123456',
};

const MOCK_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMmU3Y2NkZS0yY2E0LTQzNzktOGM1NC02MTZmNTc4YmM5NzIiLCJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MDU1MzQ0MSwiZXhwIjoxNzgwNjM5ODQxfQ.vwtgjkMdl2Y5QN6aMLNIWaMh_eBHVJ5FnCR-0J63DGs';

const MOCK_USER = {
  id: 'c2e7ccde-2ca4-4379-8c54-616f578bc972',
  name: 'admin',
  email: 'admin@email.com',
  avatarUrl: null,
  role: 'admin',
  profession: 'DESENVOLVEDOR',
  bio: 'admin',
  status: 'active',
  createdAt: '2026-06-03T21:43:15.999Z',
  updatedAt: '2026-06-03T21:54:59.692Z',
};

function handleLogin({ request }: { request: Request }) {
  return request.json().then(function (body: { email?: string; password?: string }) {
    if (body.email === ADMIN_CREDENTIALS.email && body.password === ADMIN_CREDENTIALS.password) {
      return HttpResponse.json({
        status: 200,
        data: {
          accessToken: MOCK_JWT,
          user: MOCK_USER,
        },
      });
    }

    return HttpResponse.json(
      { status: 401, error: { message: 'Email ou senha inválidos', code: 'INVALID_CREDENTIALS' } },
      { status: 401 }
    );
  });
}

function isAuthenticated(request: Request): boolean {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  return true;
}

function unauthorizedResponse() {
  return HttpResponse.json(
    { status: 401, error: { message: 'Não autorizado', code: 'UNAUTHORIZED' } },
    { status: 401 }
  );
}

function handleHealthCheck() {
  return HttpResponse.json({ status: 200, data: { status: 'ok' } });
}

function handleNewsLatest() {
  return HttpResponse.json({ status: 200, data: newsHighlightMocks });
}

function handleNewsByCategory({ request }: { request: Request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const limit = Number(url.searchParams.get('limit')) || 3;

  const filtered = category
    ? newsCategoryMocks.filter((item) => item.category.toLowerCase() === category.toLowerCase())
    : newsCategoryMocks;

  return HttpResponse.json({ status: 200, data: filtered.slice(0, limit) });
}

function handleCollaboratorsRequests() {
  return HttpResponse.json({ status: 200, data: pendingRequests });
}

function handleApproveCollaborator({ request, params }: { request: Request; params: Record<string, string> }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const { id } = params;
  const index = pendingRequests.findIndex((user) => user.id === id);

  if (index === -1) {
    return HttpResponse.json({ status: 404, error: { message: 'Solicitação não encontrada', code: 'NOT_FOUND' } }, { status: 404 });
  }

  const [approved] = pendingRequests.splice(index, 1);
  teamMemberMocks.push({
    id: approved.id,
    name: approved.name,
    avatarUrl: approved.avatarUrl ?? null,
    profession: approved.profession,
    bio: approved.bio ?? null,
  });

  return HttpResponse.json({ status: 200, data: { success: true } });
}

function handleDeleteCollaborator({ request, params }: { request: Request; params: Record<string, string> }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const { id } = params;
  const index = pendingRequests.findIndex((user) => user.id === id);

  if (index === -1) {
    return HttpResponse.json({ status: 404, error: { message: 'Solicitação não encontrada', code: 'NOT_FOUND' } }, { status: 404 });
  }

  pendingRequests.splice(index, 1);
  return HttpResponse.json({ status: 200, data: { success: true } });
}

function handleCategories() {
  return HttpResponse.json({ status: 200, data: categories });
}

function handleCreateCategory({ request }: { request: Request }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const body = request.json() as Promise<{ name: string; tags?: string[] }>;

  return body.then(function validateAndCreate({ name, tags }) {
    if (!name || !name.trim()) {
      return HttpResponse.json({ status: 400, error: { message: 'Nome é obrigatório', code: 'VALIDATION_ERROR' } }, { status: 400 });
    }

    const newCategory = {
      id: crypto.randomUUID(),
      name,
      tags: tags ?? [],
    };

    categories.push(newCategory);
    return HttpResponse.json({ status: 201, data: { success: true, id: newCategory.id } }, { status: 201 });
  });
}

function handleDeleteCategory({ request, params }: { request: Request; params: Record<string, string> }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const { id } = params;
  const index = categories.findIndex((cat) => cat.id === id);

  if (index === -1) {
    return HttpResponse.json({ status: 404, error: { message: 'Categoria não encontrada', code: 'NOT_FOUND' } }, { status: 404 });
  }

  categories.splice(index, 1);
  return HttpResponse.json({ status: 200, data: { success: true } });
}

function handleTags() {
  return HttpResponse.json({ status: 200, data: tagsMock });
}

function handleCreateNews({ request }: { request: Request }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  return request.json().then(function (_body) {
    return HttpResponse.json({ status: 201, data: { id: crypto.randomUUID() } }, { status: 201 });
  });
}

function handlePendingNews() {
  return HttpResponse.json({ status: 200, data: pendingNews });
}

function handleApproveNews({ request, params }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  const index = pendingNews.findIndex((news) => news.id === id);

  if (index === -1) {
    return HttpResponse.json({ status: 404, error: { message: 'Notícia não encontrada', code: 'NOT_FOUND' } }, { status: 404 });
  }

  const [approved] = pendingNews.splice(index, 1);
  publishedNews.unshift({
    ...approved,
    status: NewsStatus.PUBLISHED,
    publishedAt: new Date(),
  });
  return HttpResponse.json({ status: 200, data: { success: true } });
}

function handlePublishedNews() {
  return HttpResponse.json({ status: 200, data: publishedNews });
}

function handleUnpublishNews({ request, params }: { request: Request; params: PathParams }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  const index = publishedNews.findIndex((news) => news.id === id);

  if (index === -1) {
    return HttpResponse.json({ status: 404, error: { message: 'Artigo não encontrado', code: 'NOT_FOUND' } }, { status: 404 });
  }

  publishedNews.splice(index, 1);
  return HttpResponse.json({ status: 200, data: { success: true } });
}

function handleRequestNewsReview({ params, request }: { params: PathParams; request: Request }) {
  if (!isAuthenticated(request)) return unauthorizedResponse();

  const id = typeof params.id === 'string' ? params.id : '';
  const index = pendingNews.findIndex((news) => news.id === id);

  if (index === -1) {
    return HttpResponse.json({ status: 404, error: { message: 'Notícia não encontrada', code: 'NOT_FOUND' } }, { status: 404 });
  }

  return request
    .json()
    .then((body: { comment?: string }) => {
      if (!body.comment || !body.comment.trim()) {
        return HttpResponse.json({ status: 400, error: { message: 'Comentário obrigatório', code: 'VALIDATION_ERROR' } }, { status: 400 });
      }

      pendingNews.splice(index, 1);
      return HttpResponse.json({ status: 200, data: { success: true } });
    });
}

export const handlers = [
  http.post('/api/auth/login', handleLogin),
  http.get('/api/health', handleHealthCheck),
  http.get('/api/news/latest', handleNewsLatest),
  http.get('/api/news', handleNewsByCategory),
  http.get('/api/news/pending', handlePendingNews),
  http.get('/api/news/published', handlePublishedNews),
  http.get('/api/collaborators', () => HttpResponse.json({ status: 200, data: teamMemberMocks })),
  http.get('/api/collaborators/requests', handleCollaboratorsRequests),
  http.post('/api/collaborators/:id/approve', handleApproveCollaborator),
  http.delete('/api/collaborators/:id', handleDeleteCollaborator),
  http.get('/api/categories', handleCategories),
  http.post('/api/categories', handleCreateCategory),
  http.delete('/api/categories/:id', handleDeleteCategory),
  http.get('/api/tags', handleTags),
  http.post('/api/news', handleCreateNews),
  http.post('/api/news/:id/publish', handleApproveNews),
  http.post('/api/news/:id/unpublish', handleUnpublishNews),
  http.post('/api/news/:id/request-review', handleRequestNewsReview),
];
