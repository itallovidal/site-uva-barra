import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from '@/components/nav-bar';
import { Footer } from './footer';
import { NewspaperIcon, InfoIcon, RadioIcon } from '@phosphor-icons/react';

const BRAND = 'Agência UVA Barra';

const NAV_ITEMS = [
  { link: '/', text: 'Novidades', icon: NewspaperIcon },
  { link: '/noticias?categoria=R%C3%A1dio%20UVA%20Barra', text: 'Rádio UVA', icon: RadioIcon },
  { link: '/sobre', text: 'Sobre', icon: InfoIcon },
];

function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <NavBar brand={BRAND} navItems={NAV_ITEMS} />
      <Outlet />
      <Footer />
    </>
  );
}

export { RootLayout };
