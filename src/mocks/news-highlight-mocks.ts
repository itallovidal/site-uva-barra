import type { NewsHighlight } from '../types/news-highlight-types';

const newsHighlightMocks: NewsHighlight[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    category: 'Tecnologia',
    title: 'Novos avanços em inteligência artificial transformam o mercado de trabalho',
    summary:
      'Pesquisadores desenvolvem novas abordagens que prometem revolucionar a forma como interagimos com máquinas.',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    category: 'Educação',
    title: 'Universidade lança programa de bolsas para estudantes de baixa renda',
    summary: 'Iniciativa busca ampliar o acesso ao ensino superior com novas oportunidades.',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    category: 'Ciência',
    title: 'Missão espacial brasileira alcança novos marcos na pesquisa orbital',
    summary: 'Satélite desenvolvido por cientistas brasileiros entra em operação com sucesso.',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    category: 'Saúde',
    title: 'Estudo revela benefícios da meditação para a saúde mental',
    summary:
      'Pesquisa aponta redução significativa nos níveis de estresse entre praticantes regulares.',
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    category: 'Inovação',
    title: 'Startup brasileira vence competição internacional de tecnologia sustentável',
    summary: 'Empresa desenvolveu solução inovadora para reciclagem de resíduos eletrônicos.',
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    category: 'Cultura',
    title: 'Festival de música reúne artistas de todo o país na cidade universitária',
    summary: 'Evento gratuito promete movimentar o cenário cultural local com mais de 50 atrações.',
  },
];

export { newsHighlightMocks };
