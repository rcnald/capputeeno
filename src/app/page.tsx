import Filter from '@/components/Filter'
import Sections from '@/components/Sections'

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-300 p-7">
      <div className="flex justify-between">
        <Sections />
        <Filter />
      </div>
    </div>
  )
}
