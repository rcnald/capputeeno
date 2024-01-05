import Filter from '@/components/Filter'
import Sections from '@/components/Sections'

export default function Page() {
  return (
    <div className="flex min-h-screen justify-between bg-zinc-300 p-7">
      <Sections />
      <Filter />
    </div>
  )
}
