import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TechStackPage from './pages/TechStackPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tech-stack" element={<TechStackPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
