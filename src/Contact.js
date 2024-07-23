import React from 'react';
import './Section.css';

const Contact = React.forwardRef((props, ref) => {
  return (
    <section id="contact" className="section" ref={ref}>
      <h2>Contact Me</h2>
      <p>Get in touch!</p>
    </section>
  );
});

export default Contact;
