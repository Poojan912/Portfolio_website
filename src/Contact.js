import React from 'react';
import './Contact.css';

const Contact = React.forwardRef((props, ref) => {
  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <h2 className="section-title">Let's Connect</h2>
      <form className="contact-form">
        <div className="form-row">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" required />
          </label>
        </div>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type='submit'>Submit</button>
      </form>
      <div className="contact-info-container">
        <div className="contact-info">
          <h3>Contact Me</h3>
          <p>New York, USA</p>
          <p>Albany, 12206</p>
          <p>Email:</p>
          <p><a href="mailto:pakhani@albany.edu">pakhani@albany.edu</a></p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <p><a href="https://github.com/Poojan912" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <p><a href="https://linkedin.com/in/poojanakhani" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>        
        </div>
      </div>
      <div className="footer">
        <p> © Poojan Akhani </p>
      </div>
    </section>
  );
});

export default Contact;
