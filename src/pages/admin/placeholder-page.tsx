import { useEffect } from 'react';
import { WarningIcon, SignOutIcon } from '@phosphor-icons/react';
import { useAuth } from '@/hooks/use-auth';

interface PlaceholderPageProps {
  title: string;
}

function PlaceholderPage({ title }: PlaceholderPageProps) {
  const { logout } = useAuth();

  useEffect(
    function redirectOnMount() {
      if (title === 'Logout') {
        logout();
      }
    },
    [title, logout]
  );

  if (title === 'Logout') {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <SignOutIcon size={64} className="text-muted-foreground mb-4" />
        <h1 className="text-xl font-semibold mb-2">Saindo...</h1>
        <p className="text-muted-foreground">Redirecionando para o login</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <WarningIcon size={64} className="text-muted-foreground mb-4" />
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-muted-foreground">Ainda em construção</p>
    </div>
  );
}

export { PlaceholderPage };
