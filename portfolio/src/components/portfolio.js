import React from 'react';

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="portfolio-item">
      <h3>Project 1</h3>
      <a href="deployed-app-link-1">Live Demo</a>
      <a href="github-repo-link-1">GitHub Repo</a>
    </div>
    {/* Repeat for other projects */}
  </section>
);

export default Portfolio;