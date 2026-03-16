import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Books from './components/Books'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Career />
        <Books />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
