import { UserProfession } from '@/domain/constants';
import type { UserProfileDTO } from '@/domain/entities';

const teamMemberMocks: UserProfileDTO[] = [
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

export { teamMemberMocks };
