import { Link } from 'react-router-dom';
import { ListIcon, XIcon, SignInIcon } from '@phosphor-icons/react';
import { Button } from '@/components/lib/button';
import { GlobalSearch } from '@/components/shared/global-search';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
} from '@/components/lib/drawer';
import type { Category } from '@/domain/entities';
import type { NavItem } from '../../types/nav-bar-types';

interface MobileNavBarProps {
  brand: string;
  navItems: NavItem[];
  categories: Category[];
}

function MobileNavBar({ brand, navItems, categories }: MobileNavBarProps) {
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

              <div className="mt-4 border-t pt-4">
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  editoriais
                </p>
                <div className="mt-2 flex flex-col gap-1">
                  {categories.map((category) => (
                    <DrawerClose key={category.id} asChild>
                      <Link
                        to={`/noticias?categoria=${encodeURIComponent(category.name)}`}
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        {category.name}
                      </Link>
                    </DrawerClose>
                  ))}
                </div>
              </div>
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
          <GlobalSearch 
            inputClassName="h-8 w-full text-sm text-black bg-white placeholder:text-gray-800"
            buttonClassName="text-black hover:text-black/70 hover:bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export { MobileNavBar };
