import { useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { Input } from '@/components/lib/input';
import { Button } from '@/components/lib/button';
import { cn } from '@/components/lib/utils';

interface GlobalSearchProps {
  className?: string;
  placeholder?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export function GlobalSearch({ className, placeholder = "Pesquisar...", inputClassName, buttonClassName }: GlobalSearchProps) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [term, setTerm] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = term.trim();
    setTerm('');
    
    if (location.pathname === '/noticias') {
      const nextParams = new URLSearchParams(searchParams);
      if (trimmed) {
        nextParams.set('busca', trimmed);
      } else {
        nextParams.delete('busca');
      }
      nextParams.delete('pagina');
      nextParams.delete('categoria'); // Remove a categoria da URL ao pesquisar
      navigate({ pathname: '/noticias', search: nextParams.toString() });
    } else {
      if (trimmed) {
        navigate(`/noticias?busca=${encodeURIComponent(trimmed)}`);
      } else {
        navigate(`/noticias`);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative flex items-center w-full", className)}>
      <Input
        type="search"
        placeholder={placeholder}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{ backgroundColor: "white" }}
        className={cn("pr-10 w-full", inputClassName)}
      />
      <Button 
        type="submit" 
        variant="ghost" 
        size="icon-sm" 
        className={cn("absolute right-1", buttonClassName)}
        aria-label="Pesquisar"
      >
        <MagnifyingGlassIcon size={16} />
      </Button>
    </form>
  );
}
