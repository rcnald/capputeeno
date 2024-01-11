import { ProductResponse, ProductsResponse, data } from '@/lib/data'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
type fakeFetchProductsParams = (
  category: string,
  page: string,
  filter: string,
) => ProductsResponse

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

const ITEMS_PER_PAGE = 12

export const fakeFetchProducts: fakeFetchProductsParams = (
  category,
  page,
  filter,
) => {
  const dataFilteredByCategory = filterProductsByCategory(category, data)
  const dataFilterByFilter = filterProductByFilter(
    filter,
    dataFilteredByCategory,
  )

  return filterProductsPerPage(page, dataFilterByFilter)
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

export const filterProductByFilter: FilterProduct = (filter, data) => {
  switch (filter) {
    case 'price-to-low':
      return filterProductByPrice('price-to-low', data)
    case 'price-to-high':
      return filterProductByPrice('price-to-high', data)
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
  return data.sort(comparePrices).map((product) => product)
}

export const filterProductsPerPage: OrderProduct = (page, data) => {
  const offset = (Number(page) - 1) * ITEMS_PER_PAGE
  let count = 0
  return data.filter((product, i) => {
    if (i >= offset && count < ITEMS_PER_PAGE) {
      count++
      return product
    } else {
      return null
    }
  })
}
