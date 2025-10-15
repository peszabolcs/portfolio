import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
