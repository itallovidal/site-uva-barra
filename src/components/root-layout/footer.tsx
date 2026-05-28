import { Link } from 'react-router-dom';
import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

const NAV_LINKS = [
  { text: 'Sobre a UVA', href: '/sobre' },
  { text: 'Equipe Editorial', href: '/equipe' },
  { text: 'Fale Conosco', href: '/contato' },
  { text: 'Notícias', href: '/novidades' },
];

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Agência UVA</h3>
            <p className="text-white text-sm leading-relaxed">
              Laboratório de Jornalismo e Publicidade da Universidade Veiga de Almeida - Unidade
              Barra da Tijuca.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Sobre</h4>
            <ul className="space-y-2">
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
        </div>

        <hr className="border-border" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <span className="text-white text-xs">
            © 2024 Universidade Veiga de Almeida - Campus Barra. Laboratório de Jornalismo.
          </span>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-foreground"
              aria-label="Instagram"
            >
              <InstagramLogo size={20} weight="fill" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={20} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
