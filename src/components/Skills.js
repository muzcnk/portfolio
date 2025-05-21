import React from 'react';
import { FaCode, FaMobileAlt, FaDatabase, FaUsers, FaPython, FaJava, FaJs, FaCuttlefish } from 'react-icons/fa';
import '../styles/Skills.css';

const skills = [
  {
    icon: <FaCode />, title: 'Web Geliştirme',
    desc: 'HTML, CSS ve JavaScript ile modern ve responsive web uygulamaları geliştiriyorum.'
  },
  {
    icon: <FaMobileAlt />, title: 'Mobil Uygulama Geliştirme (Flutter)',
    desc: 'Flutter ile cross-platform mobil uygulamalar geliştiriyorum.'
  },
  {
    icon: <FaDatabase />, title: 'Veritabanı Yönetimi (MsSQL)',
    desc: 'MsSQL ile veritabanı yönetimi ve optimizasyonu yapıyorum.'
  },
  {
    icon: <FaUsers />, title: 'Takım Çalışmalarına Uyum',
    desc: 'Takım çalışmasına uyumlu ve sürekli öğrenmeye açık bir yapıya sahibim.'
  },
  {
    icon: <FaPython />, title: 'Python',
    desc: 'Temel düzeyde Python bilgisi ve uygulama geliştirme deneyimi.'
  },
  {
    icon: <FaCuttlefish />, title: 'C#',
    desc: 'Temel düzeyde C# bilgisi ve uygulama geliştirme deneyimi.'
  },
  {
    icon: <FaJava />, title: 'Java',
    desc: 'Temel düzeyde Java bilgisi ve uygulama geliştirme deneyimi.'
  },
  {
    icon: <FaJs />, title: 'JavaScript',
    desc: 'Temel düzeyde JavaScript bilgisi ve uygulama geliştirme deneyimi.'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="skills-container">
        <h2 className="section-title">Neler Yapabilirim?</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 