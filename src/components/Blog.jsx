import styles from './Section.module.css'
import blogStyles from './Blog.module.css'

// EDIT: Replace with your actual blog URL and recent posts.
// If you don't have a blog yet, leave `posts` empty and just set the link.
const BLOG_URL = 'https://yourblog.com' // EDIT: your blog URL

const posts = [
  // EDIT: Add your recent posts here. Remove this array if you only want the link.
  {
    title: 'Your most recent post title',
    date: 'Month 20XX',
    url: 'https://yourblog.com/post-slug',
  },
  {
    title: 'Another post you wrote',
    date: 'Month 20XX',
    url: 'https://yourblog.com/another-post',
  },
  {
    title: 'An older post',
    date: 'Month 20XX',
    url: 'https://yourblog.com/older-post',
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
              <a href={post.url} target="_blank" rel="noreferrer" className={blogStyles.postTitle}>
                {post.title}
              </a>
              <span className={blogStyles.date}>{post.date}</span>
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
