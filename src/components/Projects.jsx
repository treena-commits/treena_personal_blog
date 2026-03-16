import styles from './Section.module.css'
import careerStyles from './Career.module.css'

const projects = [
  {
    name: 'ReferralHub',
    tagline: 'AI-powered marketplace for job referrals',
    description: 'Built a production-ready job referral platform using AI tools and models. Reached 100+ active users in 2 weeks.',
    tech: 'Replit, OpenAI APIs, Claude 3.5 Sonnet',
    url: null,
  },
  {
    name: 'PDF Q&A Tool',
    tagline: 'RAG & LLM-based document Q&A',
    description: 'Built an advanced Q&A system leveraging Retrieval-Augmented Generation (RAG) and Large Language Models for intelligent document querying.',
    tech: 'HuggingFace, RAG, Llama Index, LLM',
    url: null,
  },
  {
    name: 'AI Product Consulting: Substack Newsletter',
    tagline: 'Simplifying AI for business leaders',
    description: 'Authored and launched a newsletter breaking down complex AI concepts (LLMs, RAG, Agents) for business leaders and product managers.',
    tech: null,
    url: null,
  },
  {
    name: 'IBM Watson AI Chatbot POC',
    tagline: 'Real-time order tracking via conversational AI',
    description: 'Built a proof-of-concept chatbot to enable real-time order tracking. Estimated to improve customer satisfaction and streamline support by 15%.',
    tech: 'IBM Watson, Java, Spring Boot, IBM Sterling, Jenkins',
    url: null,
  },
]

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.heading}>projects</h2>
      <div className={careerStyles.timeline}>
        {projects.map((item, i) => (
          <div key={i} className={careerStyles.entry}>
            <span className={careerStyles.period}>{item.tech || '—'}</span>
            <div className={careerStyles.details}>
              <p className={careerStyles.role}>{item.name}</p>
              <span className={careerStyles.companyPlain}>{item.tagline}</span>
              <p className={careerStyles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
