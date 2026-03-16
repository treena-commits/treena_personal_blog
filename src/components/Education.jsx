import styles from './Section.module.css'
import careerStyles from './Career.module.css'

const education = [
  {
    period: 'Aug 2013 — Sep 2017',
    degree: 'B.E. in Information Science & Engineering',
    institution: 'Sir M. Visvesvaraya Institute of Technology (Sir MVIT)',
    location: 'Bangalore',
    note: 'GPA: 70%',
  },
]

const certifications = [
  { name: 'Generative AI with LLMs', issuer: 'DeepLearning.AI', year: '2024' },
  { name: 'Grokking AI for Engineers and Product Managers', issuer: 'Educative.io', year: '2023' },
  { name: 'Design Principles for Machine Learning Framework', issuer: 'Pluralsight', year: '2023' },
  { name: 'Lean Product Management', issuer: 'Educative.io', year: '2023' },
  { name: 'Product Management for AI and Data Science', issuer: 'Udemy', year: '2022' },
]

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <h2 className={styles.heading}>education</h2>
      <div className={careerStyles.timeline}>
        {education.map((item, i) => (
          <div key={i} className={careerStyles.entry}>
            <span className={careerStyles.period}>{item.period}</span>
            <div className={careerStyles.details}>
              <p className={careerStyles.role}>{item.degree}</p>
              <span className={careerStyles.companyPlain}>{item.institution}</span>
              <p className={careerStyles.description}>{item.location} · {item.note}</p>
            </div>
          </div>
        ))}
        {certifications.map((cert, i) => (
          <div key={`cert-${i}`} className={careerStyles.entry}>
            <span className={careerStyles.period}>{cert.year}</span>
            <div className={careerStyles.details}>
              <p className={careerStyles.role}>{cert.name}</p>
              <span className={careerStyles.companyPlain}>{cert.issuer}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
