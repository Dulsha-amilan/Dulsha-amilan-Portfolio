import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
const App = () => {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
