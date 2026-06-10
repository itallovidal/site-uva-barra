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
    author: 'Agência UVA - Barra',
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
    author: 'Agência UVA - Barra',
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
    author: 'Agência UVA - Barra',
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
    author: 'Agência UVA - Barra',
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
    author: 'Agência UVA - Barra',
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
    author: 'Agência UVA - Barra',
  },
  {
    id: 'a7985dcb-e8da-4864-90dc-f61281fdbd4a',
    title: 'Workshop da SeCom aborda os diversos tipos e aplicações de drones',
    summary:
      'Os alunos puderam conhecer, tirar dúvidas e se aproximar da tecnologia Na última sexta-feira (17), a SeCom promoveu o workshop "A tecnologia dos drones", que apresentou aos alunos uma nova perspectiva sobre o uso dos veículos aéreos não tripulados e seus diversos tipos e aplicações. O workshop foi ministrado pelo professor e especialista em drones […]',
    coverImageUrl:
      'https://i0.wp.com/agenciauvabarra.com/wp-content/uploads/2019/05/6.jpg?fit=5184%2C3456&ssl=1',
    category: 'Institucional',
    tags: ['agencia uva barra', 'drones', 'secom', 'uva barra'],
    featured: false,
    readingTime: 2,
    publishedAt: '2026-06-04T03:02:20.972Z',
    author: 'Agência UVA - Barra',
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
    author: 'Agência UVA - Barra',
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
    author: 'Agência UVA - Barra',
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
    author: 'Agência UVA - Barra',
  },
];

