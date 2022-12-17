'use client'

import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.css'

const options = { threshold: [0, 0.9] }

export function Header() {
  const [isScrolled, setIsScrolled] = useState('')

  const headerRef = useRef<HTMLElement>(null)

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {

      if (entry.target.id === 'banner') {
        if (entry.isIntersecting) {
          headerRef.current?.classList.remove(styles.scrolled)
        } else {
          headerRef.current?.classList.add(styles.scrolled)
        }
        return
      }

      if (entry.isIntersecting) {
        setIsScrolled(entry.target.id)
      }

    })
  }

  useEffect(() => {
    const sections: Element[] = [document.querySelector('#banner'), ...document.querySelectorAll('.section')].filter(Boolean)

    const observer = new IntersectionObserver(handleIntersect, options)

    sections.forEach((section) => {
      observer.observe(section)
    })

    // Detach listener
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])



  const links = [
    { link: "horaires-et-acces", title: "Horaires et accès" },
    { link: "la-salle", title: "La salle" },
    { link: "tarifs", title: "Tarifs" },
    { link: "events", title: "Évènements" },
    { link: "contact", title: "Contact" },
  ]

  return (
    <>
      <header ref={headerRef} className={styles.header}>
        <a href="/" className={styles.logo}><img src="/logo.svg" alt="Croizat" /></a>
        <label className={styles.trigger} htmlFor="side-menu">&#8801;</label>
        <input className={styles.checkbox} type="checkbox" id="side-menu" />
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {links.map(item => {
              let className = styles.item
              if (isScrolled === item.link) {
                className = `${className} ${styles.selected}`
              }
              return (
                <li key={item.link}><a className={className} href={item.link}>{item.title}</a></li>
              )
            })}
          </ul>
        </nav>
      </header>
    </>
  )
}