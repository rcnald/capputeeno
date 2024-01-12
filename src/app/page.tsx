'use client'

import Filter from '@/components/Filter'
import Pagination from '@/components/Pagination'
import Products from '@/components/Products'
import Sections from '@/components/Sections'

export default function Page() {
  return (
    <div className="flex flex-col gap-6 bg-zinc-200 p-7">
      <div className="flex justify-between">
        <Sections />
        <Filter />
      </div>
      <div className="flex flex-col">
        <Pagination className="self-end" />
        <Products />
        <Pagination className="self-end" />
      </div>
    </div>
  )
}
