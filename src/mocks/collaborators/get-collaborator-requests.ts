import { HttpResponse, http } from 'msw';

import { pendingRequests } from './collaborators-state';

function handleCollaboratorsRequests() {
  return HttpResponse.json({ status: 200, data: pendingRequests });
}

export const getCollaboratorRequestsHandler = http.get('/api/collaborators/requests', handleCollaboratorsRequests);
