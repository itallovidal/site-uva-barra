import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/lib/card';
import { CollaboratorForm } from '@/components/collaborator-form/collaborator-form';
import { createCollaborator } from '@/api/collaborators/create-user';
import type { CollaboratorFormData } from '@/components/collaborator-form/collaborator-form-types';

function CollaboratorRegisterPage() {
  const navigate = useNavigate();

  async function handleCreate(data: CollaboratorFormData) {
    const registerData = data as {
      name: string;
      email: string;
      password: string;
      profession: string;
      role?: string;
      bio?: string;
    };

    const dto = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
      profession: registerData.profession ? registerData.profession.toUpperCase() : registerData.profession,
      role: registerData.role,
      bio: registerData.bio ?? null,
    };

    await createCollaborator(dto as any);
    navigate('/admin/collaborators');
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
          <CollaboratorForm mode="create" onSubmit={handleCreate} />
        </CardContent>
      </Card>
    </main>
  );
}

export { CollaboratorRegisterPage };

