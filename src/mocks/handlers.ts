import { http, HttpResponse } from 'msw';
import { newsHighlightMocks } from './news-highlight-mocks';
import { newsCategoryMocks } from './news-category-mocks';
import { teamMemberMocks } from './team-members-mocks';
import { collaboratorRequestMocks } from './collaborator-requests-mocks';

const pendingRequests = [...collaboratorRequestMocks];

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
    avatarUrl: approved.avatarUrl,
    profession: approved.profession,
    bio: approved.bio,
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

export const handlers = [
  http.get('/api/health', handleHealthCheck),
  http.get('/api/news/latest', handleNewsLatest),
  http.get('/api/news', handleNewsByCategory),
  http.get('/api/collaborators', () => HttpResponse.json(teamMemberMocks)),
  http.get('/api/collaborators/requests', handleCollaboratorsRequests),
  http.post('/api/collaborators/:id/approve', handleApproveCollaborator),
  http.delete('/api/collaborators/:id', handleDeleteCollaborator),
];
