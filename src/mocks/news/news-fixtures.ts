const publishedNewsExample = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  title: 'Título da Notícia',
  slug: 'titulo-da-noticia',
  summary: 'Resumo curto do artigo',
  content: 'Conteúdo completo do artigo...',
  coverImageUrl: 'https://exemplo.com/capa.jpg',
  category: 'tecnologia',
  author: 'Nome do Autor',
  status: 'published',
  tags: ['tag1', 'tag2'],
  featured: false,
  readingTime: 3,
  createdAt: '2026-06-04T10:00:00.000Z',
  updatedAt: '2026-06-04T10:00:00.000Z',
  publishedAt: '2026-06-04T12:00:00.000Z',
};

const draftNewsExample = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  title: 'Título da Notícia',
  slug: 'titulo-da-noticia',
  summary: 'Resumo curto do artigo',
  content: 'Conteúdo completo do artigo...',
  coverImageUrl: 'https://exemplo.com/capa.jpg',
  category: 'tecnologia',
  author: 'Nome do Autor',
  status: 'draft',
  tags: ['tag1', 'tag2'],
  featured: false,
  readingTime: 3,
  createdAt: '2026-06-04T10:00:00.000Z',
  updatedAt: '2026-06-04T10:00:00.000Z',
  publishedAt: null,
};

