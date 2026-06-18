import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeSimpleIcon, LockIcon } from '@phosphor-icons/react';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/lib/card';
import { Input } from '@/components/lib/input';
import { Button } from '@/components/lib/button';
import { loginSchema } from '@/schemas/user-schemas';
import { useAuth } from '@/hooks/use-auth';
import { useState, useEffect } from 'react';
import type { RequestLoginDTO } from '@/domain/entities';

function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, isAuthenticated, isLoading: isAuthLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const rawRedirect = searchParams.get('redirect') || '/admin';
  const redirect = rawRedirect.includes('/admin/logout') ? '/admin' : rawRedirect;

  useEffect(
    function redirectWhenAuthenticated() {
      if (isAuthenticated && !isAuthLoading) {
        console.log('Redirecting to:', redirect);
        navigate(redirect, { replace: true });
      }
    },
    [isAuthenticated, isAuthLoading, navigate, redirect]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestLoginDTO>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: RequestLoginDTO) {
    setIsLoading(true);
    setError(null);

    try {
      await login(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao conectar ao servidor');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-md items-center justify-center px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Entrar</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <EnvelopeSimpleIcon
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-9"
                  aria-invalid={!!errors.email}
                  {...register('email')}
                />
              </div>
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <div className="relative">
                <LockIcon
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="password"
                  type="password"
                  placeholder="Sua senha"
                  className="pl-9"
                  aria-invalid={!!errors.password}
                  {...register('password')}
                />
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            {error && <p className="text-sm text-destructive text-center">{error}</p>}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
        </CardContent>

        {/* <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Não tem conta?{' '}
            <Link to="/cadastro" className="font-medium text-primary hover:underline">
              Cadastre-se
            </Link>
          </p>
        </CardFooter> */}
      </Card>
    </main>
  );
}

export { LoginPage };
