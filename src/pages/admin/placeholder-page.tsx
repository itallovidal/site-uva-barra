import { Warning } from '@phosphor-icons/react';

interface PlaceholderPageProps {
  title: string;
}

function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Warning size={64} className="text-muted-foreground mb-4" />
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-muted-foreground">Ainda em construção</p>
    </div>
  );
}

export { PlaceholderPage };
