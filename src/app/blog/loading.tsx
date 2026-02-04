import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
    return (
        <section>
            <div className="mb-6 sm:mb-12">
                <Skeleton className="h-10 w-3/4 mx-auto" />
            </div>
            <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                ))}
            </div>
        </section>
    );
}
