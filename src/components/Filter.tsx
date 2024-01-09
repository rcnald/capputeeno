'use client'

import useQueryParam from '@/hooks/useQueryParam'
import { Icons } from '@/utils/Icons'
import cn from '@/utils/cn'
import { ComponentProps, ElementRef, useRef, useState } from 'react'

interface FilterProps extends ComponentProps<'div'> {
  className?: string
}

interface OptionProps extends ComponentProps<'li'> {
  children: string
  onSelected: () => void
  selected: boolean
}

interface FiltersDataProps {
  name: string
  id: string
}

export default function Filter({ className }: FilterProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { getQuery, setQuery } = useQueryParam()
  const buttonRef = useRef<ElementRef<'button'>>(null)
  const filterParam = getQuery('filter', 'news')

  function closeFilter() {
    const filterButton = buttonRef.current
    if (filterButton) {
      filterButton.setAttribute('data-closing', '')
      setTimeout(() => {
        setIsOpen(false)
        filterButton.removeAttribute('data-closing')
      }, 100)
    }
  }

  return (
    <div
      className={cn(
        'relative flex h-fit w-fit flex-col items-end gap-1',
        className,
      )}
    >
      <button
        ref={buttonRef}
        id="orderProductsBy"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? closeFilter() : setIsOpen(true))}
        className="group peer z-10 flex items-center text-zinc-400 transition-all before:inset-0 before:-z-10 before:cursor-default before:content-normal before:bg-transparent aria-expanded:text-zinc-700 aria-expanded:before:fixed"
      >
        Organizar por:&nbsp;
        {filters.map((filter) => {
          return filter.id === filterParam ? filter.name : null
        })}
        <Icons.Chevron
          size="24px"
          className="stroke-zinc-400 group-aria-expanded:stroke-zinc-700"
        />
      </button>

      <ul
        aria-labelledby="orderProductsBy"
        className="pointer-events-auto absolute top-[calc(100%+0.25rem)] z-10 hidden flex-col gap-1 rounded bg-white p-4 opacity-0 peer-aria-expanded:flex peer-aria-expanded:animate-fadeIn peer-data-[closing]:animate-fadeOut"
      >
        {filters.map((filter) => {
          const isSelected = filterParam === filter.id
          return (
            <Option
              onSelected={() => {
                setQuery('filter', filter.id)
                closeFilter()
              }}
              selected={isSelected}
              key={filter.id}
              id={filter.id}
            >
              {filter.name}
            </Option>
          )
        })}
      </ul>
    </div>
  )
}

function Option({ children, onSelected, selected, ...props }: OptionProps) {
  return (
    <li
      {...props}
      data-selected={selected}
      className="w-fit text-zinc-400 transition-all hover:text-zinc-700 data-[selected=true]:text-zinc-700"
    >
      <button onClick={onSelected}>{children}</button>
    </li>
  )
}

const filters: Array<FiltersDataProps> = [
  { name: 'Novidades', id: 'news' },
  { name: 'Preço: Maior - menor', id: 'price-to-low' },
  { name: 'Preço: Menor - maior', id: 'price-to-high' },
  { name: 'Mais vendidos', id: 'popular' },
]
