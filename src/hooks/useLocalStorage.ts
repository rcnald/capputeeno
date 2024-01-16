export function useLocalStorage<T>(
  key: string,
  defaltValue: T,
): [T, (value: T) => void, () => void] {
  const setItem = (value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  const getItem: () => T = () => {
    try {
      const item = localStorage.getItem(key)
      if (item) {
        return JSON.parse(item)
      } else {
        return defaltValue
      }
    } catch (error) {
      console.log(error)
    }
  }

  const removeItem = () => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  }

  const value = getItem()

  return [value, setItem, removeItem]
}
