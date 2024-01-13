import { cn } from '@/lib/utils'

export function ProductSkeleton() {
  return (
    <li
      className={cn(
        `relative flex w-fit flex-col rounded-t-lg bg-gray-700 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent`,
      )}
    >
      <div className="h-[300px] w-[256px] bg-gray-300"></div>
      <div className="flex flex-col gap-2 bg-gray-100 px-3 py-2">
        <h1 className="h-6 w-full rounded-md bg-gray-200"></h1>
        <hr />
        <span className="h-6 w-20 rounded-md bg-gray-200"></span>
      </div>
    </li>
  )
}

export function ProductsSkeleton() {
  return (
    <>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </>
  )
}
