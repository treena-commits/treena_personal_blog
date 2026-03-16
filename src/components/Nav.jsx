import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.name}>
        <a href="#top">tdm</a>
      </span>
      <ul className={styles.links}>
        <li><a href="#about">about</a></li>
        <li><a href="#career">career</a></li>
        <li><a href="#books">books</a></li>
        <li><a href="#blog">blog</a></li>
      </ul>
    </nav>
  )
}
