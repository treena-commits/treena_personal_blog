import styles from './Section.module.css'
import bookStyles from './Books.module.css'

// EDIT: Replace with books you've actually read.
// Set `current: true` for the one you're reading now.
// `note` is optional — a one-liner on why you liked it.
const books = [
  {
    title: 'The book you are reading right now',
    author: 'Author Name',
    year: '2024',
    current: true,
    note: null,
  },
  {
    title: 'Book Title',
    author: 'Author Name',
    year: '2023',
    current: false,
    note: 'One sentence on why this book stuck with you.',
  },
  {
    title: 'Book Title',
    author: 'Author Name',
    year: '2023',
    current: false,
    note: null,
  },
  {
    title: 'Book Title',
    author: 'Author Name',
    year: '2022',
    current: false,
    note: 'Optional: something it changed about how you think.',
  },
  {
    title: 'Book Title',
    author: 'Author Name',
    year: '2022',
    current: false,
    note: null,
  },
  {
    title: 'Book Title',
    author: 'Author Name',
    year: '2021',
    current: false,
    note: null,
  },
]

export default function Books() {
  return (
    <section className={styles.section} id="books">
      <h2 className={styles.heading}>books i've read</h2>
      <ul className={bookStyles.list}>
        {books.map((book, i) => (
          <li key={i} className={bookStyles.item}>
            <div className={bookStyles.meta}>
              <span className={bookStyles.title}>
                {book.title}
                {book.current && (
                  <span className={bookStyles.badge}>reading</span>
                )}
              </span>
              <span className={bookStyles.author}>
                {book.author} · {book.year}
              </span>
            </div>
            {book.note && (
              <p className={bookStyles.note}>{book.note}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
