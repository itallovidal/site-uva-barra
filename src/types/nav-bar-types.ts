import type { Icon } from '@phosphor-icons/react';

interface NavItem {
  link: string;
  text: string;
  icon: Icon;
}

interface NavBarProps {
  brand: string;
  navItems: NavItem[];
}

export type { NavItem, NavBarProps };
