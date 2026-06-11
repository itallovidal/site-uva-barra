import { Skeleton } from '@/components/lib/skeleton';

function NewsListSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-8 w-56" />
        <Skeleton className="h-5 w-40" />
      </div>

      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-64 rounded-md" />
        <Skeleton className="h-10 w-40 rounded-md" />
      </div>

      <div className="flex flex-wrap gap-3">
        <Skeleton className="h-9 w-28 rounded-md" />
        <Skeleton className="h-9 w-28 rounded-md" />
      </div>

      <div className="grid gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="rounded-lg border py-0">
            <div className="border-b px-6 pb-5 pt-6">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="mt-1 h-4 w-48" />
            </div>
            <div className="space-y-5 px-6 py-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <Skeleton className="h-28 w-full rounded-md sm:h-24 sm:w-36 sm:flex-shrink-0" />
                <div className="min-w-0 flex-1 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <Skeleton className="h-9 w-28 rounded-md" />
                <Skeleton className="h-9 w-28 rounded-md" />
                <Skeleton className="h-9 w-20 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { NewsListSkeleton };
