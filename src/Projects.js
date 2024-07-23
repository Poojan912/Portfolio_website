import React from 'react';
import './Section.css';

const Projects = React.forwardRef((props, ref) => {
  return (
    <section id="projects" className="section" ref={ref}>
      <h2>Projects</h2>
      <p>Here are some of my projects.</p>
    </section>
  );
});

export default Projects;
