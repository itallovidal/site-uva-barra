interface NewsListingHeaderProps {
  category?: string;
}

function NewsListingHeader({ category }: NewsListingHeaderProps) {
  const title = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'Notícias';

  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-1.5 flex-shrink-0 rounded-full bg-red-600" />
      <h1 className="text-3xl font-bold text-zinc-900">{title}</h1>
    </div>
  );
}

export { NewsListingHeader };
