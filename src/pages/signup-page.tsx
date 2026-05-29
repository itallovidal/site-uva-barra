import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeSimple, User, Lock } from '@phosphor-icons/react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/lib/card';
import { Input } from '@/components/lib/input';
import { Button } from '@/components/lib/button';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from '@/components/lib/combobox';

import { signupSchema } from '@/schemas/user-schemas';
import { UserProfession } from '@/domain/constants';
import type { UserRequestDTO } from '@/domain/entities';

type SignupFormData = Omit<UserRequestDTO, 'role' | 'bio'> & { confirmPassword: string };

const professionOptions = Object.values(UserProfession);

function SignupPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(signupSchema) as any,
  });

  function onSubmit(data: SignupFormData) {
    const dto: UserRequestDTO = {
      name: data.name,
      email: data.email,
      password: data.password,
      profession: data.profession,
    };
    console.log('Signup submitted:', dto);
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-md items-center justify-center px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Ajude-nos a Crescer</CardTitle>
          <CardDescription className="text-center">
            Seja um colaborador e ajude o portal da UVA Barra crescer da forma que puder ajudar
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <EnvelopeSimple
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
              <label htmlFor="name" className="text-sm font-medium">
                Nome
              </label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="pl-9"
                  aria-invalid={!!errors.name}
                  {...register('name')}
                />
              </div>
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <div className="relative">
                <Lock
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

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirmar Senha
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirme sua senha"
                  className="pl-9"
                  aria-invalid={!!errors.confirmPassword}
                  {...register('confirmPassword')}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="profession" className="text-sm font-medium">
                Em que você pode ajudar? (Função)
              </label>
              <Controller
                name="profession"
                control={control}
                render={({ field }) => (
                  <Combobox
                    value={field.value ?? ''}
                    onValueChange={(newValue) => field.onChange(newValue || '')}
                  >
                    <ComboboxInput
                      placeholder="Selecione uma função"
                      className="w-full"
                      {...field}
                    />
                    <ComboboxContent>
                      <ComboboxList>
                        {professionOptions.map((profession) => (
                          <ComboboxItem key={profession} value={profession}>
                            {profession.charAt(0).toUpperCase() + profession.slice(1).replace(/_/g, ' ')}
                          </ComboboxItem>
                        ))}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                )}
              />
              {errors.profession && (
                <p className="text-sm text-destructive">{errors.profession.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Solicitar Cadastro
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Já tem conta?{' '}
            <Link to="/entrar" className="font-medium text-primary hover:underline">
              Entre
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}

export { SignupPage };
