import React from 'react';
import downloadLogo from '../assets/download.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import facebook from '../assets/facebook.svg';
import '../styles/homepage.css';

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="homepage-intro-text">
        <h1>HELLO</h1>
        <h2>I'm</h2>
        <h2>Denzel Granadoz</h2>
      </div>
      <div className="homepage-position-buttons-text">
        <div className="horizontal-line"></div>
        <p>Front-End Web Developer</p>
        <button>
          DOWNLOAD CV <img src={downloadLogo} alt="download-logo"></img>
        </button>
        <button>CONTACT ME</button>
      </div>
      <div className="homepage-socials">
        <div className="horizontal-line"></div>
        <img src={linkedin} alt="linkedin-logo"></img>
        <img src={github} alt="github-logo"></img>
        <img src={facebook} alt="facebook-logo"></img>
      </div>
    </section>
  );
};

export default Homepage;
