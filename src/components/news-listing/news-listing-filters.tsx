import type { Category } from '@/domain/entities';
import { GlobalSearch } from '@/components/shared/global-search';

interface NewsListingFiltersProps {
  categories: Category[];
  selectedCategory: string;
  selectedSort: 'desc' | 'asc';
  isSearchMode: boolean;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: 'desc' | 'asc') => void;
}

function NewsListingFilters({
  categories,
  selectedCategory,
  selectedSort,
  isSearchMode,
  onCategoryChange,
  onSortChange,
}: NewsListingFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <div className="relative flex-1">
        <GlobalSearch inputClassName="h-9 pr-10" />
      </div>

      {!isSearchMode && (
        <div className="flex gap-3">
          <select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value as 'desc' | 'asc')}
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus:border-ring focus:ring-[3px] focus:ring-ring/50"
            aria-label="Ordenar por"
          >
            <option value="desc">Mais recente</option>
            <option value="asc">Mais antigo</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus:border-ring focus:ring-[3px] focus:ring-ring/50"
            aria-label="Filtrar por categoria"
          >
            <option value="">Todas as categorias</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export { NewsListingFilters };
