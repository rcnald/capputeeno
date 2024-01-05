'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ComponentProps, useLayoutEffect, useRef } from 'react'

interface SectionProps extends ComponentProps<'li'> {
  children: string
  selected?: boolean
  onSelected: () => void
}

interface SectionData {
  category: string
  name: string
}

export default function Sections() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  function handleSelected(category: string) {
    const params = new URLSearchParams(searchParams)
    category ? params.set('category', category) : params.delete('category')
    replace(`${pathname}?${params.toString()}`)
  }

  function syncSelector(category: string) {
    const item = document.getElementById(category)
    const parent = ref.current?.parentElement

    if (ref.current && item && parent) {
      const parentRect = parent.getBoundingClientRect()
      const { width = 0, left = 0 } = item.getBoundingClientRect()

      const widthPercentage = (width / parentRect.width) * 100
      const leftPercentage = ((left - parentRect.left) / parentRect.width) * 100

      ref.current.style.width = `${widthPercentage}%`
      ref.current.style.left = `${leftPercentage}%`
    }
  }

  useLayoutEffect(() => {
    syncSelector(searchParams.get('category') ?? 'all')
  }, [searchParams])

  return (
    <nav className=" relative flex size-fit list-none gap-4 text-base font-normal text-zinc-400">
      {sections.map((section) => {
        const isSelected =
          (searchParams.get('category') ?? 'all') === section.category

        return (
          <Section
            onSelected={() => {
              handleSelected(section.category)
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
        className="absolute top-full h-1 w-full bg-orange-400 transition-all duration-300"
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

const sections: Array<SectionData> = [
  { category: 'all', name: 'todos os produtos' },
  { category: 't-shirts', name: 'camisetas' },
  { category: 'mugs', name: 'canecas' },
]
