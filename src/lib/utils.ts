import { ProductResponse, ProductsResponse, data } from '@/lib/data'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface Filters {
  category: string
  filter: string
  page: string
  query: string
}

export interface CartItem {
  id: string
  amount: number
}

export type Cart = Array<CartItem>

type fakeFetchProductsParams = (filters: Filters) => ProductsResponse

type FilterProduct = (
  filterParam: string,
  data: ProductsResponse,
) => ProductsResponse

type FilterSortFunction = (
  productA: ProductResponse,
  productB: ProductResponse,
) => number

type FilterProductData = (data: ProductsResponse) => ProductsResponse

type OrderProduct = (page: string, data: ProductsResponse) => ProductsResponse

type GetTotalPagesParams = (query: string, category: string) => number

type GeneratePaginationParams = {
  currentPage: number
  totalPages: number
  maxPagesToDisplay: number
}

export const fakeFetchProduct = (id: string) => {
  return data.find((product) => product.id === id)
}

export const fakeFetchProducts: fakeFetchProductsParams = ({
  category,
  page,
  filter,
  query,
}) => {
  const filteredData = filterProductsByQuery(
    query,
    filterProductsByCategory(category, data),
  )

  return filterProductsPerPage(
    page,
    filterProductByFilter(filter, filteredData),
  )
}

export const filterProductsByCategory: FilterProduct = (category, data) => {
  return data.filter((product) => {
    if (category === 'all') {
      return product
    } else {
      return product.category === category
    }
  })
}

export const filterProductsByQuery: FilterProduct = (query, data) => {
  return query === ''
    ? data
    : data.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      )
}

const filterProductByFilter: FilterProduct = (filter, data) => {
  switch (filter) {
    case 'price-to-low':
    case 'price-to-high':
      return filterProductByPrice(filter, data)
    case 'news':
      return filterProductByNewest(data)
    case 'popular':
      return filterProductByPopularity(data)
    default:
      return filterProductByNewest(data)
  }
}

const filterProductByNewest: FilterProductData = (data) => {
  const compareDatas: FilterSortFunction = (productA, productB) => {
    const dataA = new Date(productA.created_at).getTime()
    const dataB = new Date(productB.created_at).getTime()

    return dataB - dataA
  }

  return data.sort(compareDatas)
}

const filterProductByPopularity: FilterProductData = (data) => {
  const comparePopularity: FilterSortFunction = (productA, productB) => {
    const saleA = productA.sales
    const saleB = productB.sales

    return saleB - saleA
  }

  return data.sort(comparePopularity)
}

const filterProductByPrice: FilterProduct = (filter, data) => {
  const comparePrices: FilterSortFunction = (productA, productB) => {
    switch (filter) {
      case 'price-to-low':
        return productB.price_in_cents - productA.price_in_cents
      case 'price-to-high':
        return productA.price_in_cents - productB.price_in_cents
      default:
        return 0
    }
  }

  return data.sort(comparePrices)
}

const filterProductsPerPage: OrderProduct = (page, data) => {
  const offset =
    (Number(page) - 1) * Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE)
  const startIndex = Math.max(offset, 0)
  const endIndex = startIndex + Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE)

  return data.slice(startIndex, endIndex)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generatePagination = ({
  currentPage,
  totalPages,
  maxPagesToDisplay,
}: GeneratePaginationParams) => {
  const canAllPagesBeDisplayed = totalPages <= maxPagesToDisplay
  const isCurrentPageInFirstPages =
    currentPage <= Number(process.env.NEXT_PUBLIC_FIRST_PAGES_COUNT)
  const isCurrentPageInLastPages =
    currentPage >= totalPages - Number(process.env.NEXT_PUBLIC_LAST_PAGES_COUNT)

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

export const getTotalPages: GetTotalPagesParams = (query, category) => {
  const byQuery = filterProductsByQuery(query, data)
  return Math.ceil(
    filterProductsByCategory(category, byQuery).length /
      Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE),
  )
}
