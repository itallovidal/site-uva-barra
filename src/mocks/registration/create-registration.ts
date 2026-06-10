import { HttpResponse, http } from 'msw';

import { pendingRequests } from './registration-state';

function handleCreateRegistration({ request }: { request: Request }) {
  return request.json().then(function (body: {
    name?: string;
    email?: string;
    password?: string;
    profession?: string;
    bio?: string;
  }) {
    if (body.email) {
      const existing = pendingRequests.find((req) => req.email === body.email);
      if (existing) {
        return HttpResponse.json(
          { status: 409, data: null, error: { message: 'Email já cadastrado', code: 'EMAIL_ALREADY_EXISTS' } },
          { status: 409 }
        );
      }
    }

    const newId = `req-${Date.now()}`;
    const newRequest = {
      id: newId,
      name: body.name ?? '',
      email: body.email ?? '',
      password: 'hashed-password',
      avatarUrl: null,
      role: 'collaborator' as const,
      profession: (body.profession ?? 'outro') as 'outro',
      bio: body.bio ?? null,
      status: 'pending' as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    pendingRequests.push(newRequest);

    return HttpResponse.json({ status: 201, data: { id: newId } }, { status: 201 });
  });
}

export const createRegistrationHandler = http.post('/registration', handleCreateRegistration);
