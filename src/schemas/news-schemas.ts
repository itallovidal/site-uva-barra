import { z } from 'zod';
import { NewsStatus } from '@/domain/constants';

const newsSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  summary: z.string().min(1, 'Resumo é obrigatório'),
  content: z.string().min(1, 'Conteúdo é obrigatório'),
  categoryId: z.string().min(1, 'Categoria é obrigatória'),
  tagIds: z.array(z.string()),
  coverImageUrl: z.string().nullable().optional(),
  status: z
    .enum([NewsStatus.DRAFT, NewsStatus.REVIEW])
    .default(NewsStatus.DRAFT),
  featured: z.boolean().default(false),
  readingTime: z.number().nullable().optional(),
});

type NewsFormData = z.infer<typeof newsSchema>;

export { newsSchema, type NewsFormData };
