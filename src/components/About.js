import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">Ben Kimim?</h2>
        <div className="about-content">
          <p className="about-text">
            Ben Mert Uzunçakmak, Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Yazılım alanında kendimi geliştiriyorum. Python, C#, Java, JavaScript dillerinde temel bilgiye sahibim. MsSQL veritabanı konusunda bilgim var. Flutter ile mobil uygulamalar geliştiriyorum. Öğrendiklerimi gerçek projelerde uygulayarak gelişmek istiyorum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 