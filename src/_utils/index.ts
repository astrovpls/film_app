import React from 'react'
import { useLocation } from 'react-router-dom'

export const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
}: {
  target: {
    current: Element
  }
  onIntersect: () => void
  threshold: number
  rootMargin: string
}) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    })
    const { current } = target
    observer.observe(current)
    return () => {
      observer.unobserve(current)
    }
  })
}
export default useIntersectionObserver
