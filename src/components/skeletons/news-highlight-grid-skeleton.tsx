import { Skeleton } from '@/components/lib/skeleton';

function NewsHighlightGridSkeleton() {
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 grid-rows-2 max-h-[60vh]">
        <div className="lg:row-span-2">
          <div className="flex h-full flex-col gap-4 rounded-lg border bg-white p-4">
            <Skeleton className="h-48 w-full rounded-md" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border bg-white p-4">
          <Skeleton className="h-24 w-full rounded-md" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
        <div className="flex flex-col gap-4 rounded-lg border bg-white p-4">
          <Skeleton className="h-24 w-full rounded-md" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      </section>

      <section className="flex flex-col gap-4 md:flex-row">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex-1">
            <div className="flex flex-col gap-3 rounded-lg border bg-white p-4">
              <Skeleton className="h-20 w-full rounded-md" />
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export { NewsHighlightGridSkeleton };
