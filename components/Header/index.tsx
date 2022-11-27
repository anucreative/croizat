import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>croizat</a>
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