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

const teamMemberMocks = [
  {
    id: '1',
    name: 'Duda Nicolich',
    avatarUrl: null,
    profession: UserProfession.EDITOR_CHEFE,
    bio: 'Supervisão de Estágio',
  },
  {
    id: '2',
    name: 'Prof. Dra. Renata Feital',
    avatarUrl: null,
    profession: UserProfession.EDITOR_CHEFE,
    bio: 'Coordenação Geral',
  },
  {
    id: '3',
    name: 'Ana Clara Costa',
    avatarUrl: null,
    profession: UserProfession.REDATOR,
    bio: 'Redatora',
  },
  {
    id: '4',
    name: 'Lucas Mendes',
    avatarUrl: null,
    profession: UserProfession.REDATOR,
    bio: 'Redator',
  },
  {
    id: '5',
    name: 'Gabriel Oliveira',
    avatarUrl: null,
    profession: UserProfession.DESIGNER,
    bio: 'Designer Gráfico',
  },
  {
    id: '6',
    name: 'Marina Santos',
    avatarUrl: null,
    profession: UserProfession.SOCIAL_MEDIA,
    bio: 'Social Media',
  },
  {
    id: '7',
    name: 'Felipe Rocha',
    avatarUrl: null,
    profession: UserProfession.OUTRO,
    bio: 'Fotógrafo',
  },
  {
    id: '8',
    name: 'Itallo Ferrari',
    avatarUrl: null,
    profession: UserProfession.DESENVOLVEDOR,
    bio: 'Desenvolvedor',
  },
];

export { pendingRequests, teamMemberMocks };
