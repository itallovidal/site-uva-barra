import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components/nav-bar';
import { Footer } from './footer';
import { Newspaper, Envelope, Info } from '@phosphor-icons/react';

const BRAND = 'Agência UVA Barra';

const NAV_ITEMS = [
  { link: '/novidades', text: 'Novidades', icon: Newspaper },
  { link: '/contato', text: 'Contato', icon: Envelope },
  { link: '/sobre', text: 'Sobre', icon: Info },
];

function RootLayout() {
  return (
    <>
      <NavBar brand={BRAND} navItems={NAV_ITEMS} />
      <Outlet />
      <Footer />
    </>
  );
}

export { RootLayout };
