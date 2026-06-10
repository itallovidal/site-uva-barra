import { z } from 'zod';
import { NewsStatus } from '@/domain/constants';

const newsSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  summary: z.string().min(1, 'Resumo é obrigatório'),
  content: z.string().min(1, 'Conteúdo é obrigatório'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  tags: z.array(z.string()),
  coverImageUrl: z.string().optional(),
  status: z
    .enum([
      NewsStatus.DRAFT,
      NewsStatus.REVIEW,
      NewsStatus.PUBLISHED,
      NewsStatus.ARCHIVED,
    ])
    .default(NewsStatus.DRAFT),
  featured: z.boolean().default(false),
  author: z.string().min(1, 'Autor é obrigatório'),
  publishedAt: z.string().datetime().nullable().optional(),
});

type NewsFormData = z.infer<typeof newsSchema>;

export { newsSchema, type NewsFormData };
