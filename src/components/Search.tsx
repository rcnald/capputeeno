import { Icons } from '@/utils/Icons'

interface SearchProps {
  placeholder: string
}

export default function Search({ placeholder }: SearchProps) {
  return (
    <div className="group relative w-full max-w-80 ">
      <label htmlFor="search" className="sr-only">
        search
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className=" w-full rounded-lg bg-zinc-200 px-4 py-2 pr-10 text-sm text-zinc-700 outline-0 ring-2 ring-transparent transition-all placeholder:text-zinc-400 focus:ring-zinc-700"
      />
      <Icons.Magnifying
        size="24px"
        className="pointer-events-none absolute right-4 top-1.5 stroke-zinc-400 group-focus-within:stroke-zinc-700"
      />
    </div>
  )
}
