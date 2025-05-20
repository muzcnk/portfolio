import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">MU</Link>
        <ul className="nav-links">
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/#about">Ben Kimim?</Link></li>
          <li><Link to="/#skills">Neler Yapabilirim?</Link></li>
          <li><Link to="/#projects">Portfolyo</Link></li>
          <li><Link to="/#contact">İletişim</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 