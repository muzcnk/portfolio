import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simüle edilmiş yükleme süresi
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
