import { Skeleton } from '@/components/lib/skeleton';

interface NewsCardSkeletonProps {
  isVertical?: boolean;
}

function NewsCardSkeleton({ isVertical = false }: NewsCardSkeletonProps) {
  if (isVertical) {
    return (
      <div className="flex h-full flex-col gap-6 rounded-lg border bg-white p-4">
        <Skeleton className="aspect-video w-full rounded-md" />
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="mt-2 h-6 w-full" />
            <Skeleton className="mt-1 h-6 w-3/4" />
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-1 h-4 w-5/6" />
          </div>
          <div className="mt-2 flex items-center gap-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex gap-6 rounded-lg border bg-white p-4">
      <Skeleton className="h-40 w-60 flex-shrink-0 rounded-md" />
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="mt-2 h-7 w-full" />
          <Skeleton className="mt-1 h-7 w-2/3" />
          <Skeleton className="mt-2 h-4 w-full" />
          <Skeleton className="mt-1 h-4 w-4/5" />
        </div>
        <div className="mt-2 flex items-center gap-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
}

export { NewsCardSkeleton };
