import { Skeleton } from '@/components/lib/skeleton';

function AdminDashboardSkeleton() {
  return (
    <div className="space-y-10">
      <div>
        <Skeleton className="h-8 w-64" />
        <Skeleton className="mt-1 h-5 w-96" />
      </div>

      <section>
        <Skeleton className="mb-4 h-6 w-40" />
        <div className="rounded-lg border p-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-3/4" />
        </div>
      </section>

      <section>
        <Skeleton className="mb-4 h-6 w-44" />
        <div className="rounded-lg border p-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-2/3" />
        </div>
      </section>

      <section>
        <Skeleton className="mb-4 h-6 w-36" />
        <div className="rounded-lg border p-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="mt-2 h-4 w-4/5" />
        </div>
      </section>
    </div>
  );
}

export { AdminDashboardSkeleton };
