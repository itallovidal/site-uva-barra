import { Link } from 'react-router-dom';
import { MagnifyingGlass, SignIn } from '@phosphor-icons/react';
import { Button } from '@/components/lib/button';
import { Input } from '@/components/lib/input';
import type { NavItem } from '../../types/nav-bar-types';

interface DesktopNavBarProps {
  brand: string;
  navItems: NavItem[];
}

function DesktopNavBar({ brand, navItems }: DesktopNavBarProps) {
  return (
    <div className="hidden lg:flex h-16 items-center justify-center border-b">
      <div className="hidden lg:w-7xl lg:flex h-16 items-center justify-between border-b">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-lg">{brand}</span>
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.link}
                to={item.link}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon size={16} />
                {item.text}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <MagnifyingGlass
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input type="search" placeholder="Pesquisar..." className="h-8 w-48 pl-8 text-sm" />
          </div>
          <Button variant="ghost" size="sm" className="gap-1.5">
            <SignIn size={16} />
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export { DesktopNavBar };
