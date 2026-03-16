import styles from './Section.module.css'
import careerStyles from './Career.module.css'

// EDIT: Update this array with your actual career history.
const career = [
  {
    period: '20XX — now',
    role: 'Founder & CEO',
    company: 'Your Company',
    companyUrl: 'https://yourcompany.com',
    description: 'One or two lines describing what you built / led / achieved here.',
  },
  {
    period: '20XX — 20XX',
    role: 'Your Role',
    company: 'Previous Company',
    companyUrl: null,
    description: 'Brief description of your responsibilities and impact.',
  },
  {
    period: '20XX — 20XX',
    role: 'Your Role',
    company: 'Earlier Company',
    companyUrl: null,
    description: 'Brief description of what you did here.',
  },
  {
    period: '20XX — 20XX',
    role: 'Intern / Early Role',
    company: 'First Company',
    companyUrl: null,
    description: 'Where it all started.',
  },
]

export default function Career() {
  return (
    <section className={styles.section} id="career">
      <h2 className={styles.heading}>career</h2>
      <div className={careerStyles.timeline}>
        {career.map((item, i) => (
          <div key={i} className={careerStyles.entry}>
            <span className={careerStyles.period}>{item.period}</span>
            <div className={careerStyles.details}>
              <p className={careerStyles.role}>{item.role}</p>
              {item.companyUrl ? (
                <a href={item.companyUrl} target="_blank" rel="noreferrer" className={careerStyles.company}>
                  {item.company}
                </a>
              ) : (
                <span className={careerStyles.companyPlain}>{item.company}</span>
              )}
              <p className={careerStyles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
