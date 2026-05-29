## 1. Mock API

- [x] 1.1 Add `GET /api/categories` handler and categories mock data in MSW handlers
- [x] 1.2 Add `POST /api/news` handler in MSW handlers that validates and stores the submitted news

## 2. NewsForm Component

- [x] 2.1 Create `src/components/news-form/` directory, types file, and NewsForm skeleton
- [x] 2.2 Wire up React Hook Form + zodResolver with newsSchema, manage loading/ready/submitting states
- [x] 2.3 Add title input (with Phosphor icon prefix) and summary textarea
- [x] 2.4 Integrate MDXEditor for the content field via react-hook-form Controller
- [x] 2.5 Add categories combobox fetched internally via `GET /api/categories`
- [x] 2.6 Add tag picker (badge/chip toggle for tagIds, fetched via `GET /api/tags`)
- [x] 2.7 Add cover image URL input with thumbnail preview
- [x] 2.8 Add featured checkbox and status toggle (draft/review) with mode-aware labels
- [x] 2.9 Add submit button with loading state, success/error feedback

## 3. Create Page & Route

- [x] 3.1 Create `src/pages/admin/news-create-page.tsx` using NewsForm with mode="create"
- [x] 3.2 Import NewsCreatePage in `src/routes/index.tsx` replacing the placeholder route
