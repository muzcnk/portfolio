import React, { useRef, useEffect, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting true ise element görünür alanda
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Elementin %10'u görünür olduğunda
      }
    );

    // Gözlemlemeye başla
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Component temizlendiğinde gözlemlemeyi durdur
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Boş dependency array, sadece mount edildiğinde çalışır

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section about ${isVisible ? 'is-visible' : ''}`}
    >
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