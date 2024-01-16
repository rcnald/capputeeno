'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Cart, cn } from '@/lib/utils'
import { Icons } from '@/utils/Icons'
import { Saira } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const saira = Saira({ subsets: ['latin'], weight: '500' })

export default function Cart() {
  const [value] = useLocalStorage<Cart>('cart', [])
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(value?.length || 0)
  }, [value])
  return (
    <Link href="/cart" className="group relative flex">
      <Icons.Bag
        size="24px"
        className="stroke-zinc-400 transition-all duration-300 group-hover:stroke-zinc-700"
      />
      <span
        className={cn(
          ` ${saira.className} absolute inset-0 left-1/2 top-1/2 grid size-4 place-content-center rounded-full bg-red-600 text-xs text-white transition-all duration-300 group-hover:bg-red-800`,
          { hidden: count === undefined },
        )}
      >
        {count}
      </span>
    </Link>
  )
}
