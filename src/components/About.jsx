import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.outer} id="about">
      <div className={styles.inner}>
        <p className={styles.label}>// about me</p>
        <div className={styles.body}>
          {/*
            EDIT: Replace with your own story. 2–3 sentences works best here.
            The "Read more" link can point to a longer /about page if you have one.
          */}
          <p>
            A <span className={styles.accent}>founder</span> based in [YOUR CITY].
            I spend my time thinking about [YOUR INTERESTS / DOMAIN],
            building products that [WHAT YOUR WORK DOES / AIMS FOR].
          </p>
          <p>
            Previously, I [BRIEF PAST EXPERIENCE — company, role, or thing you built].
            Before that, [ANOTHER MILESTONE — education, early career, origin story].{' '}
            {/* EDIT: point to a longer page or remove */}
            <a href="#" className={styles.readMore}>Read more →</a>
          </p>
        </div>
      </div>
    </section>
  )
}
