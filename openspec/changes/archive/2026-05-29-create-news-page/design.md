## Context

The admin panel has a placeholder page at `/admin/articles/create`. The project already has `@mdxeditor/editor` v4.0.1 installed, a `newsSchema` zod validation schema, and `NewsRequestDTO` domain type. News data is mocked via MSW with no real backend. The existing form pattern uses `react-hook-form` + `zodResolver` with `Controller` for custom inputs.

## Goals / Non-Goals

**Goals:**
- Replace the placeholder at `/admin/articles/create` with a functional creation form
- Integrate MDXEditor for rich text content editing
- Validate form data using existing `newsSchema`
- Add MSW mock handler for `POST /api/news`
- Support saving as draft or submitting for review

**Non-Goals:**
- Article editing/update page (future change)
- Article list page (`/admin/articles`)
- Article approval page (`/admin/articles/approve`)
- Real file upload for cover image (uses URL input initially)
- Authentication guards or permission-based access

## Decisions

1. **Componentized NewsForm** — The form lives in `src/components/news-form/` as a standalone component, NOT inside the page. It receives `defaultValues`, `onSubmit`, and `mode` props. Pages are thin wrappers that provide the submit callback and `defaultValues`. This lets the same form be used for creation (`/admin/articles/create`) and future editing (`/admin/articles/:id/edit`).

2. **MDXEditor for content** — Already installed at v4.0.1. Use the `MDXEditor` component with markdown editing mode. The diff view, toolbar plugin, and markdown plugin enable a rich editing experience. Content is stored as markdown string to match the `content: string` field in `NewsRequestDTO`.

3. **Controller for MDXEditor integration** — MDXEditor does not expose a standard `onChange` that `react-hook-form`'s `register` expects. Use `Controller` from react-hook-form to wrap the editor, calling `field.onChange` on each content update via the editor's `onChange` prop.

4. **Category as Combobox** — Follows the same pattern as profession/role comboboxes in `CollaboratorRegisterPage`. Categories are fetched INTERNALLY by the form via `GET /api/categories` on mount. The form manages its own loading state while categories load.

5. **Tags as checkboxes** — Tags are stored as `tagIds: string[]` in the DTO, and `tags` in `News` entity is also `string[]`. The form fetches available tag IDs via `GET /api/tags` on mount and renders them as a checkbox group or chips. No complex entity needed — tags are just strings.

6. **`mode` prop drives button labels** — `mode: 'create'` shows "Salvar Rascunho" / "Enviar para Revisão". `mode: 'edit'` shows labels appropriate for editing. Inferred internally from the mode value, not via separate string props.

7. **Reading time is backend-calculated** — The form does NOT calculate reading time. It sends the data as-is; the backend computes `readingTime` server-side.

8. **Cover image URL with preview** — Use a text input for the URL with a conditional thumbnail preview below it. No file upload in this iteration.

9. **Internal state machine** — The NewsForm manages three states internally:
    ```
    loading → (fetches categories + tags skeleton UI)
      ↓ ok
    ready → (form rendered, user fills fields)
      ↓ submit
    submitting → (inputs disabled, spinner on button)
      ↓ success
    success feedback (toast) → parent handles navigation
      ↓ error
    error feedback (toast) → back to ready
    ```

## Risks / Trade-offs

- **MDXEditor bundle size** — The editor adds ~200KB to the bundle. Only loaded on this page, so it won't affect other routes. Acceptable trade-off for rich editing.
- **No real API** — MSW mock returns success without persistence. The hook abstracts the fetch call, so switching to a real API later is straightforward.
- **No image upload** — Cover image is URL-only for now. A file upload feature can be added later without breaking the form structure.
- **No tags CRUD** — Tags are assumed to exist; no tag creation UI in this change.
