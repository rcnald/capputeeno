import Filter from '@/components/Filter'
import Pagination from '@/components/Pagination'
import Products from '@/components/Products'
import Sections from '@/components/Sections'

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-200 p-7">
      <div className="grid grid-cols-2 justify-between gap-y-4">
        <Sections />
        <Filter className="place-self-end" />
        <Pagination totalPages={3} className="col-start-2 place-self-end" />
      </div>
      <Products></Products>
      <Pagination totalPages={3} className="ml-auto w-fit" />
    </div>
  )
}
