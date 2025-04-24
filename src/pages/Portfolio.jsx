import React, { useState } from 'react';
import perfectPass from '../assets/password.jpg';
import spacePic from '../assets/spacebook.jpg';
import notepad from '../assets/notepad.jpg';
import test from '../assets/test.jpg';
import dayPlanner from '../assets/planner.jpg';
import weatherImage from '../assets/weather.jpg';
import gwtfPoster from '../assets/gwtfPoster.png';
import peakIVPoster from '../assets/peakIVPoster.png';
import githubLogo from '../assets/github-logo.svg';
import '../assets/styles/Port.css';

const allProjects = [
  {
    id: 1,
    name: 'True Weather',
    image: weatherImage,
    deployedLink: 'https://pcast71.github.io/The-accurate-meteorologist/',
    githubLink: 'https://github.com/PCast71/The-accurate-meteorologist',
    description: 'Real-time weather app using OpenWeather API.',
    stack: ['HTML', 'CSS', 'JavaScript', 'API'],
    category: 'Personal',
  },
  {
    id: 2,
    name: 'Note Guru',
    image: notepad,
    deployedLink: 'https://pcast71.github.io/Note-Guru/',
    githubLink: 'https://github.com/PCast71/Note-Guru',
    description: 'Simple note-taking tool with localStorage support.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Fun',
  },
  {
    id: 3,
    name: 'Pop Quiz',
    image: test,
    deployedLink: 'https://pcast71.github.io/Pop-quiz/',
    githubLink: 'https://github.com/PCast71/Pop-quiz',
    description: 'Timed multiple-choice quiz with scoring.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Fun',
  },
  {
    id: 4,
    name: 'Your Day in Color',
    image: dayPlanner,
    deployedLink: 'https://pcast71.github.io/your-day-in-color/',
    githubLink: 'https://github.com/PCast71/your-day-in-color',
    description: 'Interactive day planner with color-coded time slots.',
    stack: ['HTML', 'CSS', 'jQuery'],
    category: 'Personal',
  },
  {
    id: 5,
    name: 'The Perfect Password',
    image: perfectPass,
    deployedLink: 'https://pcast71.github.io/the-perfect-password/',
    githubLink: 'https://github.com/PCast71/the-perfect-password',
    description: 'Custom password generator with criteria selection.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Personal',
  },
  {
    id: 6,
    name: 'Space Book',
    image: spacePic,
    deployedLink: 'https://space-booke-1d5e2b494fce.herokuapp.com/',
    githubLink: 'https://github.com/PCast71/Space-book',
    description: 'MERN social media platform for space fans.',
    stack: ['React', 'MongoDB', 'Node.js', 'Express'],
    category: 'Client',
  },
  {
    id: 7,
    name: 'Go With The Flo',
    image: gwtfPoster,
    deployedLink: 'https://gowiththeflo365.com/',
    githubLink: '',
    description: 'Full website redesign for a plumbing company.',
    stack: ['React', 'Tailwind', 'Lottie', 'Housecall Pro'],
    category: 'Client',
  },
  {
    id: 8,
    name: 'Peak IV Hydration',
    image: peakIVPoster,
    deployedLink: 'https://peak-iv-hydration.com/',
    githubLink: '',
    description: 'Custom site for a mobile IV hydration clinic.',
    stack: ['React', 'Tailwind', 'Google Forms', 'Square'],
    category: 'Client',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);

  const categories = ['All', 'Client', 'Personal', 'Fun'];

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-heading">My Work</h2>

      <div className="portfolio-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map(({ id, name, image, deployedLink, githubLink, description, stack }) => (
          <div key={id} className="portfolio-card">
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={name} className="portfolio-img" />
            </a>
            <div className="portfolio-info">
              <h3>{name}</h3>
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub" className="github-icon" />
                </a>
              )}
            </div>
            <p className="portfolio-desc">{description}</p>
            <div className="portfolio-tags">
              {stack.map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
