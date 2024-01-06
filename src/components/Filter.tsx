'use client'

import { Chevron } from '@/utils/Icons/Chevron'
import { ComponentProps, useState } from 'react'
import { setTimeout } from 'timers'

interface OptionsProps extends ComponentProps<'li'> {
  children: string
}

interface FiltersDataProps {
  name: string
  id: string
}

export default function Filter() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = (trigger: HTMLButtonElement) => {
    if (isOpen) {
      trigger.setAttribute('data-closing', '')
      setTimeout(() => {
        setIsOpen(false)
        trigger.removeAttribute('data-closing')
      }, 100)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div className="relative flex h-fit w-full max-w-52 flex-col items-end gap-1">
      <button
        id="orderProductsBy"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={(e) => handleClick(e.currentTarget)}
        className="group peer flex text-zinc-400 aria-expanded:text-zinc-700 "
      >
        Organizar por
        <Chevron
          size="24px"
          className="stroke-zinc-400 group-aria-expanded:stroke-zinc-700"
        />
      </button>

      <ul
        aria-labelledby="orderProductsBy"
        className="absolute top-[calc(100%+0.25rem)] hidden flex-col gap-1 rounded bg-white p-4 opacity-0 peer-aria-expanded:flex peer-aria-expanded:animate-fadeIn peer-data-[closing]:animate-fadeOut"
      >
        {filters.map((filter) => {
          return (
            <Options key={filter.id} id={filter.id}>
              {filter.name}
            </Options>
          )
        })}
      </ul>
    </div>
  )
}

function Options({ children, ...props }: OptionsProps) {
  return (
    <li {...props} className="text-zinc-400 ">
      <button className="hover:text-zinc-700">{children}</button>
    </li>
  )
}

const filters: Array<FiltersDataProps> = [
  { name: 'Novidades', id: 'news' },
  { name: 'Preço: Maior - menor', id: 'price-to-low' },
  { name: 'Preço: Menor - maior', id: 'price-to-high' },
  { name: 'Mais vendidos', id: 'best-sellers' },
]
