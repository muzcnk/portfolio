import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const fullText = 'Mert Uzunçakmak';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="section home-section fade-in">
      <div className="container">
        <h1 className="animated-title">{displayedText}</h1>
        <p className="subtitle">Bilgisayar Mühendisliği Öğrencisi & Yazılım Geliştirici</p>
        <div className="social-links">
          <a href="mailto:mertuzuncakmakceng@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/muzcnk" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mert-uzuncakmak/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home; 