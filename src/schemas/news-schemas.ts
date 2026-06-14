import { z } from 'zod';
import { NewsStatus } from '@/domain/constants';

const newsSchema = z.object({
  title: z
    .string()
    .min(5, 'Título deve ter pelo menos 5 caracteres')
    .max(200, 'Título deve ter no máximo 200 caracteres'),
  summary: z
    .string()
    .min(10, 'Resumo deve ter pelo menos 10 caracteres')
    .max(500, 'Resumo deve ter no máximo 500 caracteres'),
  content: z
    .string()
    .min(50, 'Conteúdo deve ter pelo menos 50 caracteres'),
  category: z
    .string()
    .min(1, 'Categoria é obrigatória')
    .max(100, 'Categoria deve ter no máximo 100 caracteres'),
  tags: z
    .array(
      z
        .string()
        .min(1, 'Tag não pode ser vazia')
        .max(50, 'Tag deve ter no máximo 50 caracteres')
    )
    .max(10, 'Máximo de 10 tags permitidas'),
  coverImageUrl: z
    .string()
    .url('URL da imagem de capa deve ser válida')
    .optional()
    .or(z.literal('')),
  status: z
    .enum([
      NewsStatus.DRAFT,
      NewsStatus.REVIEW,
      NewsStatus.PUBLISHED,
      NewsStatus.ARCHIVED,
    ])
    .default(NewsStatus.DRAFT),
  featured: z.boolean().default(false),
  author: z
    .string()
    .min(2, 'Autor deve ter pelo menos 2 caracteres')
    .max(100, 'Autor deve ter no máximo 100 caracteres'),
  publishedAt: z.string().datetime().nullable().optional(),
});

type NewsFormData = z.infer<typeof newsSchema>;

export { newsSchema, type NewsFormData };
