import type { NewsHighlight } from '../types/news-highlight-types';

const newsCategoryMocks: NewsHighlight[] = [
  {
    id: 'cat-1',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    category: 'Tecnologia',
    title: 'Novos avanços em inteligência artificial transformam o mercado de trabalho',
    summary:
      'Pesquisadores desenvolvem novas abordagens que prometem revolucionar a forma como interagimos com máquinas.',
    author: 'Carlos Mendes',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'cat-2',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    category: 'Tecnologia',
    title: 'Startups brasileiras se destacam em feira internacional de inovação',
    summary: 'Empresas nacionais apresentam soluções criativas em inteligência artificial e sustentabilidade.',
    author: 'Ana Oliveira',
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'cat-3',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    category: 'Tecnologia',
    title: '5G chega a mais capitais brasileiras neste mês',
    summary: 'Tecnologia de quinta geração promete internet mais rápida e estável para milhões de usuários.',
    author: 'Rafael Souza',
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'cat-4',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    category: 'Educação',
    title: 'Universidade lança programa de bolsas para estudantes de baixa renda',
    summary: 'Iniciativa busca ampliar o acesso ao ensino superior com novas oportunidades.',
    author: 'Juliana Costa',
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'cat-5',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    category: 'Educação',
    title: 'Escolas públicas adotam metodologia de ensino híbrido',
    summary: 'Modelo combina aulas presenciais e remotas para melhorar o aprendizado dos alunos.',
    author: 'Pedro Almeida',
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'cat-6',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    category: 'Saúde',
    title: 'Estudo revela benefícios da meditação para a saúde mental',
    summary:
      'Pesquisa aponta redução significativa nos níveis de estresse entre praticantes regulares.',
    author: 'Mariana Santos',
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'cat-7',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    category: 'Saúde',
    title: 'Novo tratamento promete avanços contra doenças raras',
    summary: 'Terapia genética apresenta resultados promissores em ensaios clínicos.',
    author: 'Dr. Luís Fernando',
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'cat-8',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    category: 'Inovação',
    title: 'Startup brasileira vence competição internacional de tecnologia sustentável',
    summary: 'Empresa desenvolveu solução inovadora para reciclagem de resíduos eletrônicos.',
    author: 'Fernanda Lima',
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'cat-9',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    category: 'Cultura',
    title: 'Festival de música reúne artistas de todo o país na cidade universitária',
    summary: 'Evento gratuito promete movimentar o cenário cultural local com mais de 50 atrações.',
    author: 'Lucas Pereira',
    publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
  },
];

export { newsCategoryMocks };
