import type { NewsFormData } from '@/schemas/news-schemas';

interface NewsFormProps {
  defaultValues?: Partial<NewsFormData>;
  onSubmit: (data: NewsFormData) => Promise<void>;
  mode: 'create' | 'edit';
}

export type { NewsFormProps };
