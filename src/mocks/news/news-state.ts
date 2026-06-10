import { NewsStatus } from '@/domain/constants';

import { latestNewsExample, publishedNewsExample } from './news-fixtures';

const pendingNews = [
  {
    id: 'news-pending-1',
    title: 'Nova campanha cultural será lançada na próxima semana',
    summary:
      'A equipe de comunicação preparou uma ação voltada para a divulgação dos eventos de maio.',
    content:
      '# Nova campanha cultural\n\nA equipe de comunicação preparou uma ação voltada para a divulgação dos eventos de maio.\n\n## Destaques\n\n- Lançamento na próxima semana\n- Programação com atividades ao ar livre\n- Apoio de parceiros locais\n\nPara saber mais, visite o portal oficial.',
    coverImageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    category: 'Cultura',
    author: 'Fernanda Lima',
    status: NewsStatus.REVIEW,
    updatedAt: new Date('2026-05-28T10:00:00.000Z'),
  },
  {
    id: 'news-pending-2',
    title: 'Projeto de extensão abre inscrições para novos participantes',
    summary:
      'Os estudantes poderão se inscrever até o fim do mês para integrar a nova edição do projeto.',
    content:
      '# Projeto de extensão\n\nAs inscrições estão abertas para estudantes interessados em participar da nova edição.\n\n| Etapa | Prazo |\n| --- | --- |\n| Inscrição | Até 31/05 |\n| Seleção | 01/06 a 03/06 |\n| Resultado | 05/06 |',
    coverImageUrl: null,
    category: 'Educação',
    author: 'Rafael Souza',
    status: NewsStatus.DRAFT,
    updatedAt: new Date('2026-05-29T08:30:00.000Z'),
  },
];

const publishedNews = [publishedNewsExample];
const newsHighlightMocks = [latestNewsExample];
const newsCategoryMocks = [latestNewsExample];

export { NewsStatus, newsHighlightMocks, newsCategoryMocks, pendingNews, publishedNews };
