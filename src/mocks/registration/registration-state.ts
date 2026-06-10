import { UserProfession, UserRole, UserStatus } from '@/domain/constants';

const pendingRequests = [
  {
    id: 'req-1',
    name: 'Carlos Almeida',
    email: 'carlos.almeida@email.com',
    password: 'hashed-password',
    avatarUrl: null,
    role: UserRole.COLLABORATOR,
    profession: UserProfession.REDATOR,
    bio: 'Jornalista formado pela UFF',
    status: UserStatus.PENDING,
    createdAt: new Date('2026-05-20'),
    updatedAt: new Date('2026-05-20'),
  },
  {
    id: 'req-2',
    name: 'Juliana Costa',
    email: 'juliana.costa@email.com',
    password: 'hashed-password',
    avatarUrl: null,
    role: UserRole.COLLABORATOR,
    profession: UserProfession.DESIGNER,
    bio: 'Designer gráfica especializada em branding',
    status: UserStatus.PENDING,
    createdAt: new Date('2026-05-22'),
    updatedAt: new Date('2026-05-22'),
  },
  {
    id: 'req-3',
    name: 'Rafael Oliveira',
    email: 'rafael.oliveira@email.com',
    password: 'hashed-password',
    avatarUrl: null,
    role: UserRole.COLLABORATOR,
    profession: UserProfession.DESENVOLVEDOR,
    bio: 'Desenvolvedor full-stack',
    status: UserStatus.PENDING,
    createdAt: new Date('2026-05-25'),
    updatedAt: new Date('2026-05-25'),
  },
];

export { pendingRequests };
