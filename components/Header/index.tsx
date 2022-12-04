'use client'

import { useEffect, useState } from 'react'

import styles from './styles.module.css'

export function Header() {
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

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}><img src="./logo.svg" alt="Croizat" /></a>
      <label className={styles.trigger} htmlFor="side-menu">&#8801;</label>
      <input className={styles.checkbox} type="checkbox" id="side-menu" />
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li><a href="#horaires-et-acces">Horaires et accès</a></li>
          <li><a href="#la-salle">La salle</a> </li>
          <li><a href="#tarifs">Tarifs</a></li>
          <li><a href="#evenements">Évènements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}