import { useCategories } from '@/hooks/use-categories';
import { DesktopNavBar } from './desktop-nav-bar';
import { MobileNavBar } from './mobile-nav-bar';
import type { NavItem } from '../../types/nav-bar-types';

interface NavBarProps {
  brand: string;
  navItems: NavItem[];
}

function NavBar({ brand, navItems }: NavBarProps) {
  const { categories } = useCategories();

  return (
    <div className="">
      <DesktopNavBar brand={brand} navItems={navItems} categories={categories} />
      <MobileNavBar brand={brand} navItems={navItems} categories={categories} />
    </div>
  );
}

export { NavBar };
