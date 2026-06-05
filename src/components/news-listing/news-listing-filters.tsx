import { useState } from 'react';
import { Search, XIcon } from 'lucide-react';
import { Input } from '@/components/lib/input';
import type { Category } from '@/domain/entities';

interface NewsListingFiltersProps {
  categories: Category[];
  selectedCategory: string;
  selectedSort: 'desc' | 'asc';
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: 'desc' | 'asc') => void;
  onSearch: (term: string) => void;
  onClearSearch: () => void;
}

function NewsListingFilters({
  categories,
  selectedCategory,
  selectedSort,
  searchTerm,
  onCategoryChange,
  onSortChange,
  onSearch,
  onClearSearch,
}: NewsListingFiltersProps) {
  const [inputValue, setInputValue] = useState(searchTerm);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      onSearch(trimmed);
    } else {
      onClearSearch();
    }
  }

  function handleClear() {
    setInputValue('');
    onClearSearch();
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <form onSubmit={handleSubmit} className="relative flex-1">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
        <Input
          type="text"
          placeholder="Pesquisar notícias..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pl-9 pr-9"
        />
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
            aria-label="Limpar pesquisa"
          >
            <XIcon className="size-4" />
          </button>
        )}
      </form>

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
    </div>
  );
}

export { NewsListingFilters };
