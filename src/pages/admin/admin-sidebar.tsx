import { Link, useNavigate } from 'react-router-dom';
import {
  UsersIcon,
  UserPlusIcon,
  ClipboardTextIcon,
  FilePlusIcon,
  FileTextIcon,
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  EnvelopeIcon,
  SignOutIcon,
  ArrowLeftIcon,
  UserCircleIcon,
  HouseIcon,
} from '@phosphor-icons/react';
import { cn } from '@/components/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import type { Icon } from '@phosphor-icons/react';

interface SidebarItem {
  link: string;
  text: string;
  icon: Icon;
}

interface SidebarGroup {
  label: string;
  items: SidebarItem[];
}

const SIDEBAR_GROUPS: SidebarGroup[] = [
  // {
  //   label: 'Geral',
  //   items: [
  //     { link: '/admin/dashboard', text: 'Painel Inicial', icon: HouseIcon },
  //   ],
  // },
  {
    label: 'Colaboradores',
    items: [
      { link: '/admin/collaborators/register', text: 'Registro de Colaborador', icon: UserPlusIcon },
      // { link: '/admin/collaborators/requests', text: 'Solicitações', icon: ClipboardTextIcon },
      { link: '/admin/collaborators', text: 'Lista de Colaboradores', icon: UsersIcon },
    ],
  },
  {
    label: 'Notícias',
    items: [
      { link: '/admin/news/create', text: 'Criação de Notícias', icon: FilePlusIcon },
      { link: '/admin/news', text: 'Listagem de Notícias', icon: FileTextIcon },
      // { link: '/admin/news/approve', text: 'Aprovação de Notícias', icon: CheckCircleIcon },
    ],
  },
  // {
  //   label: 'Newsletter',
  //   items: [
  //     { link: '/admin/newsletter/create', text: 'Criação de Newsletter', icon: EnvelopeSimpleIcon },
  //     { link: '/admin/newsletter', text: 'Listagem de Newsletter', icon: EnvelopeIcon },
  //   ],
  // },
];

interface AdminSidebarProps {
  className?: string;
  onItemClick?: () => void;
}

function AdminSidebar({ className, onItemClick }: AdminSidebarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/entrar');
    onItemClick?.();
  }

  return (
    <aside className={cn('flex flex-col h-full bg-white', className)}>
      <div className="px-6 py-5 border-b space-y-1">
        <Link to="/admin" className="text-base font-bold">
          Agência UVA Barra
        </Link>
        {user && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <UserCircleIcon size={14} />
            <span>{user.name}</span>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {SIDEBAR_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-red-600 mb-1">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.link}
                    to={item.link}
                    onClick={onItemClick}
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    <Icon size={18} />
                    {item.text}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t px-3 py-3 space-y-0.5">
        <Link
          to="/"
          onClick={onItemClick}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <ArrowLeftIcon size={18} />
          Voltar ao site
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-600 hover:text-red-700 hover:bg-red-50 transition-colors w-full text-left"
        >
          <SignOutIcon size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export { AdminSidebar };
