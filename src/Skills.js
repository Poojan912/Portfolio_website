import React from 'react';
import './Section.css';

const Skills = React.forwardRef((props, ref) => {
  return (
    <section id="skills" className="section" ref={ref}>
      <h2>Skills</h2>
      <p>Here are my skills.</p>
    </section>
  );
});

export default Skills;
