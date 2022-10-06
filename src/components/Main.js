import React from 'react';
import Homepage from '../pages/Homepage';
import '../styles/_main.scss';
import Header from './Header';
import About from '../pages/About';
import Projects from '../pages/Project';
import Contact from '../pages/Contact';

const Main = () => {
  return (
    <div className="content">
      <div className="homepage-container">
        <Header />
        <Homepage />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
