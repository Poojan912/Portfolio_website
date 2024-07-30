import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'ABC Corp',
    duration: 'Jan 2020 - Jun 2020',
    description: 'Developed and maintained various software applications, collaborated with the development team to implement new features.',
    image: 'abc_corp.png',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Frontend Developer Intern',
    company: 'XYZ Ltd',
    duration: 'Jun 2018 - Dec 2018',
    description: 'Built responsive and user-friendly web interfaces using modern frontend technologies, optimized website performance.',
    image: 'xyz_ltd.png',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
];

const Experience = React.forwardRef((props, ref) => {
  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <h2 className="section-title">Experience</h2>
      <div className="experience-scroll-container">
        {experiences.map((experience, index) => (
          <div className={`experience-card ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
            <div className="experience-content">
              <div className="experience-description">
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-company">{experience.company}</p>
                <p className="experience-duration">{experience.duration}</p>
                <p className="experience-text">{experience.description}</p>
                <div className="experience-technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="experience-image-container">
                <img src={experience.image} alt={experience.title} className="experience-image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Experience;
