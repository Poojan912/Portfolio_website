import React, { useRef, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = sectionsRef.current.slice(0, 4); 
  }, []);

  return (
    <div className="App">
      <Header sectionsRef={sectionsRef} />
      <Home ref={(el) => (sectionsRef.current[0] = el)} />
      <Projects ref={(el) => (sectionsRef.current[1] = el)} />
      <Skills ref={(el) => (sectionsRef.current[2] = el)} />
      <Contact ref={(el) => (sectionsRef.current[3] = el)} />
    </div>
  );
}

export default App;
