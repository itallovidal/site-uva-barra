import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeSimple, User, Lock, NotePencil } from '@phosphor-icons/react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/lib/card';
import { Input } from '@/components/lib/input';
import { Button } from '@/components/lib/button';
import { Textarea } from '@/components/lib/textarea';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from '@/components/lib/combobox';

import { registerSchema } from '@/schemas/user-schemas';
import { UserProfession, UserRole } from '@/domain/constants';
import type { UserRequestDTO } from '@/domain/entities';
import type { RegisterFormData } from '@/schemas/user-schemas';

const professionOptions = Object.values(UserProfession);
const roleOptions = Object.values(UserRole);

function CollaboratorRegisterPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(registerSchema) as any,
    defaultValues: {
      role: 'collaborator',
    },
  });

  function onSubmit(data: RegisterFormData) {
    const dto: UserRequestDTO = {
      name: data.name,
      email: data.email,
      password: data.password,
      profession: data.profession,
      role: data.role,
      bio: data.bio ?? null,
    };
    console.log('Register collaborator:', dto);
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-md items-center justify-center px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Registrar Colaborador</CardTitle>
          <CardDescription className="text-center">
            Cadastre um novo colaborador no portal da UVA Barra
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  placeholder="Nome do colaborador"
                  className="pl-9"
                  aria-invalid={!!errors.name}
                  {...register('name')}
                />
              </div>
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>

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
                Profissão
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

            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">
                Função
              </label>
              <Controller
                name="role"
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
                        {roleOptions.map((role) => (
                          <ComboboxItem key={role} value={role}>
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                          </ComboboxItem>
                        ))}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                )}
              />
              {errors.role && (
                <p className="text-sm text-destructive">{errors.role.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="bio" className="text-sm font-medium">
                Biografia
              </label>
              <div className="relative">
                <NotePencil
                  size={16}
                  className="absolute left-3 top-3 text-muted-foreground"
                />
                <Textarea
                  id="bio"
                  placeholder="Breve biografia do colaborador"
                  className="pl-9"
                  aria-invalid={!!errors.bio}
                  {...register('bio')}
                />
              </div>
              {errors.bio && <p className="text-sm text-destructive">{errors.bio.message}</p>}
            </div>

            <Button type="submit" className="w-full">
              Registrar Colaborador
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

export { CollaboratorRegisterPage };
