import React from 'react';
import './Section.css';

const Home = React.forwardRef((props, ref) => {
  return (
    <section id="home" className="section" ref={ref}>
      <h2>Home</h2>
      <p>Welcome to my portfolio!</p>
    </section>
  );
});

export default Home;
