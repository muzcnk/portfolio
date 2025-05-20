import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

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
