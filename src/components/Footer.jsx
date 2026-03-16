import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.outer}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <span className={styles.name}>Treena Dutta Majumdar</span>
          <span className={styles.muted}>© {new Date().getFullYear()}</span>
        </div>
        <div className={styles.right}>
          {/* EDIT: Match these to your Hero social links */}
          <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noreferrer">twitter</a>
          <a href="https://linkedin.com/in/YOUR_HANDLE" target="_blank" rel="noreferrer">linkedin</a>
          <a href="mailto:YOUR@EMAIL.COM">email</a>
        </div>
      </div>
    </footer>
  )
}
