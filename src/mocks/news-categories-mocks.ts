import type { Category } from '@/domain/entities';

const categoriesMock: Category[] = [
  { id: 'cat_tec', name: 'Tecnologia', description: null, createdAt: new Date('2026-01-01') },
  { id: 'cat_edu', name: 'Educação', description: null, createdAt: new Date('2026-01-01') },
  { id: 'cat_sau', name: 'Saúde', description: null, createdAt: new Date('2026-01-01') },
  { id: 'cat_inov', name: 'Inovação', description: null, createdAt: new Date('2026-01-01') },
  { id: 'cat_cul', name: 'Cultura', description: null, createdAt: new Date('2026-01-01') },
];

export { categoriesMock };
