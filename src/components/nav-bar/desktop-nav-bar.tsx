import { Link } from 'react-router-dom';
import { CaretDownIcon, SignInIcon, TagIcon } from '@phosphor-icons/react';
import { Button } from '@/components/lib/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/lib/dropdown-menu';
import type { Category } from '@/domain/entities';
import { GlobalSearch } from '@/components/shared/global-search';
import type { NavItem } from '../../types/nav-bar-types';

interface DesktopNavBarProps {
  brand: string;
  navItems: NavItem[];
  categories: Category[];
}

function DesktopNavBar({ brand, navItems, categories }: DesktopNavBarProps) {
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1.5 text-sm text-white transition-colors hover:text-gray-200"
              >
                <TagIcon size={14} />
                editoriais
                <CaretDownIcon size={14} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-56 border-red-200 bg-white p-2">
              {categories.map((category) => (
                <DropdownMenuItem asChild key={category.id}>
                  <Link to={`/noticias?categoria=${encodeURIComponent(category.name)}`}>
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
