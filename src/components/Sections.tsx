'use client'

import useQueryParam from '@/hooks/useQueryParam'
import { sections } from '@/lib/data'

import { ComponentProps, useLayoutEffect, useRef } from 'react'

interface SectionProps extends ComponentProps<'li'> {
  children: string
  selected?: boolean
  onSelected: () => void
}

export default function Sections() {
  const { getQuery, setQuery } = useQueryParam()
  const ref = useRef<HTMLDivElement>(null)
  const categoryParam = getQuery('category', 'all')

  function syncSelector(category: string) {
    const item = document.getElementById(category)
    const parent = ref.current?.parentElement

    if (ref.current && item && parent) {
      const parentRect = parent.getBoundingClientRect()
      const itemRect = item.getBoundingClientRect()

      const width = (itemRect.width / parentRect.width) * 100
      const left = ((itemRect.left - parentRect.left) / parentRect.width) * 100

      ref.current.style.width = `${width}%`
      ref.current.style.left = `${left}%`
    }
  }

  useLayoutEffect(() => {
    syncSelector(categoryParam)
  }, [categoryParam])

  return (
    <nav className=" relative flex size-fit list-none gap-4 text-base font-normal text-zinc-400">
      {sections.map((section) => {
        const isSelected = categoryParam === section.category

        return (
          <Section
            onSelected={() => {
              setQuery('category', section.category)
            }}
            selected={isSelected}
            id={section.category}
            key={section.category}
          >
            {section.name}
          </Section>
        )
      })}

      <div
        ref={ref}
        className="absolute top-full h-1 w-0 bg-orange-400 transition-all duration-300"
      ></div>
    </nav>
  )
}

function Section({ children, selected, onSelected, ...props }: SectionProps) {
  return (
    <li
      {...props}
      data-selected={selected}
      onClick={onSelected}
      className="w-fit transition-all duration-300 after:h-1 data-[selected=true]:text-zinc-700"
    >
      <button className="uppercase">{children}</button>
    </li>
  )
}
