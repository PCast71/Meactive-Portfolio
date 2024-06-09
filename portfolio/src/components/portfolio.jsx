import React, { useState } from 'react';
import weatherImage from '../assets/weather.jpg'; // Import the project image
import githubLogo from '../assets/github-logo.png'; // Import the GitHub logo image
import './Port.css'; // Import the CSS file for styling

const initialProjects = [
  {
    id: 1,
    name: 'True Weather',
    image: weatherImage,
    deployedLink: 'https://pcast71.github.io/The-accurate-meteorologist/',
    githubLink: 'https://github.com/PCast71/The-accurate-meteorologist',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [projects] = useState(initialProjects); // Initialize state with initial projects

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-heading">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-item">
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src={project.image} alt={project.name} className="portfolio-image" />
              <div className="overlay">
                <div className="project-name">
                  {project.name}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    <img src={githubLogo} alt="GitHub" className="github-logo" />
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
