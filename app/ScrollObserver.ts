
'use client'

import { useEffect, useState } from 'react'

export function ScrollObserver() {
  const [isScrolled, setIsScrolled] = useState(false)
  const target = typeof window !== 'undefined' ? window.document.body : null
  console.debug('ScrollObserver.1', { isScrolled, target })

  useEffect(() => {
    console.debug('ScrollObserver.2', target)
    if (!target) {
      return
    }

    const observer = new IntersectionObserver(
      ([e]) => setIsScrolled(e.boundingClientRect.y > 70)
    )

    console.debug('ScrollObserver.3', { isScrolled })

    observer.observe(target)
    return () => observer.unobserve(target)
  })

  return null
}