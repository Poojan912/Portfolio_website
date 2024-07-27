import React from 'react';
import './Internship.css'; // Import the CSS file

const internships = [
  {
    company: 'Company One',
    description: 'Description for internship at Company One.',
    image: 'path/to/company1.png',
  },
  {
    company: 'Company Two',
    description: 'Description for internship at Company Two.',
    image: 'path/to/company2.png',
  },
  // Add more internships as needed
];

const Internship = () => {
  return (
    <div className="internship-container">
      {internships.map((intern, index) => (
        <div className="internship-card" key={index}>
          <img src={intern.image} alt={intern.company} className="company-image" />
          <h3>{intern.company}</h3>
          <p>{intern.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Internship;
