import { RefObject, useEffect, useState } from 'react'

export function useIsInViewport(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  let observer: IntersectionObserver | null = null

  if (typeof window !== 'undefined') {
    // The code inside brackets will be executed ONLY in browser

    observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    )
  }

  useEffect(() => {
    if (ref.current) observer?.observe(ref.current)

    return () => {
      observer?.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
