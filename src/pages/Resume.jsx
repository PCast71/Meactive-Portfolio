import React from 'react';
import '../assets/styles/Resume.css';
import resumeFile from '../assets/patrickResume.pdf';

const Resume = () => (
  <section className="resume-section">
    <h2 className="resume-heading">Resume</h2>
    <div className="resume-content">
      <a href={resumeFile} download className="download-link">Download My Resume</a>

      <h3 className="proficiency-title">Proficiencies</h3>
      <div className="proficiencies-columns">
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js / Tailwind CSS</li>
          <li>Node.js / Express.js</li>
          <li>MongoDB / Mongoose</li>
        </ul>
        <ul>
          <li>Google Sheets Automation</li>
          <li>EmailJS / Contact Form Logic</li>
          <li>CSV Parsing & Data Cleaning</li>
          <li>Firebase (auth & data structure)</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Resume;
