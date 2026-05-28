## Context

The project needs a primary navigation bar. The navbar must work on both desktop and mobile using a simple, composable component architecture. The existing project uses React 19 with Tailwind CSS 4, and follows a component-per-file pattern with named exports.

## Goals / Non-Goals

**Goals:**
- Provide site-wide navigation (novidades, contato, sobre)
- Display brand logo/text "agência uva barra"
- Include a search bar and login button
- Responsive: horizontal bar on desktop, hamburger menu on mobile
- Follow existing coding conventions (named functions, kebab-case files, named exports)

**Non-Goals:**
- Authentication/login logic (just the UI entry point)
- Search functionality (just the UI input)
- Dropdown/sub-menus
- SSR or server-side rendering concerns

## Decisions

1. **Parent-child component split**: A single `NavBar` component owns the nav config array and passes it to `DesktopNavBar` and `MobileNavBar`. This keeps the config in one place while allowing completely different markup per breakpoint.
2. **CSS-based responsive switching**: Use Tailwind's `hidden` and responsive prefixes (`lg:flex`, `lg:hidden`) to show/hide desktop vs mobile variants. No JavaScript-based breakpoint detection — simpler and more reliable.
3. **Config-driven items**: Nav items defined as an array of `{ link: string; text: string; icon: PhosphorIcon }` passed as props. Adding new items is a single-line change. The brand "agência uva barra" is a separate prop (string), not part of the array.
4. **Phosphor icons**: Use `@phosphor-icons/react` — `List` for hamburger, `MagnifyingGlass` for search, `SignIn` for login. Consistent across all icons.
5. **Vaul Drawer (left) for mobile menu**: Use the existing shadcn `Drawer` (powered by Vaul) with `direction="left"` instead of Radix Dialog. The drawer slides in from the left with nav items, brand, and login button in a vertical list.

6. **Mobile top bar**: Below `lg`, the visible top bar contains only the hamburger button (left) and search input (right). The drawer handles all navigation links + brand + login.
7. **Brand as separate prop**: The brand is rendered differently per breakpoint — directly in the desktop bar, but only inside the mobile drawer. This avoids duplicating the brand string in the nav array.

## Risks / Trade-offs

- [CSS-only approach] → Two DOM trees rendered simultaneously for desktop and mobile; minimal cost for a simple navbar
- [No global state] → If future features need navbar state (e.g., active link), a simple `useState` or route-based detection suffices without a state manager
- [Hardcoded items] → Trade-off for simplicity; can be externalized to a config file if needed later
