import { useState, useEffect } from 'react';
import { listAllCategories } from '@/api/categories/list-all';
import type { Category } from '@/domain/entities';

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
        const payload = await listAllCategories();
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
