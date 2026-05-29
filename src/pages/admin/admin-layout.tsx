import { Outlet } from 'react-router-dom';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import { Button } from '@/components/lib/button';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from '@/components/lib/drawer';
import { AdminSidebar } from './admin-sidebar';
import { Link } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex w-64 flex-shrink-0 border-r border-red-600">
        <AdminSidebar className="fixed w-64 h-full border-r border-red-600" />
      </div>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 flex h-14 items-center justify-between px-4 border-b bg-white">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Abrir menu admin">
              <ListIcon size={22} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="flex flex-col h-full">
            <DrawerHeader className="flex flex-row items-center justify-between">
              <Link to="/admin" className="text-base font-bold">
                Agência UVA Barra
              </Link>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon-xs" aria-label="Fechar menu">
                  <XIcon size={16} />
                </Button>
              </DrawerClose>
            </DrawerHeader>

            <DrawerClose asChild>
              <AdminSidebar className="border-none" />
            </DrawerClose>
          </DrawerContent>
        </Drawer>

        <span className="text-sm font-semibold">Administração</span>

        <div className="w-10" />
      </div>

      {/* Main content */}
      <main className="flex-1 lg:pl-0 pt-14 lg:pt-0">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export { AdminLayout };
