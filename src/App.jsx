import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Admin from './pages/Admin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-dark-900 overflow-x-hidden">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Education />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        } />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
