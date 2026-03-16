import styles from './Section.module.css'
import blogStyles from './Blog.module.css'

const BLOG_URL = 'https://substack.com/@treenaduttamajumdar/posts'

const posts = [
  {
    title: 'Why DeepMind\'s New FACTS Benchmark Matters for the Future of Trustworthy AI',
    date: 'Dec 2025',
    url: 'https://treenaduttamajumdar.substack.com/p/why-deepminds-new-facts-benchmark',
    preview: 'Large language models have become powerful tools for learning, creativity, and analysis. Yet one issue continues to undermine their reliability: factual accuracy.',
  },
  {
    title: 'Evaluating AI Agents: How to Build Reliable, Enterprise-Grade Systems',
    date: 'Nov 2025',
    url: 'https://treenaduttamajumdar.substack.com/p/evaluating-ai-agents-how-to-build',
    preview: 'AI agents are moving from impressive demos to real production systems. And as they do, teams are discovering something unexpected: agents can fail even when nothing is "broken."',
  },
  {
    title: 'EU AI Act: World\'s First AI Law and What It Means for Builders Targeting Europe',
    date: 'Nov 2025',
    url: 'https://treenaduttamajumdar.substack.com/p/eu-ai-act-worlds-first-ai-law-and',
    preview: 'For founders and tech leaders building for Europe, this breaks down the AI landscape, key laws, and how to move forward with confidence.',
  },
  {
    title: 'All You Need To Know About Context Engineering',
    date: 'Nov 2025',
    url: 'https://treenaduttamajumdar.substack.com/p/all-you-need-to-know-about-context',
    preview: 'LLMs experience "context rot" — losing focus when presented with excessive information. Careful curation of what enters the context window is now essential.',
  },
  {
    title: 'Finding Product-Market Fit in the Gen AI Era: A Founder\'s Guide',
    date: 'Aug 2025',
    url: 'https://treenaduttamajumdar.substack.com/p/finding-product-market-fit-in-the',
    preview: 'You\'ve built something brilliant. It\'s powered by the latest models, it\'s fast, and in your head, it works flawlessly. But when you launch, you\'re met with the deafening sound of silence.',
  },
]

export default function Blog() {
  return (
    <section className={styles.section} id="blog">
      <h2 className={styles.heading}>writing</h2>
      {posts.length > 0 && (
        <ul className={blogStyles.list}>
          {posts.map((post, i) => (
            <li key={i} className={blogStyles.item}>
              <a href={post.url} target="_blank" rel="noreferrer" className={blogStyles.postLink}>
                <div className={blogStyles.postMeta}>
                  <span className={blogStyles.postTitle}>{post.title}</span>
                  <span className={blogStyles.date}>{post.date}</span>
                </div>
                {post.preview && <p className={blogStyles.preview}>{post.preview}</p>}
              </a>
            </li>
          ))}
        </ul>
      )}
      <p className={blogStyles.cta}>
        <a href={BLOG_URL} target="_blank" rel="noreferrer">
          read all posts →
        </a>
      </p>
    </section>
  )
}
