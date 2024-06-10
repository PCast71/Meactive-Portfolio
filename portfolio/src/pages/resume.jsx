import React from 'react';
import './styles/Resume.css'; // Ensure the correct import path
import resumeFile from '../assets/patrick-resume.pdf'; // Ensure correct relative path

const Resume = () => (
  <section className="resume-section">
    <h2 className="resume-heading">Resume</h2>
    <div className="resume-content">
      <a href={resumeFile} download className="download-link">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul className="proficiencies-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>Python</li>
        <li>Database Management</li>
      </ul>
    </div>
  </section>
);

export default Resume;