const latestNewsExample = [
  {
    id: '3f6494ec-6366-43af-8572-440f07c4bf8f',
    title:
      '‘Zico, O Samurai de Quintino’ leva aos cinemas uma abordagem inédita sobre a trajetória do ídolo rubro-negro',
    summary:
      'Documentário acompanha a caminhada de Zico, da infância em Quintino à consagração como símbolo do Flamengo e referência mundial no esporte',
    coverImageUrl:
      'https://i0.wp.com/agenciauvabarra.com/wp-content/uploads/2026/05/capa-do-filme.jpg?fit=3864%2C5674&ssl=1',
    category: 'Cultura & Artes',
    tags: [
      'agencia uva barra',
      'agencia uva barra assistiu',
      'cinema',
      'critica 2',
      'filme',
      'universidade veiga de almeida',
      'uva barra',
    ],
    featured: false,
    readingTime: 3,
    publishedAt: '2026-06-04T03:02:25.983Z',
    authorName: 'Agência UVA - Barra',
  },
  {
    id: '20d778fd-5d82-4ee3-af1e-0543676f7b13',
    title:
      'XVII SEMANA JURÍDICA & IV SEMINÁRIO DE PESQUISA CIENTÍFICA NO CURSO DE DIREITO NA UNIVERSIDADE VEIGA DE ALMEIDA',
    summary:
      'O evento de Direito reuniu profissionais e acadêmicos para discutir temas na área de Direito A XVII Semana Jurídica e o IV Seminário de Pesquisa Científica do curso de Direito, realizados no Campus Barra, ocorreram entre segunda-feira, dia 17, e quinta-feira, dia 20. O evento reuniu profissionais e acadêmicos para a apresentação de pesquisas e […]',
    coverImageUrl: '',
    category: 'Institucional',
    tags: [],
    featured: false,
    readingTime: 6,
    publishedAt: '2026-06-04T03:02:25.146Z',
    authorName: 'Agência UVA - Barra',
  },
  {
    id: 'bd1c494b-ae38-4ad0-a0db-7509dad20753',
    title:
      'XVI semana jurídica e II seminário de pesquisa foram destaques na última semana no Campus Barra',
    summary:
      'Entre os dias 7/11 e 10/11, aconteceu no Campus Barra a XVI Semana Jurídica e II Seminário de Pesquisa, organizado pelo curso de Direito da Universidade Veiga de Almeida. O evento contou com diversas palestras de profissionais do mercado, Júri simulado, oficina e apresentação de trabalhos acadêmicos.',
    coverImageUrl:
      'https://i0.wp.com/agenciauvabarra.com/wp-content/uploads/2022/11/foto-de-capa.jpeg?fit=1600%2C1200&ssl=1',
    category: 'Política & Economia',
    tags: ['agencia uva barra', 'direito', 'evento', 'pesquisa', 'semanajuridica', 'uva'],
    featured: false,
    readingTime: 4,
    publishedAt: '2026-06-04T03:02:24.314Z',
    authorName: 'Agência UVA - Barra',
  },
  {
    id: '54ce56c3-86ae-400b-9308-610f612973bb',
    title: 'XVI Luta antimanicomial promove debates virtualmente',
    summary:
      'O evento contou com mais de dez horas de atividades que discutiram o papel da arte e as políticas públicas na área de psicologia e psiquiatria Debates, artes e informação. Há dezesseis anos a Universidade Veiga de Almeida abre um diálogo acadêmico sobre a Luta Antimanicomial. A 16ª edição do evento ganhou novo formato por […]',
    coverImageUrl:
      'https://i0.wp.com/agenciauvabarra.com/wp-content/uploads/2020/05/luta-foto-1.png?fit=1366%2C768&ssl=1',
    category: 'Institucional',
    tags: ['psicologia', 'universidade veiga de almeida', 'uva barra', 'xvi luta antimanicomial'],
    featured: false,
    readingTime: 4,
    publishedAt: '2026-06-04T03:02:23.473Z',
    authorName: 'Agência UVA - Barra',
  },
  {
    id: 'adafa384-7533-4157-bf67-39defea57064',
    title:
      'XIX Encontro do Mestrado, XII Encontro do Doutorado em Psicanálise, Saúde e Sociedade, marcou o último dia da Semana da Psicologia',
    summary:
      'Na sexta-feira, 09/09, ocorreu o último dia da Semana da Psicologia no campus UVA Barra com o encontro do Mestrado e Doutorado em Psicanálise. A conferência contou com a presença de diversos profissionais da área.',
    coverImageUrl:
      'https://i0.wp.com/agenciauvabarra.com/wp-content/uploads/2022/09/whatsapp-image-2022-09-13-at-11.25.32.jpeg?fit=1600%2C1200&ssl=1',
    category: 'Institucional',
    tags: ['universidade veiga de almeida'],
    featured: false,
    readingTime: 3,
    publishedAt: '2026-06-04T03:02:22.636Z',
    authorName: 'Agência UVA - Barra',
  },
  {
    id: '482f279c-dcb2-450f-82bb-d4b60c2c000c',
    title: 'XIX Bienal do Livro promove espetáculo cheio de cores e poesia',
    summary:
      'Atração faz parte da programação do espaço infantil O pavilhão laranja, pela primeira vez com programação destinada somente ao público infantil, tem como atração principal uma floresta mágica chamada: Pela Estrada A Fora. Entre lançamentos de livros e contação de histórias, a floresta oferece apresentações do grupo Lona na Lua. O grupo criado há dez […]',
    coverImageUrl:
      'https://i0.wp.com/agenciauvabarra.com/wp-content/uploads/2019/09/20190903_171520.jpg?fit=4608%2C2240&ssl=1',
    category: 'Cultura & Artes',
    tags: ['agencia uva barra', 'bienal do livro 2019', 'lona na lua', 'riocentro'],
    featured: false,
    readingTime: 2,
    publishedAt: '2026-06-04T03:02:21.804Z',
    authorName: 'Agência UVA - Barra',
  },
  {
    id: 'a7985dcb-e8da-4864-90dc-f61281fdbd4a',
    title: 'Workshop da SeCom aborda os diversos tipos e aplicações de drones',
    summary:
      'Os alunos puderam conhecer, tirar dúvidas e se aproximar da tecnologia Na última sexta-feira (17), a SeCom promoveu o workshop “A tecnologia dos drones”, que apresentou aos alunos uma nova perspectiva sobre o uso dos veículos aéreos não tripulados e seus diversos tipos e aplicações. O workshop foi ministrado pelo professor e especialista em drones […]',
    coverImageUrl:
      'https://i0.wp.com/agenciauvabarra.com/wp-content/uploads/2019/05/6.jpg?fit=5184%2C3456&ssl=1',
    category: 'Institucional',
    tags: ['agencia uva barra', 'drones', 'secom', 'uva barra'],
    featured: false,
    readingTime: 2,
    publishedAt: '2026-06-04T03:02:20.972Z',
    authorName: 'Agência UVA - Barra',
  },
  {
    id: '065802c7-c743-4945-9bc5-4bad82b1cf15',
    title: '“Wicked: Parte 2” revisita Oz em nova perspectiva e encerra saga com grandiosidade',
    summary:
      'As interpretações de Cynthia Erivo e Ariana Grande seguem como um dos destaques da produção.',
    coverImageUrl:
      'https://i0.wp.com/agenciauvabarra.com/wp-content/uploads/2025/11/wicked-ariana-cynthia.webp?fit=1200%2C675&ssl=1',
    category: 'Cultura & Artes',
    tags: [
      'agencia uva barra',
      'agencia uva barra assistiu',
      'cinema',
      'universidade veiga de almeida',
      'uva barra',
    ],
    featured: false,
    readingTime: 2,
    publishedAt: '2026-06-04T03:02:20.136Z',
    authorName: 'Agência UVA - Barra',
  },
  {
    id: 'daf89efa-e864-48e7-b5a8-a9d548caebfe',
    title: 'Voz multiplicada: a força da representatividade',
    summary:
      '2º Ato em protesto aos assassinatos da vereadora Marielle Franco e do motorista Anderson Gomes reúne centenas de manifestantes no centro do Rio',
    coverImageUrl: '',
    category: 'Sociedade & Comportamento',
    tags: [],
    featured: false,
    readingTime: 3,
    publishedAt: '2026-06-04T03:02:19.298Z',
    authorName: 'Agência UVA - Barra',
  },
  {
    id: 'f2aba235-56aa-4c86-a6c0-41fe84d5330d',
    title: 'Vontades X Obrigações',
    summary: 'Os dilemas da Geração Z em escolher entre o que deseja e o que esperam dela',
    coverImageUrl:
      'https://i0.wp.com/agenciauvabarra.com/wp-content/uploads/2017/06/2017-05-28-03-44-49-1.jpg?fit=2401%2C1972&ssl=1',
    category: 'Sociedade & Comportamento',
    tags: [],
    featured: false,
    readingTime: 7,
    publishedAt: '2026-06-04T03:02:18.463Z',
    authorName: 'Agência UVA - Barra',
  },
];

const latestNewsMeta = {
  page: 1,
  perPage: 10,
  total: 42,
  totalPages: 5,
};

export { draftNewsExample, latestNewsExample, latestNewsMeta, publishedNewsExample };
