import { z } from 'zod';
import { ROLES } from '@/types/auth-types';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Senha é obrigatória'),
});

const signupSchema = z
  .object({
    email: z.string().email('Email inválido'),
    name: z.string().min(1, 'Nome é obrigatório'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
    role: z.string({ message: 'Selecione uma função' }).refine(
      (val) => ROLES.includes(val as (typeof ROLES)[number]),
      { message: 'Selecione uma função' }
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  });

export { loginSchema, signupSchema };
