import React, { useState } from 'react';
import perfectPass from '../assets/password.jpg';
import spacePic from '../assets/spacebook.jpg';
import notepad from '../assets/notepad.jpg';
import test from '../assets/test.jpg';
import dayPlanner from '../assets/planner.jpg';
import weatherImage from '../assets/weather.jpg'; // Import the project image
import githubLogo from '../assets/github-logo.svg'; // Import the GitHub logo image
import './styles/Port.css'; // Import the CSS file for styling

const initialProjects = [
  {
    id: 1,
    name: 'True Weather',
    image: weatherImage,
    deployedLink: 'https://pcast71.github.io/The-accurate-meteorologist/',
    githubLink: 'https://github.com/PCast71/The-accurate-meteorologist',
  },
  {
    id: 2,
    name: 'Note Guru',
    image: notepad,
    deployedLink: 'https://pcast71.github.io/Note-Guru/',
    githubLink: 'https://github.com/PCast71/Note-Guru',
  },
  {
    id: 3,
    name: 'Pop Quiz',
    image: test,
    deployedLink: 'https://pcast71.github.io/Pop-quiz/',
    githubLink: 'https://github.com/PCast71/Pop-quiz',
  },
  {
    id: 4,
    name: 'Your Day in Color',
    image: dayPlanner,
    deployedLink: 'https://pcast71.github.io/your-day-in-color/',
    githubLink: 'https://github.com/PCast71/your-day-in-color',
  },
  {
    id: 5,
    name: 'The Perfect Password',
    image: perfectPass,
    deployedLink: 'https://pcast71.github.io/the-perfect-password/',
    githubLink: 'https://github.com/PCast71/the-perfect-password',
  },
  {
    id: 6,
    name: 'Space Book',
    image: spacePic,
    deployedLink: 'https://space-booke-1d5e2b494fce.herokuapp.com/',
    githubLink: 'https://github.com/PCast71/Space-book',
  },

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
