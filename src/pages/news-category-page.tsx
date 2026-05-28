import { useParams } from 'react-router-dom';
import { CategorySection } from '../components/news/category-section';

function NewsCategoryPage() {
  const { category } = useParams<{ category: string }>();

  if (!category) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <p className="text-neutral-400">Categoria não especificada.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <CategorySection category={category} limit={3} />
    </div>
  );
}

export { NewsCategoryPage };
