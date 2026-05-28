## 1. Component Scaffolding

- [x] 1.1 Create `src/components/nav-bar/` directory with `index.ts` barrel export
- [x] 1.2 Create `nav-bar-types.ts` with `NavItem` interface (`link: string`, `text: string`, `icon: PhosphorIcon`) and `NavBarProps`
- [x] 1.3 Create `nav-bar.tsx` parent component with `navItems`, `brand` props and responsive wrapper

## 2. Desktop NavBar

- [x] 2.1 Create `desktop-nav-bar.tsx` with brand left, links center, search+login right, hidden below `lg`

## 3. Mobile NavBar

- [x] 3.1 Create `mobile-nav-bar.tsx` with hamburger button + search inline, and Vaul Drawer (left) with nav items + brand + login

## 4. Integration

- [x] 4.1 Configure default nav items (agência uva barra, novidades, contato, sobre)
- [x] 4.2 Integrate `NavBar` into the app layout (`src/app.tsx`)
- [x] 4.3 Verify lint passes with `npm run lint`
