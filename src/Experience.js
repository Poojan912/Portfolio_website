import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Android Developer Trainee, Full-Time',
    company: 'ZetrixWeb Infotech LLP, Ahmedabad, India',
    duration: 'Feb 2023 - Apr 2023',
    description: 'Develop, update, test, debug, and troubleshoot Android applications using Kotlin and Java Programming Language in Android Studio.',
    technologies: ['Android Studio', 'Java', 'Kotlin','Firebase','JetPack Compose'],
    className: 'experience-android' // Unique class
  },
  {
    title: 'Java Developer',
    company: 'Next Technolabs LLP, Ahmedabad, India',
    duration: 'Jun 2022 - Jul 2022',
    description: 'Built responsiveDesign, maintain, and build reusable, efficient, and reliable Java code, incorporating Hibernate and Spring, while also assisting in maintaining and updating existing applications and modules and user-friendly web interfaces using modern frontend technologies, optimized website performance.',
    technologies: ['HTML', 'CSS', 'Java','Hibernate','Spring Boot','MySql'],
    className: 'experience-java' // Unique class
  },
];

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Java', 'Spring Boot', 'Kotlin', 'Android Studio', 'Firebase', 'JetPack Compose'
];

const Experience = React.forwardRef((props, ref) => {
  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <h2 className="section-title">Experience</h2>
      <div className="experience-scroll-container">
        {experiences.map((experience, index) => (
          <div className={`experience-card ${experience.className}`} key={index}>
            <div className="experience-description">
              <h3 className="experience-title">{experience.title}</h3>
              <p className="experience-duration">{experience.duration}</p>
              <p className="experience-text">{experience.description}</p>
              <div className="experience-technologies">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology">{tech}</span>
                ))}
              </div>
            </div>
            <div className="experience-company">
              <p>{experience.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Section */}
      <section className="section tech-stack-section">
        <div className="tech-description">
          <h2 className="tech-stack-title">Tech Stack</h2>
          <p>These are the technologies and tools I have worked with:</p>
        </div>
        <div className="tech-skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill">{skill}</div>
          ))}
        </div>
      </section>
    </section>
  );
});

export default Experience;
