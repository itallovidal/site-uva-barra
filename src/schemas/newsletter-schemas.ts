import { z } from 'zod';

const newsletterRegisterSchema = z.object({
  email: z.string().email('Email inválido'),
});

const createNewsletterSchema = z.object({
  content: z.string().min(1, 'Conteúdo é obrigatório'),
});

const updateNewsletterSchema = z.object({
  content: z.string().min(1, 'Conteúdo é obrigatório'),
});

export { newsletterRegisterSchema, createNewsletterSchema, updateNewsletterSchema };
