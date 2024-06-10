import React from 'react';
import './styles/Footer.css'; 
import githubLogo from '../assets/github-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.png'; // Add LinkedIn logo


const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2024 Patrick Castorena. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/patrick-c-7b5436206/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;