import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  HOST: z.string().default('0.0.0.0'),
  VITE_ENABLE_MSW: z
    .string()
    .transform((val) => val === 'true')
    .default(true),
  VITE_API_BASE_URL: z.string().default('https://api-uva-barra.onrender.com'),
});

export const BASE_URL = import.meta.env.BASE_URL;

export type Env = z.infer<typeof envSchema>;

export function validateEnv(env: unknown): Env {
  const result = envSchema.safeParse(env);

  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  - ${i.path.join('.')}: ${i.message}`)
      .join('\n');
    throw new Error(`Invalid environment variables:\n${issues}`);
  }

  console.log('Environment variables are valid');

  return result.data;
}

export const env = validateEnv(import.meta.env);
