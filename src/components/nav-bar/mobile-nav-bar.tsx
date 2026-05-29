import { Link } from 'react-router-dom';
import { ListIcon, XIcon, MagnifyingGlassIcon, SignInIcon } from '@phosphor-icons/react';
import { Button } from '@/components/lib/button';
import { Input } from '@/components/lib/input';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
} from '@/components/lib/drawer';
import type { NavItem } from '../../types/nav-bar-types';

interface MobileNavBarProps {
  brand: string;
  navItems: NavItem[];
}

function MobileNavBar({ brand, navItems }: MobileNavBarProps) {
  return (
    <div className="lg:hidden  bg-red-600">
      <div className="flex h-14 items-center justify-between px-4 border-b gap-3">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button className="bg-white" variant="ghost" size="icon" aria-label="Abrir menu">
              <ListIcon size={22} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="flex flex-col h-full">
            <DrawerHeader className="flex flex-row items-center justify-between">
              <Link to="/" className="text-base font-bold">
                {brand}
              </Link>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon-xs" aria-label="Fechar menu">
                  <XIcon size={16} />
                </Button>
              </DrawerClose>
            </DrawerHeader>

            <nav className="flex flex-col gap-1 px-4 flex-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <DrawerClose key={item.link} asChild>
                    <Link
                      to={item.link}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      <Icon size={18} />
                      {item.text}
                    </Link>
                  </DrawerClose>
                );
              })}
            </nav>

            <DrawerFooter className="border-t">
              <Button variant="ghost" size="default" className="w-full justify-start gap-2" asChild>
                <Link to="/entrar">
                  <SignInIcon size={18} />
                  Login
                </Link>
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <div className="relative flex-1 max-w-xs">
          <MagnifyingGlassIcon
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            style={{ background: 'white' }}
            type="search"
            placeholder="Pesquisar..."
            className="h-8 w-full pl-8 text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export { MobileNavBar };
