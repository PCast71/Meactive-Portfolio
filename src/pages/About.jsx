import React from 'react';
import profilePhoto from '../assets/profile.jpg';
import '../assets/styles/About.css';

const About = () => (
  <section className="about-section">
    <h2 className="about-heading">About Me</h2>
    <div className="about-content">
      <img src={profilePhoto} alt="Patrick Castorena" className="profile-img" />
      <div className="about-bio">
        <p>
  Hey, I’m <strong>Patrick Castorena</strong>, a 28-year-old full-stack developer with a love for both technology and the natural world. I thrive in that sweet spot between creativity and logic—building intuitive, useful tools that not only look good but actually solve real problems. Whether it’s client work, internal tools, or personal projects, I’m all about clean structure, purposeful design, and a little bit of soul in the code.
</p>
<p>
  Since completing the University of Utah Full-Stack Bootcamp, I’ve continued honing my skills across frontend and backend stacks, collaborating on real-world deployments, and developing personal apps like an accountability tracker and a CSV data-cleaning tool. I’m constantly leveling up and always ready to dive into the next challenge.
</p>
<p>
  Outside of client work, I’ve been developing a couple of passion projects—one focused on personal growth and habit tracking, and another that’s shaping into a weird little game about memories, space, and something whispering from beneath the surface. Nothing public just yet... but it’s brewing.
</p>

      </div>
    </div>
  </section>
);

export default About;