const unpublishedNewsExamples = [
  {
    id: 'unpub-001-aaaa-bbbb-cccc-ddddeeee0001',
    title: 'Novo laboratório de IoT será inaugurado no campus Barra',
    summary:
      'O espaço contará com equipamentos de ponta para pesquisa em Internet das Coisas, robótica e automação.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    category: 'Institucional',
    tags: ['iot', 'tecnologia', 'laboratório', 'pesquisa'],
    featured: false,
    readingTime: 4,
    publishedAt: null,
    author: 'Agência UVA - Barra',
    status: 'review',
    content:
      '# Novo laboratório de IoT\n\nA Universidade Veiga de Almeida anuncia a inauguração de um novo laboratório dedicado à Internet das Coisas (IoT) no Campus Barra.\n\n## Equipamentos\n\n- Sensores inteligentes\n- Microcontroladores Arduino e ESP32\n- Impressoras 3D\n- Estações de trabalho com softwares de simulação\n\nO laboratório estará disponível para alunos dos cursos de Engenharia, Ciência da Computação e áreas afins a partir do próximo semestre.',
    createdAt: '2026-06-08T14:30:00.000Z',
    updatedAt: '2026-06-09T09:15:00.000Z',
  },
  {
    id: 'unpub-002-aaaa-bbbb-cccc-ddddeeee0002',
    title: 'Programa de monitoria abre inscrições para o segundo semestre',
    summary:
      'Estudantes de todos os cursos podem se candidatar às vagas de monitoria acadêmica até o dia 30 de junho.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    category: 'Educação',
    tags: ['monitoria', 'bolsas', 'acadêmico'],
    featured: false,
    readingTime: 3,
    publishedAt: null,
    author: 'Agência UVA - Barra',
    status: 'draft',
    content:
      '# Programa de Monitoria\n\nEstão abertas as inscrições para o programa de monitoria do segundo semestre de 2026.\n\n## Requisitos\n\n- Estar matriculado em curso de graduação\n- Ter disponibilidade de 12h semanais\n- Não estar cursando a disciplina para a qual se candidata\n\nAs inscrições devem ser realizadas pelo portal do aluno até 30/06.',
    createdAt: '2026-06-07T10:00:00.000Z',
    updatedAt: '2026-06-07T10:00:00.000Z',
  },
  {
    id: 'unpub-003-aaaa-bbbb-cccc-ddddeeee0003',
    title: 'II Seminário de Empreendedorismo Universitário acontece em agosto',
    summary:
      'Evento reunirá empreendedores, investidores e acadêmicos para debater inovação e negócios de impacto social.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1559136555-930d6f4c3e1c?w=800&q=80',
    category: 'Política & Economia',
    tags: ['empreendedorismo', 'inovação', 'seminário'],
    featured: false,
    readingTime: 5,
    publishedAt: null,
    author: 'Agência UVA - Barra',
    status: 'review',
    content:
      '# II Seminário de Empreendedorismo Universitário\n\nO evento acontecerá nos dias 14 e 15 de agosto no auditório do Campus Barra.\n\n## Programação\n\n**Dia 1**\n- Palestra: "Inovação como diferencial competitivo"\n- Mesa redonda: "Startups universitárias"\n- Workshop: "Do pitch ao negócio"\n\n**Dia 2**\n- Feira de estágios e empregos\n- Hackathon: soluções para cidades inteligentes\n\nAs inscrições são gratuitas e abertas a toda comunidade acadêmica.',
    createdAt: '2026-06-06T16:45:00.000Z',
    updatedAt: '2026-06-09T11:30:00.000Z',
  },
  {
    id: 'unpub-004-aaaa-bbbb-cccc-ddddeeee0004',
    title: 'Alunos de Arquitetura vencem concurso nacional de design sustentável',
    summary:
      'Projeto de revitalização de praça pública utilizando materiais recicláveis conquistou o primeiro lugar.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1613545325267-1f0c6b8e7d7c?w=800&q=80',
    category: 'Cultura & Artes',
    tags: ['arquitetura', 'design', 'sustentabilidade', 'premiação'],
    featured: true,
    readingTime: 4,
    publishedAt: null,
    author: 'Agência UVA - Barra',
    status: 'draft',
    content:
      '# Alunos de Arquitetura vencem concurso nacional\n\nUm grupo de cinco alunos do curso de Arquitetura e Urbanismo da UVA Barra conquistou o primeiro lugar no Concurso Nacional de Design Sustentável 2026.\n\n## O projeto\n\nO projeto vencedor propõe a revitalização de uma praça no bairro da Lapa, Rio de Janeiro, utilizando exclusivamente materiais recicláveis e de baixo impacto ambiental.\n\n**Diferenciais do projeto:**\n- Uso de PET reciclado em mobiliário urbano\n- Sistemas de captação de água da chuva\n- Iluminação com energia solar\n- Jardins verticais com espécies nativas\n\nA premiação será entregue em cerimônia no próximo mês.',
    createdAt: '2026-06-05T08:00:00.000Z',
    updatedAt: '2026-06-05T08:00:00.000Z',
  },
  {
    id: 'unpub-005-aaaa-bbbb-cccc-ddddeeee0005',
    title: 'Pesquisa sobre células-tronco recebe financiamento internacional',
    summary:
      'Estudo coordenado por professores da UVA Barra investiga novas terapias para doenças degenerativas.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    category: 'Institucional',
    tags: ['pesquisa', 'células-tronco', 'medicina', 'financiamento'],
    featured: false,
    readingTime: 6,
    publishedAt: null,
    author: 'Agência UVA - Barra',
    status: 'review',
    content:
      '# Pesquisa sobre células-tronco recebe financiamento internacional\n\nO projeto de pesquisa coordenado pelos professores Dr. Carlos Mendes e Dra. Ana Oliveira, do curso de Biomedicina, foi contemplado com uma bolsa de pesquisa do Instituto Nacional de Saúde dos Estados Unidos (NIH).\n\n## Sobre a pesquisa\n\nO estudo investiga o uso de células-tronco mesenquimais para regeneração de tecido cardíaco em pacientes com insuficiência cardíaca.\n\nA pesquisa terá duração de três anos e envolverá alunos de iniciação científica da UVA Barra.',
    createdAt: '2026-06-04T20:15:00.000Z',
    updatedAt: '2026-06-09T14:00:00.000Z',
  },
  {
    id: 'unpub-006-aaaa-bbbb-cccc-ddddeeee0006',
    title: 'Cineclube UVA exibe mostra de cinema latino-americano em julho',
    summary:
      'Sessões gratuitas acontecerão todas as quintas-feiras com filmes de diretores argentinos, chilenos e colombianos.',
    coverImageUrl:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    category: 'Cultura & Artes',
    tags: ['cineclube', 'cinema', 'latino-americano', 'cultura'],
    featured: false,
    readingTime: 3,
    publishedAt: null,
    author: 'Agência UVA - Barra',
    status: 'draft',
    content:
      '# Cineclube UVA exibe mostra de cinema latino-americano\n\nO Cineclube UVA Barra apresenta em julho a mostra "Olhares Latino-Americanos", com filmes de diretores argentinos, chilenos e colombianos.\n\n## Programação\n\n| Data | Filme | País |\n| --- | --- | --- |\n| 03/07 | Relatos Salvajes | Argentina |\n| 10/07 | Una Mujer Fantástica | Chile |\n| 17/07 | Los Colores de la Montaña | Colômbia |\n| 24/07 | El Secreto de sus Ojos | Argentina |\n\nTodas as sessões são gratuitas e abertas ao público, com início às 18h no auditório do campus.',
    createdAt: '2026-06-03T12:00:00.000Z',
    updatedAt: '2026-06-08T10:30:00.000Z',
  },
];

