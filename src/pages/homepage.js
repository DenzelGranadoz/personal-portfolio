import React from 'react';
import downloadLogo from '../assets/download.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import facebook from '../assets/facebook.svg';
import MovingText from 'react-moving-text';
import '../styles/components/_homepage.scss';

const Homepage = () => {
  return (
    <section className="homepage-about-me">
      <div className="homepage-intro-button-wrapper">
        <div className="homepage-intro-text">
          <h1>HELLO</h1>
          <h2>I'm</h2>
          <h2>
            Denzel <span className="main-color-text">Granadoz</span>
          </h2>
        </div>

        <div className="homepage-buttons">
          <div className="horizontal-line"></div>
          <p>Front-End Web Developer</p>
          <div className="buttons-wrap">
            <button>
              DOWNLOAD CV <img src={downloadLogo} alt="download-logo"></img>
            </button>
            <button>CONTACT ME</button>
          </div>
        </div>
      </div>

      <div className="homepage-socials">
        <div className="socials-container">
          <div className="inner-container">
            <div className="horizontal-line"></div>
            <img src={linkedin} alt="linkedin-logo"></img>
            <img src={github} alt="github-logo"></img>
            <img src={facebook} alt="facebook-logo"></img>
          </div>
        </div>
      </div>
      <h3>
        <MovingText
          type="slideOutToBottom"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          Scroll Down
        </MovingText>
      </h3>
    </section>
  );
};

export default Homepage;
