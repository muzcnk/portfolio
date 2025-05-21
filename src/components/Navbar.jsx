import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close the mobile menu when a link is clicked
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          Mert Uzunçakmak
        </div>
        <button className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><button onClick={() => scrollToSection('home')}>Anasayfa</button></li>
          <li><button onClick={() => scrollToSection('about')}>Hakkımda</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Yetenekler</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Portfolyo</button></li>
          <li><button onClick={() => scrollToSection('contact')}>İletişim</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 