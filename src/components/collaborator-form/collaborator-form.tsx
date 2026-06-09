import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeSimpleIcon, UserIcon, LockIcon, NotePencilIcon } from '@phosphor-icons/react';

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

import { registerSchema, editCollaboratorSchema } from '@/schemas/user-schemas';
import { UserProfession, UserRole } from '@/domain/constants';
import type { RegisterFormData, EditCollaboratorFormData } from '@/schemas/user-schemas';
import type { CollaboratorFormProps } from './collaborator-form-types';
import { useState } from 'react';

const professionOptions = Object.values(UserProfession);
const roleOptions = Object.values(UserRole);

function CollaboratorForm({ mode, onSubmit, defaultValues }: CollaboratorFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const schema = mode === 'create' ? registerSchema : editCollaboratorSchema;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormData | EditCollaboratorFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema) as any,
    defaultValues: {
      role: 'collaborator',
      ...defaultValues,
    },
  });

  async function handleFormSubmit(data: RegisterFormData | EditCollaboratorFormData) {
    setIsSubmitting(true);
    setFeedback(null);
    try {
      await onSubmit(data);
      setFeedback({ type: 'success', message: 'Colaborador salvo com sucesso!' });
    } catch {
      setFeedback({ type: 'error', message: 'Erro ao salvar colaborador. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      {feedback && (
        <div
          className={`rounded-md px-4 py-3 text-sm ${
            feedback.type === 'success'
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}
        >
          {feedback.message}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nome
        </label>
        <div className="relative">
          <UserIcon
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

      {mode === 'create' && (
        <>
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
                aria-invalid={!!(errors as any).password}
                {...register('password')}
              />
            </div>
            {(errors as any).password && (
              <p className="text-sm text-destructive">{(errors as any).password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirmar Senha
            </label>
            <div className="relative">
              <LockIcon
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                className="pl-9"
                aria-invalid={!!(errors as any).confirmPassword}
                {...register('confirmPassword')}
              />
            </div>
            {(errors as any).confirmPassword && (
              <p className="text-sm text-destructive">{(errors as any).confirmPassword.message}</p>
            )}
          </div>
        </>
      )}

      <div className="space-y-2">
        <label htmlFor="profession" className="text-sm font-medium">
          Profissão
        </label>
        <Controller
          name="profession"
          control={control}
          render={({ field }) => (
            <select
              id="profession"
              className="w-full rounded-md border px-3 py-2"
              value={field.value ?? ''}
              onChange={(e) => field.onChange(e.target.value)}
            >
              <option value="">Selecione uma função</option>
              {professionOptions.map((profession) => (
                <option key={profession} value={profession}>
                  {profession.charAt(0).toUpperCase() + profession.slice(1).replace(/_/g, ' ')}
                </option>
              ))}
            </select>
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
          <NotePencilIcon
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

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Salvando...' : mode === 'create' ? 'Registrar Colaborador' : 'Salvar Alterações'}
      </Button>
    </form>
  );
}

export { CollaboratorForm };

