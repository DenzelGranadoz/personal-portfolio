import React from 'react';
import Homepage from '../pages/homepage';
import '../styles/_main.scss';
import Header from './Header';
import About from '../pages/about';

const Main = () => {
  return (
    <div className="content">
      <div className="homepage-container">
        <Header />
        <Homepage />
      </div>
      <About />
    </div>
  );
};

export default Main;
