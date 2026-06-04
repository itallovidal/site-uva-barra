import { z } from 'zod';

const createCategorySchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  tags: z.array(z.string()).optional(),
});

const updateCategorySchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  tags: z.array(z.string()),
});

export { createCategorySchema, updateCategorySchema };
