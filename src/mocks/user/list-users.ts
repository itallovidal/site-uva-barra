import { HttpResponse, http } from 'msw';

import { teamMemberMocks } from '../collaborators/collaborators-state';

function handleListUsers() {
  return HttpResponse.json({ status: 200, data: teamMemberMocks });
}

export const listUsersHandler = http.get('/user/list', handleListUsers);

