import React from 'react';
import './Home.css';

const Home = React.forwardRef((props, ref) => {
  return (
    <section id="home" className="section home-section" ref={ref}>
      <div className="content">
        <div className="image-container">
          <img src="home_photo.jpeg" alt="Profile" className="profile-image" />
        </div>
        <div className="text-container">
          <h1 className="title">I'm Poojan Akhani.</h1>
          <h1 className="title">A Software Engineer</h1>
          <h1 className="subtitle">Based in New York</h1>
          <p className="description">
            I specialize in building amazing software solutions. With a passion for coding and a knack for problem-solving, I strive to create innovative and efficient applications.
          </p>
          <a href="https://drive.google.com/file/d/1BWZjVfcF2EmP6RUodU0uUyAhGXjboFTJ/view?usp=sharing" className="resume-button" target="_blank" rel="noopener noreferrer">
            Checkout Resume
          </a>
        </div>
      </div>
    </section>
  );
});

export default Home;
