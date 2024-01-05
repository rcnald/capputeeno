import { Icons } from '@/utils/Icons'
import { Saira } from 'next/font/google'
import Link from 'next/link'

const saira = Saira({ subsets: ['latin'], weight: '500' })

export default function Cart() {
  return (
    <Link href="/cart" className="group relative flex">
      <Icons.Bag
        size="24px"
        className="stroke-zinc-400 transition-all duration-300 group-hover:stroke-zinc-700"
      />
      <span
        className={` ${saira.className} absolute inset-0 left-1/2 top-1/2 grid size-4 place-content-center rounded-full bg-red-600 text-xs transition-all duration-300 group-hover:bg-red-800`}
      >
        2
      </span>
    </Link>
  )
}
