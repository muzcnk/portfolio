import React from 'react';
import { FaPython, FaJava, FaJs, FaDatabase, FaMobile } from 'react-icons/fa';
import { SiCsharp, SiFlutter } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiCsharp />, name: 'C#' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaJs />, name: 'JavaScript' },
    
    { icon: <SiFlutter />, name: 'Flutter' },
    { icon: <FaMobile />, name: 'Mobile Development' }
  ];

  return (
    <section id="skills" className="section fade-in">
      <div className="container">
        <h2 className="section-title">Neler Yapabilirim?</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card fade-in">
              {skill.icon}
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 