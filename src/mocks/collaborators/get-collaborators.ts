import { HttpResponse, http } from 'msw';

import { teamMemberMocks } from './collaborators-state';

function handleCollaborators() {
  return HttpResponse.json({ status: 200, data: teamMemberMocks });
}

export const getCollaboratorsHandler = http.get('/collaborators', handleCollaborators);
