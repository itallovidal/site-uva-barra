import { NewsStatus } from '@/domain/constants';
import type { AdminNewsCardDTO } from '@/domain/entities';

const newsPublishedMocks: AdminNewsCardDTO[] = [
  {
    id: 'news-published-1',
    title: 'Festival de música reúne artistas de todo o país na cidade universitária',
    summary:
      'Evento gratuito promete movimentar o cenário cultural local com mais de 50 atrações.',
    content:
      '# Festival de música\n\nEvento gratuito promete movimentar o cenário cultural local com mais de 50 atrações.\n\n## Programação\n\n- Palco principal\n- Ações de extensão\n- Atividades culturais em paralelo',
    coverImageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    categoryName: 'Cultura',
    authorName: 'Lucas Pereira',
    status: NewsStatus.PUBLISHED,
    updatedAt: new Date('2026-05-29T11:00:00.000Z'),
    publishedAt: new Date('2026-05-29T10:30:00.000Z'),
  },
  {
    id: 'news-published-2',
    title: 'Estudo revela benefícios da meditação para a saúde mental',
    summary:
      'Pesquisa aponta redução significativa nos níveis de estresse entre praticantes regulares.',
    content:
      '# Estudo sobre meditação\n\nPesquisa aponta redução significativa nos níveis de estresse entre praticantes regulares.\n\n## Resultados\n\n- Melhora da concentração\n- Redução de estresse\n- Qualidade de sono melhorada',
    coverImageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    categoryName: 'Saúde',
    authorName: 'Mariana Santos',
    status: NewsStatus.PUBLISHED,
    updatedAt: new Date('2026-05-29T09:45:00.000Z'),
    publishedAt: new Date('2026-05-29T09:00:00.000Z'),
  },
  {
    id: 'news-published-3',
    title: 'Universidade lança programa de bolsas para estudantes de baixa renda',
    summary: 'Iniciativa busca ampliar o acesso ao ensino superior com novas oportunidades.',
    content:
      '# Programa de bolsas\n\nIniciativa busca ampliar o acesso ao ensino superior com novas oportunidades.\n\n## Critérios\n\n- Renda familiar\n- Desempenho acadêmico\n- Entrevista com a coordenação',
    coverImageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    categoryName: 'Educação',
    authorName: 'Juliana Costa',
    status: NewsStatus.PUBLISHED,
    updatedAt: new Date('2026-05-29T08:20:00.000Z'),
    publishedAt: new Date('2026-05-29T08:00:00.000Z'),
  },
];

export { newsPublishedMocks };
