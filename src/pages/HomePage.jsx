import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Pricing />
      <About />
      <Contact />
    </main>
  )
}

export default HomePage
