import { useState, useEffect } from 'react';
import type { Category } from '@/domain/entities';
import type { ResponsePayload } from '@/types/api-response-types';

interface UseCategoriesResult {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
}

function useCategories(): UseCategoriesResult {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(function fetchCategories() {
    async function doFetch() {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const payload = (await response.json()) as ResponsePayload<Category[]>;
        setCategories(payload.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    }

    doFetch();
  }, []);

  return { categories, isLoading, error };
}

export { useCategories };