const latestNewsMeta = {
  page: 1,
  perPage: 10,
  total: 42,
  totalPages: 5,
};

const newsDetailFixture = {
  id: '3f6494ec-6366-43af-8572-440f07c4bf8f',
  title:
    "'Zico, O Samurai de Quintino' leva aos cinemas uma abordagem inédita sobre a trajetória do ídolo rubro-negro",
  slug: 'zico-o-samurai-de-quintino',
  summary:
    'Documentário acompanha a caminhada de Zico, da infância em Quintino à consagração como símbolo do Flamengo e referência mundial no esporte.',
  content: `# Zico, O Samurai de Quintino

**Gênero:** Documentário | **Duração:** 98 min | **Direção:** Ale McHaddo

---

## Sinopse

O documentário mergulha na trajetória singular de **Arthur Antunes Coimbra**, o Zico, desde os campos de várzea do bairro de Quintino, no Rio de Janeiro, até os palcos mais grandiosos do futebol mundial. Com depoimentos exclusivos, imagens de arquivo raras e entrevistas com ex-companheiros, treinadores e familiares, o filme reconstrói a vida de um dos maiores jogadores de todos os tempos.

## Destaques da Produção

- Depoimentos inéditos do próprio Zico sobre sua infância humilde
- Imagens restauradas de partidas históricas pelo Flamengo e pela Seleção Brasileira
- Relatos emocionantes da Copa do Mundo de 1982, considerada uma das mais belas seleções da história

## Crítica

A produção equilibra habilidade e emoção ao narrar os altos e baixos de uma carreira que transcendeu o futebol. A edição é precisa e o ritmo mantém o espectador preso do início ao fim.

> "Zico não foi apenas um jogador. Ele foi um modo de ver o futebol." — Depoimento de ex-companheiro no filme

## Conclusão

*Zico, O Samurai de Quintino* é leitura obrigatória para qualquer aficionado pelo futebol brasileiro. Um retrato humano, honesto e apaixonante de um ídolo eterno.

---

*Texto: Agência UVA Barra*
`,
  coverImageUrl: '/agencia-uva-fallback.jpg',
  category: 'Cultura & Artes',
  author: 'Agência UVA Barra',
  status: 'published',
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
  createdAt: '2026-06-04T10:00:00.000Z',
  updatedAt: '2026-06-04T10:00:00.000Z',
  publishedAt: '2026-06-04T03:02:25.983Z',
};

export {
  draftNewsExample,
  latestNewsExample,
  latestNewsMeta,
  newsDetailFixture,
  publishedNewsExample,
  unpublishedNewsExamples,
};
