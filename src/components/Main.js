import React from 'react';
import Homepage from '../pages/Homepage';
import '../styles/components/_main.scss';
import Header from './Header';
import About from '../pages/About';
import Projects from '../pages/Project';
import Contact from '../pages/Contact';

const Main = () => {
  return (
    <div className="content">
      <section className="homepage-container">
        <Header />
        <Homepage />
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
