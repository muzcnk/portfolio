import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Masaüstü Chatbot Uygulaması',
    description:
      'OpenAI API, Firebase, React ve Electron kullanılarak yapay zekâ destekli bir masaüstü sohbet uygulaması.',
    technologies: ['React', 'Electron', 'Firebase', 'OpenAI API'],
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    github: '#',
    live: '#',
  },
  {
    title: 'Todo Uygulaması',
    description:
      'Kullanıcı dostu arayüze sahip, güvenli ve modern bir yapılacaklar listesi uygulaması.',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Portfolyo</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, tIdx) => (
                    <span className="technology-tag" key={tIdx}>{tech}</span>
                  ))}
                </div>
                {/*
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    Canlı Demo
                  </a>
                </div>
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 