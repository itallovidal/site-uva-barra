import { z } from 'zod';
import { UserProfession } from '@/domain/constants';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Senha é obrigatória'),
});

const signupSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
    profession: z.enum(
      Object.values(UserProfession) as [typeof UserProfession[keyof typeof UserProfession], ...typeof UserProfession[keyof typeof UserProfession][]],
      { message: 'Selecione uma função' }
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  });

export { loginSchema, signupSchema };
