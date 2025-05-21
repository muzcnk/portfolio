import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="section home">
      <div className="home-container">
        <h1 className="home-title">Mert Uzunçakmak</h1>
        <p className="home-subtitle">Bilgisayar Mühendisliği Öğrencisi &amp; Flutter Developer</p>
        <div className="home-description">
          <p>
            
            Flutter ile cross-platform uygulamalar üretiyor ve sürekli kendimi geliştiriyorum.
          </p>
        </div>
        <div className="home-buttons">
          <button onClick={() => scrollToSection('projects')} className="btn primary">
            Projelerimi Gör
          </button>
          <button onClick={() => scrollToSection('contact')} className="btn secondary">
            İletişime Geç
          </button>
        </div>
        <div className="social-links">
          <a href="mailto:mertuzuncakmakceng@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="E-posta">
            <FaEnvelope />
          </a>
          <a href="https://github.com/muzcnk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mert-uzuncakmak/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home; 