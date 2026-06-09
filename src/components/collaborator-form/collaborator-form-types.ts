import type { RegisterFormData, EditCollaboratorFormData } from '@/schemas/user-schemas';

type CollaboratorFormData = RegisterFormData | EditCollaboratorFormData;

interface CollaboratorFormProps {
  mode: 'create' | 'edit';
  onSubmit: (data: CollaboratorFormData) => Promise<void>;
  defaultValues?: Partial<EditCollaboratorFormData>;
}

export type { CollaboratorFormProps, CollaboratorFormData };

