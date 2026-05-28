## 1. Update Documentation

- [x] 1.1 Update `CODING-RULES.md` to explicitly require React Router `Link` for internal navigation
- [ ] 1.2 Update `CODING-RULES.md` to specify folder organization (hooks in `src/hooks/`)
- [ ] 1.3 Update `CODING-RULES.md` to clarify purpose of each folder in `src/`
- [ ] 1.4 Add typography rules for navigation elements to `CODING-RULES.md`

## 2. Update openspec/config.yaml

- [ ] 2.1 Add context about React Router DOM usage in navigation
- [ ] 2.2 Add rules for using `Link` instead of `<a>` tags
- [ ] 2.3 Document folder organization in config.yaml

## 3. Create Migration Script (Optional)

- [ ] 3.1 Create script to identify `<a>` tags used for internal navigation
- [ ] 3.2 Create script to suggest converting `<a>` to `Link` where appropriate
- [ ] 3.3 Add ESLint rule recommendation to flag `<a>` tags without `http` prefix

## 4. Update Existing Components

- [ ] 4.1 Review all components using `<a>` for internal navigation
- [ ] 4.2 Convert internal links to use `Link` component
- [ ] 4.3 Remove internal navigation logic from component files, move to `src/hooks/`
- [ ] 4.4 Organize existing hooks into `src/hooks/` folder

## 5. Testing

- [ ] 5.1 Verify internal navigation preserves SPA behavior
- [ ] 5.2 Test that external links still work correctly
- [ ] 5.3 Verify folder organization is respected in new components