import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.outer} id="about">
      <div className={styles.inner}>
        <p className={styles.label}>// About me</p>
        <div className={styles.body}>
          <p className={styles.sectionHeading}>Who am I?</p>
          <p>I don’t have a fixed answer to that.</p>
          <p>My identity keeps evolving as I throw myself into new domains, learn fast, and try to solve problems I don’t yet understand.</p>

          <p className={styles.sectionHeading}>What I do</p>
          <p>Engineer → Product Manager → Founder.<br />Now building Adlily.pro and EnterwiseAI.</p>
          <p>I’m drawn to problems where technology can meaningfully change how things work—especially where there’s a gap between how businesses operate and what’s actually possible.</p>

          <p className={styles.sectionHeading}>How I think</p>
          <p>I’m driven by curiosity and a need to understand things deeply.</p>
          <p>I like going to first principles, breaking problems down, and rebuilding them in better ways.<br />I dive deep like a researcher, but build with a strong sense of user empathy.</p>
          <p>I’m a generalist by design—comfortable entering new domains, learning fast, and figuring things out from scratch.</p>

          <p className={styles.sectionHeading}>What drives me</p>
          <p>Technology fascinates me in a very raw way.<br />I get most excited when I’m learning something new, building something, exploring the unknown, or solving a problem that doesn’t have a clear answer yet.</p>
          <p>Being a founder has been humbling.<br />It constantly reminds me how much there is still to learn, build, and figure out.<br />And that’s exactly what keeps me going.</p>
        </div>
      </div>
    </section>
  )
}
