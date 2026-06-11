import { Skeleton } from '@/components/lib/skeleton';

function NewsDetailSkeleton() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Skeleton className="mb-4 h-5 w-24 rounded-full" />
      <Skeleton className="mb-2 h-8 w-full" />
      <Skeleton className="mb-2 h-8 w-5/6" />
      <Skeleton className="mb-4 h-8 w-2/3" />
      <Skeleton className="mb-4 h-4 w-48" />
      <Skeleton className="mb-6 h-72 w-full rounded-xl" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="mt-6 flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>
    </div>
  );
}

export { NewsDetailSkeleton };
