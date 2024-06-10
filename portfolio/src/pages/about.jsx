import React from 'react';
import profilePhoto from '../assets/profile.jpg'; 
import './styles/About.css'; // Import the CSS file for additional styles

const About = () => (
  <section className="about-section">
    <h2 className="about-heading">About Me</h2>
    <div className="about-content">
      <img src={profilePhoto} alt="Developer" className="profile" />
      <div className="bio">
      <p>Hello, my name is <strong>Patrick Castorena</strong>. I am a 27 year old male with a passion for technology and how it all works under the surface.
                    I am very outdoor oriented, but enjoy the amenities that technology provides in everyday work and personal life as well. I am currently enrolled
                    in the University of Utah full stack coding bootcamp, in this bootcamp I have learned HTML, CSS, and JavaScript. I hope to broaden my skillset
                    and find a career in the field I have had a passion for since I was a small child. The grid below will provide some insight into the capabilites 
                    I currently posess.</p>
      </div>
    </div>
  </section>
);

export default About;