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

function handleHealthCheck() {
  return HttpResponse.json({ status: 'ok' });
}

function handleNewsLatest() {
  return HttpResponse.json(newsHighlightMocks);
}

function handleNewsByCategory({ request }: { request: Request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const limit = Number(url.searchParams.get('limit')) || 3;

  const filtered = category
    ? newsCategoryMocks.filter((item) => item.categoryName.toLowerCase() === category.toLowerCase())
    : newsCategoryMocks;

  return HttpResponse.json(filtered.slice(0, limit));
}

function handleCollaboratorsRequests() {
  return HttpResponse.json(pendingRequests);
}

function handleApproveCollaborator({ params }: { params: Record<string, string> }) {
  const { id } = params;
  const index = pendingRequests.findIndex((user) => user.id === id);

  if (index === -1) {
    return HttpResponse.json({ error: 'Solicitação não encontrada' }, { status: 404 });
  }

  const [approved] = pendingRequests.splice(index, 1);
  teamMemberMocks.push({
    id: approved.id,
    name: approved.name,
    avatarUrl: approved.avatarUrl ?? null,
    profession: approved.profession,
    bio: approved.bio ?? null,
  });

  return HttpResponse.json({ success: true });
}

function handleDeleteCollaborator({ params }: { params: Record<string, string> }) {
  const { id } = params;
  const index = pendingRequests.findIndex((user) => user.id === id);

  if (index === -1) {
    return HttpResponse.json({ error: 'Solicitação não encontrada' }, { status: 404 });
  }

  pendingRequests.splice(index, 1);
  return HttpResponse.json({ success: true });
}

function handleCategories() {
  return HttpResponse.json(categoriesMock);
}

function handleTags() {
  return HttpResponse.json(tagsMock);
}

function handleCreateNews() {
  return HttpResponse.json({ success: true, id: crypto.randomUUID() }, { status: 201 });
}

function handlePendingNews() {
  return HttpResponse.json(pendingNews);
}

function handleApproveNews({ params }: { params: PathParams }) {
  const id = typeof params.id === 'string' ? params.id : '';
  const index = pendingNews.findIndex((news) => news.id === id);

  if (index === -1) {
    return HttpResponse.json({ error: 'Notícia não encontrada' }, { status: 404 });
  }

  const [approved] = pendingNews.splice(index, 1);
  publishedNews.unshift({
    ...approved,
    status: NewsStatus.PUBLISHED,
    publishedAt: new Date(),
  });
  return HttpResponse.json({ success: true });
}

function handlePublishedNews() {
  return HttpResponse.json(publishedNews);
}

function handleUnpublishNews({ params }: { params: PathParams }) {
  const id = typeof params.id === 'string' ? params.id : '';
  const index = publishedNews.findIndex((news) => news.id === id);

  if (index === -1) {
    return HttpResponse.json({ error: 'Artigo não encontrado' }, { status: 404 });
  }

  publishedNews.splice(index, 1);
  return HttpResponse.json({ success: true });
}

function handleRequestNewsReview({ params, request }: { params: PathParams; request: Request }) {
  const id = typeof params.id === 'string' ? params.id : '';
  const index = pendingNews.findIndex((news) => news.id === id);

  if (index === -1) {
    return HttpResponse.json({ error: 'Notícia não encontrada' }, { status: 404 });
  }

  return request
    .json()
    .then((body: { comment?: string }) => {
      if (!body.comment || !body.comment.trim()) {
        return HttpResponse.json({ error: 'Comentário obrigatório' }, { status: 400 });
      }

      pendingNews.splice(index, 1);
      return HttpResponse.json({ success: true });
    });
}

export const handlers = [
  http.get('/api/health', handleHealthCheck),
  http.get('/api/news/latest', handleNewsLatest),
  http.get('/api/news', handleNewsByCategory),
  http.get('/api/news/pending', handlePendingNews),
  http.get('/api/news/published', handlePublishedNews),
  http.get('/api/collaborators', () => HttpResponse.json(teamMemberMocks)),
  http.get('/api/collaborators/requests', handleCollaboratorsRequests),
  http.post('/api/collaborators/:id/approve', handleApproveCollaborator),
  http.delete('/api/collaborators/:id', handleDeleteCollaborator),
  http.get('/api/categories', handleCategories),
  http.get('/api/tags', handleTags),
  http.post('/api/news', handleCreateNews),
  http.post('/api/news/:id/publish', handleApproveNews),
  http.post('/api/news/:id/unpublish', handleUnpublishNews),
  http.post('/api/news/:id/request-review', handleRequestNewsReview),
];
