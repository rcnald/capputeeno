'use client'

import useQueryParam from '@/hooks/useQueryParam'
import cn from '@/utils/cn'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

interface PaginationProps extends ComponentProps<'nav'> {
  className?: string
  totalPages: number
}

interface NumbersProps {
  selected: boolean
  children: number | string
  href: string
}

type GeneratePaginationParams = {
  currentPage: number
  totalPages: number
  maxPagesToDisplay: number
}

interface ArrowProps {
  direction: 'left' | 'right'
  href: string
  isDisabled: boolean
}

const FIRST_PAGES_COUNT = 5
const LAST_PAGES_COUNT = 3

export default function Pagination({ className, totalPages }: PaginationProps) {
  const { getQuery, createQuery } = useQueryParam()
  const pageQueryParam = getQuery('page', '1')
  const parsedPage = Number(pageQueryParam)
  const currentPage = parsedPage > totalPages ? 1 : parsedPage

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
            <Numbers
              href={createQuery('page', page)}
              selected={currentPage === page}
              key={i}
            >
              {page}
            </Numbers>
          )
        })}
        <Arrow
          href={createQuery('page', currentPage - 1)}
          isDisabled={currentPage <= 1}
          direction="left"
        />
        <Arrow
          href={createQuery('page', currentPage + 1)}
          isDisabled={currentPage >= totalPages}
          direction="right"
        />
      </ul>
    </nav>
  )
}

function Numbers({ selected, children, href }: NumbersProps) {
  return (
    <li className="flex">
      <Link
        href={href}
        className={cn(
          'grid aspect-square w-[40px] place-content-center rounded-lg bg-zinc-300 p-2 text-zinc-400',
          {
            'bg-orange-500 text-zinc-300': selected,
            'pointer-events-none': typeof children === 'string',
          },
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function Arrow({ direction, href, isDisabled }: ArrowProps) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'grid aspect-square w-[40px] place-content-center rounded-lg bg-zinc-300 p-2',
          { 'pointer-events-none': isDisabled },
        )}
      >
        <FaChevronLeft
          className={cn('text-xs text-zinc-400', {
            'rotate-180': direction === 'right',
          })}
        />
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
