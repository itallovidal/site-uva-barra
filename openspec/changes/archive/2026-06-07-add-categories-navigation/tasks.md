## 1. Navbar Category Dropdown

- [x] 1.1 Update the navbar component structure to fetch categories for presentation
- [x] 1.2 Add an `editoriais` dropdown trigger to the desktop navbar
- [x] 1.3 Render all available categories inside the dropdown as links to `/noticias?categoria=<value>`
- [x] 1.4 Expose the same category links in the mobile navbar in a touch-friendly grouped section

## 2. Footer Category Column

- [x] 2.1 Add a third footer column titled `Categorias`
- [x] 2.2 Render all available categories in the footer as links to the same listing route contract
- [x] 2.3 Keep the existing institutional and navigation columns unchanged aside from layout adjustments for the extra column

## 3. Integration and Verification

- [x] 3.1 Verify the category links preserve the existing news listing query param behavior
- [x] 3.2 Verify desktop and mobile navbar layouts still render correctly after the dropdown addition
- [ ] 3.3 Run the project lint check and fix any issues introduced by the change