import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type getQueryParams = (query: string, defaultValue?: string) => string
type setQueryParams = (query: string, value: string) => void
type createQueryParams = (query: string, value: string | number) => string

type useQueryParamParams = () => {
  getQuery: getQueryParams
  setQuery: setQueryParams
  createQuery: createQueryParams
}

const useQueryParam: useQueryParamParams = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const setQuery: setQueryParams = (query, value) => {
    const params = new URLSearchParams(searchParams)
    value ? params.set(query, value) : params.delete(query)
    replace(`${pathname}?${params.toString()}`)
  }

  const getQuery: getQueryParams = (query, defaultValue = '') => {
    return searchParams.get(query) ?? defaultValue
  }

  const createQuery: createQueryParams = (query, _value) => {
    let value = ''
    if (typeof _value === 'number') value = _value.toString()
    const params = new URLSearchParams(searchParams)
    value ? params.set(query, value) : params.delete(query)
    return `${pathname}?${params.toString()}`
  }

  return { getQuery, setQuery, createQuery }
}

export default useQueryParam
