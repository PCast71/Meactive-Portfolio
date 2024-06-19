import React from 'react';
import profilePhoto from '../assets/profile.jpg'; 
import './styles/About.css'; // Import the CSS file for additional styles

const About = () => (
  <section className="about-section">
    <h2 className="about-heading">About Me</h2>
    <div className="about-content">
      <img src={profilePhoto} alt="Developer" className="profile" />
      <div className="bio">
      <p>Hello, my name is <strong>Patrick Castorena</strong>. I am a 27 year old man with a passion for technology and how it all works under the surface.
                    I am very outdoor oriented, but enjoy the amenities that technology provides in everyday work and personal life. I have recently completed the University of Utah Fullstack Coding Bootcamp,
                    where I have acquired the skills necessary for server side and front end web development. </p>
      </div>
    </div>
  </section>
);

export default About;