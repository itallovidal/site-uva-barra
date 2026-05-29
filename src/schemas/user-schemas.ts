import { z } from 'zod';
import { UserProfession, UserRole } from '@/domain/constants';

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

const registerSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
    profession: z.enum(
      Object.values(UserProfession) as [typeof UserProfession[keyof typeof UserProfession], ...typeof UserProfession[keyof typeof UserProfession][]],
      { message: 'Selecione uma função' }
    ),
    role: z.enum(
      Object.values(UserRole) as [typeof UserRole[keyof typeof UserRole], ...typeof UserRole[keyof typeof UserRole][]],
    ).optional(),
    bio: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export { loginSchema, signupSchema, registerSchema };
export type { RegisterFormData };
