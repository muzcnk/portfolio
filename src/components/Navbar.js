import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';

const navItems = [
  { label: 'Ana Sayfa', to: 'home' },
  { label: 'Ben Kimim?', to: 'about' },
  { label: 'Neler Yapabilirim?', to: 'skills' },
  { label: 'Portfolyo', to: 'projects' },
  { label: 'İletişim', to: 'contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Mert Uzunçakmak
        </a>
        <div className="navbar-hamburger" onClick={handleMenuToggle}>
          <FaBars />
        </div>
        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          {navItems.map((item) => (
            <li className="nav-item" key={item.to}>
              <ScrollLink
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link"
                onClick={handleLinkClick}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
