'use client'

import useQueryParam from '@/hooks/useQueryParam'
import { data } from '@/lib/data'
import { filterProductsByCategory } from '@/lib/utils'
import cn from '@/utils/cn'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

interface PaginationProps extends ComponentProps<'nav'> {
  className?: string
}

interface PaginationLinkProps {
  href: string
  isDisabled?: boolean
  selected?: boolean
  children?: React.ReactNode
  direction?: 'left' | 'right'
}

type GetTotalPagesParams = (filter: string) => number

type GeneratePaginationParams = {
  currentPage: number
  totalPages: number
  maxPagesToDisplay: number
}

const ITEMS_PER_PAGE = 12
const FIRST_PAGES_COUNT = 5
const LAST_PAGES_COUNT = 3

export default function Pagination({ className }: PaginationProps) {
  const { getQuery, createQuery, setQuery } = useQueryParam()
  let currentPage = Number(getQuery('page', '1'))
  const totalPages = getTotalPages(getQuery('category', 'all'))
  if (currentPage > totalPages) {
    setQuery('page', '1')
    currentPage = Number(getQuery('page', '1'))
  }

  const allPages = generatePagination({
    currentPage,
    totalPages,
    maxPagesToDisplay: 8,
  })

  return (
    <nav className={cn('', className)}>
      <ul className="flex gap-1">
        {allPages.map((page, i) => {
          return (
            <PaginationLink
              href={createQuery('page', page)}
              selected={currentPage === page}
              key={i}
            >
              {page}
            </PaginationLink>
          )
        })}
        <PaginationLink
          href={createQuery('page', currentPage - 1)}
          isDisabled={currentPage <= 1}
          direction="left"
        />
        <PaginationLink
          href={createQuery('page', currentPage + 1)}
          isDisabled={currentPage >= totalPages}
          direction="right"
        />
      </ul>
    </nav>
  )
}

function PaginationLink({
  href,
  isDisabled,
  selected,
  children,
  direction,
}: PaginationLinkProps) {
  const isArrow = direction === 'left' || direction === 'right'

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'group grid aspect-square w-[40px] place-content-center rounded-lg bg-zinc-300 p-2 transition-all hover:bg-zinc-400',
          {
            'hover:brightness-105': !isArrow,
            'pointer-events-none': isDisabled,
            'bg-orange-500 text-zinc-300': selected && !isArrow,
          },
        )}
      >
        {isArrow ? (
          <FaChevronLeft
            className={cn('text-xs text-zinc-400 group-hover:text-zinc-200', {
              'rotate-180': direction === 'right',
            })}
          />
        ) : (
          children
        )}
      </Link>
    </li>
  )
}

const generatePagination = ({
  currentPage,
  totalPages,
  maxPagesToDisplay,
}: GeneratePaginationParams) => {
  const canAllPagesBeDisplayed = totalPages <= maxPagesToDisplay
  const isCurrentPageInFirstPages = currentPage <= FIRST_PAGES_COUNT
  const isCurrentPageInLastPages = currentPage >= totalPages - LAST_PAGES_COUNT

  if (canAllPagesBeDisplayed) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  if (isCurrentPageInFirstPages) {
    return [1, 2, 3, 4, 5, 6, '...', totalPages]
  }

  if (isCurrentPageInLastPages) {
    return [
      1,
      2,
      '...',
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ]
  }
  return [
    1,
    2,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ]
}

const getTotalPages: GetTotalPagesParams = (filter) => {
  return Math.ceil(
    filterProductsByCategory(filter, data).length / ITEMS_PER_PAGE,
  )
}
