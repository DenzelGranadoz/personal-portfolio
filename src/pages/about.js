import React from 'react';
import '../styles/components/_about.scss';
import picture from '../assets/about.jpeg';

const About = () => {
  return (
    <section className="about-container">
      <h2>About me</h2>
      <div className="about-content">
        <div className="image-text-container">
          <img src={picture} alt="my-picture"></img>
        </div>
        <div className="about-text-container">
          <p>
            Hi! My name is <span className="main-color-text">Denzel</span> and
            my interest in web development only grew in the recent years
            courtesy of the pandemic. I started out tinkering with HTML and CSS
            and have enjoyed working on javascript projects in my free time. I'm
            now a self-taught
            <span className="main-color-text"> Front-end developer </span>
            with a
            <span className="main-color-text"> Computer Science Degree </span>
            from De La Salle University - Dasmarinas, Philippines.
          </p>
        </div>
        <h1>About me</h1>
      </div>
    </section>
  );
};

export default About;
