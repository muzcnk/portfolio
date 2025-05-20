import React from 'react';
import { FaReact, FaFirebase, FaRobot } from 'react-icons/fa';
import { SiElectron, SiOpenai } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'Masaüstü Chatbot Uygulaması',
      description: 'OpenAI API, Firebase, React ve Electron kullanarak masaüstü bir chatbot uygulaması geliştirdik.',
      image: '/assets/bgc.jpg',
      features: [
        'OpenAI API entegrasyonu',
        'Firebase ile veri yönetimi',
        'React ve Electron ile masaüstü uygulaması',
        'Gerçek zamanlı sohbet özelliği'
      ],
      technologies: [
        { icon: <FaReact />, name: 'React' },
        { icon: <FaFirebase />, name: 'Firebase' },
        { icon: <SiElectron />, name: 'Electron' },
        { icon: <SiOpenai />, name: 'OpenAI' }
      ]
    },
    {
      title: 'Basit Todo Uygulaması',
      description: 'Kullanıcıların kayıt olup giriş yapabildiği, yapılacaklar listesi oluşturabildiği bir uygulama.',
      image: '/assets/bgc.jpg',
      features: [
        'Kullanıcı kimlik doğrulama',
        'Yerel veri depolama',
        'Güvenli ve kullanıcı dostu arayüz',
        'Görev yönetimi özellikleri'
      ],
      technologies: [
        { icon: <FaReact />, name: 'React' },
        { icon: <FaDatabase />, name: 'Local Storage' }
      ]
    }
  ];

  return (
    <section id="projects" className="section fade-in">
      <div className="container">
        <h2 className="section-title">Portfolyo</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in">
              <div 
                className="project-image" 
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-features">
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tag">
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 