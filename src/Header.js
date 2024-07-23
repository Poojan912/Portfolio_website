import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ sectionsRef }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionsRef]);

  return (
    <header className="header">
      <div className="left-side">
        <div className="logo">
          <img src="Profile_photo.jpeg" alt="Logo" />
        </div>
        <h1>Poojan Akhani</h1>
      </div>
      <nav className="right-side">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;
