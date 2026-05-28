import { DesktopNavBar } from './desktop-nav-bar';
import { MobileNavBar } from './mobile-nav-bar';
import type { NavItem } from '../../types/nav-bar-types';

interface NavBarProps {
  brand: string;
  navItems: NavItem[];
}

function NavBar({ brand, navItems }: NavBarProps) {
  return (
    <div className="">
      <DesktopNavBar brand={brand} navItems={navItems} />
      <MobileNavBar brand={brand} navItems={navItems} />
    </div>
  );
}

export { NavBar };
