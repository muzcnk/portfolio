import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + 200

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo minimal-font">
          Mert Uzunçakmak
        </div>
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Ana Sayfa</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>Ben Kimim?</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={closeMenu}>Neler Yapabilirim?</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={closeMenu}>Portfolyo</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>İletişim</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 