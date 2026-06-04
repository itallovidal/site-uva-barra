import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FileTextIcon,
  ImageSquareIcon,
  TagIcon,
  ArticleIcon,
} from '@phosphor-icons/react';
import { MDXEditor, headingsPlugin, listsPlugin, linkPlugin, quotePlugin, markdownShortcutPlugin, toolbarPlugin, UndoRedo, BoldItalicUnderlineToggles, BlockTypeSelect, ListsToggle, CreateLink } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

import { Input } from '@/components/lib/input';
import { Textarea } from '@/components/lib/textarea';
import { Button } from '@/components/lib/button';
import { Checkbox } from '@/components/lib/checkbox';
import { Skeleton } from '@/components/lib/skeleton';
import { Badge } from '@/components/lib/badge';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
} from '@/components/lib/combobox';

import { env } from '@/env';
import { newsSchema } from '@/schemas/news-schemas';
import { NewsStatus } from '@/domain/constants';
import type { NewsFormData } from '@/schemas/news-schemas';
import type { NewsFormProps } from './news-form-types';
import type { Category } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

function NewsForm({ defaultValues, onSubmit, mode }: NewsFormProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Array<{ id: string; name: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(
    defaultValues?.coverImageUrl ?? null
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewsFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(newsSchema) as any,
    defaultValues: {
      status: NewsStatus.DRAFT,
      featured: false,
      tags: [],
      ...defaultValues,
    },
  });

  useEffect(
    function fetchDependencies() {
      async function doFetch() {
        setIsLoading(true);
        try {
          const [catRes, tagRes] = await Promise.all([
            fetch(`${env.VITE_API_BASE_URL}/categories`),
            fetch(`${env.VITE_API_BASE_URL}/api/tags`),
          ]);
          if (catRes.ok) {
            const catPayload = (await catRes.json()) as ResponsePayload<Category[]>;
            setCategories(catPayload.data ?? []);
          }
          if (tagRes.ok) {
            const tagPayload = (await tagRes.json()) as ResponsePayload<Array<{ id: string; name: string }>>;
            setTags(tagPayload.data ?? []);
          }
        } catch {
          setFeedback({ type: 'error', message: 'Erro ao carregar dados do formulário' });
        } finally {
          setIsLoading(false);
        }
      }

      doFetch();
    },
    []
  );

  async function handleFormSubmit(data: NewsFormData) {
    setIsSubmitting(true);
    setFeedback(null);
    try {
      await onSubmit(data);
      setFeedback({ type: 'success', message: 'Notícia salva com sucesso!' });
    } catch {
      setFeedback({ type: 'error', message: 'Erro ao salvar notícia. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleDraftSubmit() {
    handleSubmit((data) =>
      handleFormSubmit({ ...data, status: NewsStatus.DRAFT })
    )();
  }

  function handleReviewSubmit() {
    handleSubmit((data) =>
      handleFormSubmit({ ...data, status: NewsStatus.REVIEW })
    )();
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-10 w-40" />
      </div>
    );
  }

  return (
    <form className="space-y-6">
      {feedback && (
        <div
          className={`rounded-md px-4 py-3 text-sm ${
            feedback.type === 'success'
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}
        >
          {feedback.message}
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            Título
          </label>
          <div className="relative">
            <ArticleIcon
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="title"
              type="text"
              placeholder="Título da notícia"
              className="pl-9"
              aria-invalid={!!errors.title}
              {...register('title')}
            />
          </div>
          {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="summary" className="text-sm font-medium">
            Resumo
          </label>
          <div className="relative">
            <FileTextIcon
              size={16}
              className="absolute left-3 top-3 text-muted-foreground"
            />
            <Textarea
              id="summary"
              placeholder="Resumo da notícia"
              className="pl-9"
              aria-invalid={!!errors.summary}
              {...register('summary')}
            />
          </div>
          {errors.summary && <p className="text-sm text-destructive">{errors.summary.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="text-sm font-medium">
            Conteúdo
          </label>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <MDXEditor
                markdown={field.value ?? ''}
                onChange={(value) => field.onChange(value)}
                className="rounded-md border border-input"
                contentEditableClassName="prose prose-sm max-w-none p-4 min-h-64 focus:outline-none"
                plugins={[
                  toolbarPlugin({
                    toolbarContents: () => (
                      <>
                        <UndoRedo />
                        <BoldItalicUnderlineToggles />
                        <BlockTypeSelect />
                        <ListsToggle />
                        <CreateLink />
                      </>
                    ),
                  }),
                  headingsPlugin(),
                  listsPlugin(),
                  linkPlugin(),
                  quotePlugin(),
                  markdownShortcutPlugin(),
                ]}
              />
            )}
          />
          {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="category" className="text-sm font-medium">
            Categoria
          </label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Combobox
                value={field.value ?? ''}
                onValueChange={(newValue) => field.onChange(newValue || '')}
              >
                <ComboboxInput
                  placeholder="Selecione uma categoria"
                  className="w-full"
                  {...field}
                />
                <ComboboxContent>
                  <ComboboxList>
                    {categories.map((cat) => (
                      <ComboboxItem key={cat.id} value={cat.name}>
                        {cat.name}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            )}
          />
          {errors.category && (
            <p className="text-sm text-destructive">{errors.category.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Tags</label>
          <div className="flex flex-wrap gap-2">
            {tags.length === 0 && (
              <p className="text-sm text-muted-foreground">Nenhuma tag disponível</p>
            )}
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <>
                  {tags.map((tag) => {
                    const isSelected = (field.value ?? []).includes(tag.id);
                    return (
                      <Badge
                        key={tag.id}
                        variant={isSelected ? 'default' : 'outline'}
                        className="cursor-pointer"
                        onClick={() => {
                          if (isSelected) {
                            field.onChange((field.value ?? []).filter((id) => id !== tag.id));
                          } else {
                            field.onChange([...(field.value ?? []), tag.id]);
                          }
                        }}
                      >
                        <TagIcon size={12} />
                        {tag.name}
                      </Badge>
                    );
                  })}
                </>
              )}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="coverImageUrl" className="text-sm font-medium">
            URL da Imagem de Capa
          </label>
          <div className="relative">
            <ImageSquareIcon
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="coverImageUrl"
              type="url"
              placeholder="https://exemplo.com/imagem.jpg"
              className="pl-9"
              aria-invalid={!!errors.coverImageUrl}
              {...register('coverImageUrl')}
              onChange={(e) => {
                register('coverImageUrl').onChange(e);
                setCoverPreview(e.target.value || null);
              }}
            />
          </div>
          {coverPreview && (
            <div className="mt-2 overflow-hidden rounded-md border">
              <img
                src={coverPreview}
                alt="Preview da imagem de capa"
                className="max-h-48 w-full object-cover"
                onError={() => setCoverPreview(null)}
              />
            </div>
          )}
          {errors.coverImageUrl && (
            <p className="text-sm text-destructive">{errors.coverImageUrl.message}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Controller
            name="featured"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="featured"
                checked={field.value ?? false}
                onCheckedChange={(checked) => field.onChange(checked)}
              />
            )}
          />
          <label htmlFor="featured" className="text-sm font-medium cursor-pointer">
            Notícia em destaque
          </label>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          disabled={isSubmitting}
          onClick={handleDraftSubmit}
        >
          {isSubmitting ? 'Salvando...' : mode === 'create' ? 'Salvar Rascunho' : 'Salvar como Rascunho'}
        </Button>
        <Button
          type="button"
          className="flex-1"
          disabled={isSubmitting}
          onClick={handleReviewSubmit}
        >
          {isSubmitting ? 'Salvando...' : mode === 'create' ? 'Enviar para Revisão' : 'Enviar para Revisão'}
        </Button>
      </div>
    </form>
  );
}

export { NewsForm };
