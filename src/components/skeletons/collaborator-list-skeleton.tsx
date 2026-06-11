import { Skeleton } from '@/components/lib/skeleton';

function CollaboratorListSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-7 w-56" />
        <Skeleton className="mt-1 h-5 w-32" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="rounded-lg border">
            <div className="flex items-center justify-between gap-4 p-6">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="mt-1 h-4 w-28" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-16 rounded-md" />
                <Skeleton className="h-9 w-16 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { CollaboratorListSkeleton };
