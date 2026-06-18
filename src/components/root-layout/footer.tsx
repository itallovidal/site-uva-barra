import { Link } from 'react-router-dom';
import { InstagramLogoIcon } from '@phosphor-icons/react';
import { useCategories } from '@/hooks/use-categories';

const NAV_LINKS = [
  { text: 'Sobre a UVA', href: '/sobre' },
  { text: 'Novidades', href: '/' },
];

function Footer() {
  const { categories } = useCategories();

  return (
    <footer className="bg-zinc-900 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3 md:gap-12">
          <div className="min-w-0">
            <h3 className="mb-2 text-lg font-semibold">Agência UVA</h3>
            <p className="text-sm leading-relaxed text-white">
              Laboratório de Jornalismo e Publicidade da Universidade Veiga de Almeida - Unidade
              Barra da Tijuca.
            </p>
          </div>

          <div className="min-w-0">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Sobre</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.href}
                    className="text-white text-sm transition-colors hover:text-foreground"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Categorias</h4>
            <ul className="space-y-2.5">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/noticias?categoria=${encodeURIComponent(category.name)}`}
                    className="text-white text-sm transition-colors hover:text-foreground"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-border" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <span className="text-white text-xs">
            © 2024 Universidade Veiga de Almeida - Campus Barra. Laboratório de Jornalismo.
          </span>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/agenciauvabarra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-foreground"
              aria-label="Instagram"
            >
              <InstagramLogoIcon size={20} weight="fill" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
