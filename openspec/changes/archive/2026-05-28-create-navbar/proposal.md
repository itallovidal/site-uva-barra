## Why

The site lacks primary navigation, making it impossible for users to browse between pages (news, contact, about) and access login. A navbar is a foundational UI element needed before any multi-page experience can be built.

## What Changes

- Create a `src/components/nav-bar` directory with a composable navbar system
- Implement a parent `NavBar` component that holds a config array of nav items (`link`, `text`, `icon`)
- Implement `DesktopNavBar` and `MobileNavBar` child components that receive the config and render adapted to each breakpoint
- Add a search bar and login button to the navbar
- CSS-based responsive show/hide for desktop vs mobile
- Integrate the navbar into the app layout

## Capabilities

### New Capabilities
- `nav-bar`: Responsive navigation bar with desktop and mobile variants, search bar, and login action

### Modified Capabilities

<!-- No existing specs are being modified -->

## Impact

- New components under `src/components/nav-bar/`
- The app layout (`src/app.tsx` or a layout component) will render the navbar
- No existing functionality is changed
