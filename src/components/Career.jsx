import styles from './Section.module.css'
import careerStyles from './Career.module.css'

// EDIT: Update this array with your actual career history.
const career = [
  {
    period: 'Dec 2022 — now',
    role: 'Senior Product Manager',
    company: "Lowe's",
    companyUrl: 'https://www.lowes.com',
    description: "Founding PM of the Enterprise Legal, Risk & Government Affairs team. Led AI initiatives (Contract Summarization, RAG, Legal Ticketing) boosting efficiency by 15%. Delivered Claims Management Platform, Internal CMS, and Fileshare App — $900K in annual cost savings. Won 'Individual Excellence Award'.",
  },
  {
    period: 'Jun 2021 — Dec 2022',
    role: 'Product Manager',
    company: 'Sprinklr',
    companyUrl: 'https://www.sprinklr.com',
    description: 'Led AI-enhanced Social Media Publishing platform for global enterprise SaaS customers. Built AI-based Smart-scheduler boosting product adoption by 35%. Ran growth experiments lifting customer retention by 70%. Led end-to-end development of Sprinklr Lite targeting 12% market expansion.',
  },
  {
    period: 'Oct 2019 — Jun 2021',
    role: 'Associate Technical Consultant',
    company: 'Dell EMC',
    companyUrl: 'https://www.dell.com',
    description: 'Achieved $600K in annual cost savings by automating Sales Order creation using RPA and UiPath. Designed end-to-end notification service using microservice architecture. Automated project management reports with Python & RPA, reducing 85% of manual tasks.',
  },
  {
    period: 'Sep 2017 — Oct 2019',
    role: 'Application Development Analyst',
    company: 'Accenture',
    companyUrl: 'https://www.accenture.com',
    description: 'Secured 5th rank in Global Accenture Innovation Contest for blockchain-based EVM whitepaper. Built automated test scripts with Selenium & JUnit, reducing manual testing by 60%. Developed robust order management and tracking systems for high-volume enterprise transactions.',
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
