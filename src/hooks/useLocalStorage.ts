import { useState, useEffect } from "react"
import { getItem, setItem } from "../api/localStorage.ts"

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    const item = getItem(key)
    console.log(item)
    return (item as T) || initialValue
  })

  useEffect(() => {
    setItem(key, value)
  }, [value])

  return [value, setValue] as const
}