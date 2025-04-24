import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cwdLogo from '../assets/cwdLogo.jpg';
import '../assets/styles/Nav.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-container">
      <div className="nav-inner">
       <div className="nav-logo">
  <NavLink to="/" className="nav-logo-link">
    <img src={cwdLogo} alt="Logo" className="nav-logo-img" />
    <span>Patrick Castorena</span>
  </NavLink>
</div>


        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
            About Me
          </NavLink>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
          <NavLink to="/resume" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
            Resume
          </NavLink>
        </nav>

        <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
