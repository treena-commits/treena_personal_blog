import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>
          Treena<br />
          Dutta<br />
          <span className={styles.accent}>Majumdar.</span>
        </h1>
        <p className={styles.tagline}>
          {/* EDIT: Replace with your one-line tagline */}
          I build <span className={styles.accentText}>[what you build]</span> for [who you build for].
        </p>
        <div className={styles.actions}>
          {/* EDIT: Update your email */}
          <a href="mailto:YOUR@EMAIL.COM" className={styles.cta}>get in touch</a>
          <div className={styles.social}>
            <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noreferrer">tw</a>
            <a href="https://linkedin.com/in/YOUR_HANDLE" target="_blank" rel="noreferrer">li</a>
            <a href="https://github.com/YOUR_HANDLE" target="_blank" rel="noreferrer">gh</a>
          </div>
        </div>
      </div>

      <div className={styles.photoWrap}>
        {/*
          EDIT: Replace the placeholder below with your actual photo:
            <img src="/your-photo.jpg" alt="Treena Dutta Majumdar" className={styles.photo} />
          Place the image in the /public folder.
        */}
        <div className={styles.photoPlaceholder}>
          <span className={styles.photoIcon}>[ ]</span>
          <span className={styles.photoLabel}>your photo</span>
        </div>
      </div>
    </section>
  )
}
