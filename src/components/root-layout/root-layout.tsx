import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components/nav-bar';
import { Footer } from './footer';
import { NewspaperIcon, InfoIcon } from '@phosphor-icons/react';

const BRAND = 'Agência UVA Barra';

const NAV_ITEMS = [
  { link: '/', text: 'Novidades', icon: NewspaperIcon },
  // { link: '/contato', text: 'Contato', icon: EnvelopeIcon },
  { link: '/sobre', text: 'Sobre', icon: InfoIcon },
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
