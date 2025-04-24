import React from 'react';
import '../assets/styles/Footer.css';
import githubLogo from '../assets/github-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.png';
import cwdLogo from '../assets/cwdLogo.jpg'; // your sick spider moon logo

const Footer = () => {
  return (
    <footer className="footer-layout">
      <div className="footer-columns">
        <div className="footer-left">
          <h4>Connect</h4>
          <p>Full-Stack Developer</p>
          <p>Marine Vet | Storyteller | Builder</p>
        </div>

        <div className="footer-center">
          <img src={cwdLogo} alt="Patrick Castorena Logo" className="footer-logo" />
        </div>

        <div className="footer-right">
          <h4>Follow</h4>
          <div className="footer-icons">
            <a href="https://github.com/PCast71" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/patrick-castorena-7b5436206/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Patrick Castorena. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
