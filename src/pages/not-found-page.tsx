import { Link, useNavigate } from 'react-router-dom';
import { FileX } from '@phosphor-icons/react';
import { Button } from '@/components/lib/button';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="motion-safe:animate-fade-in flex min-h-dvh flex-col items-center justify-center px-4 text-center">
      <FileX size={96} className="mb-6 text-red-600" weight="duotone" />

      <h1 className="mb-4 text-5xl font-bold tracking-tight text-red-600">Página não encontrada</h1>

      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        A página que você está procurando pode ter sido removida ou o endereço está incorreto.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button variant="destructive" size="lg" asChild>
          <Link to="/">Voltar para Home</Link>
        </Button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Voltar
        </button>
      </div>
    </main>
  );
}

export { NotFoundPage };
