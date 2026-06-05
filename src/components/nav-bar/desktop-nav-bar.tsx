import { Link } from 'react-router-dom';
import { SignInIcon } from '@phosphor-icons/react';
import { Button } from '@/components/lib/button';
import { GlobalSearch } from '@/components/shared/global-search';
import type { NavItem } from '../../types/nav-bar-types';

interface DesktopNavBarProps {
  brand: string;
  navItems: NavItem[];
}

function DesktopNavBar({ brand, navItems }: DesktopNavBarProps) {
  return (
    <div className="hidden lg:flex h-16 items-center justify-center border-b bg-red-600 px-2">
      <div className="hidden lg:w-7xl lg:flex h-16 items-center justify-between border-b">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-lg text-white">{brand}</span>
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.link}
                to={item.link}
                className="flex items-center gap-1.5 text-sm text-white hover:text-gray-200 transition-colors"
              >
                <Icon size={16} />
                {item.text}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <GlobalSearch 
            inputClassName="h-8 w-48 text-sm text-black bg-white placeholder:text-gray-800"
            buttonClassName="text-black hover:text-black/70 hover:bg-transparent"
          />
          <Button variant="secondary" size="sm" className="gap-1.5 bg-white" asChild>
            <Link to="/entrar">
              <SignInIcon size={16} />
              Login
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export { DesktopNavBar };
