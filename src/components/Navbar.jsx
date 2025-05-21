import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => setNavOpen(!navOpen);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">Mert Uzunçakmak</span>
        <button className="navbar-hamburger" onClick={handleNav} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links${navOpen ? ' open' : ''}`}>
          <li><a href="#home" onClick={e => handleLinkClick(e, 'home')}>Anasayfa</a></li>
          <li><a href="#about" onClick={e => handleLinkClick(e, 'about')}>Hakkımda</a></li>
          <li><a href="#skills" onClick={e => handleLinkClick(e, 'skills')}>Neler Yapabilirim</a></li>
          <li><a href="#projects" onClick={e => handleLinkClick(e, 'projects')}>Portfolyo</a></li>
          <li><a href="#contact" onClick={e => handleLinkClick(e, 'contact')}>İletişim</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 