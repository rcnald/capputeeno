import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type getQueryParams = (query: string, defaultValue?: string) => string
type setQueryParams = (query: string, value: string) => void

type useQueryParamParams = () => [getQueryParams, setQueryParams]

const useQueryParam: useQueryParamParams = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const setQuery: setQueryParams = (query, value) => {
    const params = new URLSearchParams(searchParams)
    query ? params.set(query, value) : params.delete(query)
    replace(`${pathname}?${params.toString()}`)
  }

  const getQuery: getQueryParams = (query, defaultValue = '') => {
    return searchParams.get(query) ?? defaultValue
  }

  return [getQuery, setQuery]
}

export default useQueryParam
