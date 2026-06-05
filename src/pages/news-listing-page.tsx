import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNewsListing } from '@/hooks/use-news-listing';
import { useNewsSearch } from '@/hooks/use-news-search';
import { useCategories } from '@/hooks/use-categories';
import { NewsListingHeader } from '@/components/news-listing/news-listing-header';
import { NewsListingFilters } from '@/components/news-listing/news-listing-filters';
import { NewsListingGrid } from '@/components/news-listing/news-listing-grid';
import { NewsListingPagination } from '@/components/news-listing/news-listing-pagination';

const PER_PAGE = 10;

function NewsListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get('categoria') ?? '';
  const sortParam = (searchParams.get('ordem') as 'desc' | 'asc') ?? 'desc';
  const pageParam = Number(searchParams.get('pagina') ?? '1') || 1;

  const activeSearch = searchParams.get('busca') ?? '';

  const { categories } = useCategories();

  const listingResult = useNewsListing({
    category: categoryParam || undefined,
    sort: sortParam,
    page: pageParam,
    perPage: PER_PAGE,
  });

  const searchResult = useNewsSearch(activeSearch);

  const isSearchMode = activeSearch.trim().length > 0;
  const articles = isSearchMode ? searchResult.articles : listingResult.articles;
  const meta = isSearchMode ? searchResult.meta : listingResult.meta;
  const isLoading = isSearchMode ? searchResult.isLoading : listingResult.isLoading;
  const error = isSearchMode ? searchResult.error : listingResult.error;

  const handleCategoryChange = useCallback(
    (category: string) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        if (category) {
          next.set('categoria', category);
        } else {
          next.delete('categoria');
        }
        next.delete('pagina');
        return next;
      });
    },
    [setSearchParams]
  );

  const handleSortChange = useCallback(
    (sort: 'desc' | 'asc') => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set('ordem', sort);
        next.delete('pagina');
        return next;
      });
    },
    [setSearchParams]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setSearchParams((prev) => {
        const next = new URLSearchParams(prev);
        next.set('pagina', String(page));
        return next;
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setSearchParams]
  );

  const handleClearSearch = useCallback(() => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete('busca');
      next.delete('pagina');
      return next;
    });
  }, [setSearchParams]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="flex flex-col gap-6">
        <NewsListingHeader category={categoryParam || undefined} />

        <NewsListingFilters
          categories={categories}
          selectedCategory={categoryParam}
          selectedSort={sortParam}
          isSearchMode={isSearchMode}
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
        />

        {isSearchMode && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-500">
              Resultados para:{' '}
              <span className="font-semibold text-zinc-900">"{activeSearch}"</span>
            </p>
            <button
              type="button"
              onClick={handleClearSearch}
              className="text-sm text-red-600 underline hover:text-red-700"
            >
              Limpar pesquisa
            </button>
          </div>
        )}

        <NewsListingGrid
          articles={articles}
          isLoading={isLoading}
          error={error}
          searchTerm={isSearchMode ? activeSearch : undefined}
        />

        {!isSearchMode && (
          <NewsListingPagination
            currentPage={pageParam}
            totalPages={meta?.totalPages ?? 1}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export { NewsListingPage };
