import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Unichat',
    description: 'AI-driven platform that facilitates seamless connection and collaboration on academic projects.',
    image: 'unichat_2.png',
    github: 'https://github.com/Poojan912/UniChat_2.0.git',
    technologies: ['Flutter', 'Dart', 'MongoDb', 'Firebase', 'Postman']
  },
  {
    title: 'My Portfolio Website',
    description: 'Create My Portfolio Website from scratch using React.js',
    image: 'portfolio_2.png',
    github: 'https://github.com/Poojan912/Portfolio_website',
    technologies: ['React.js']
  },
  {
    title: 'Order Manager Application',
    description: 'Android App for efficient order and sales analysis',
    image: 'order_manager.png',
    github: 'https://github.com/Poojan912/Order-Manager-Application',
    technologies: ['Android Studio', 'Kotlin', 'JetPack Compose', 'Firebase']
  },
  {
    title: 'E-commerce Website',
    description: 'E-Commerce website with user authentication, product management, shopping cart, and secure payment integration using HTML, CSS, JavaScript, and Java.',
    image: 'ecommerce.png',
    github: 'https://github.com/Poojan912/project_java',
    technologies: ['Java', 'MySQL', 'Hibernate']
  },
];

const Projects = React.forwardRef((props, ref) => {
  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="technology">{tech}</span>
              ))}
            </div>
            <a href={project.github} className="github-button" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
