import React from 'react';
import MovingText from 'react-moving-text';
import '../styles/components/_homepage.scss';
import {
  LinkedIn,
  Github,
  Facebook,
  Download,
} from '../components/utils/svg/icons';

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
              RESUME <Download />
            </button>
            <button>CONTACT ME</button>
          </div>
        </div>
      </div>

      <div className="homepage-socials">
        <div className="socials-container">
          <ul className="inner-container">
            <li className="horizontal-line"></li>
            <li>
              <a
                href="https://www.linkedin.com/in/denzelgranadoz"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DenzelGranadoz"
                rel="noreferrer"
                target="_blank"
              >
                <Github />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/denzzgranadoz/"
                rel="noreferrer"
                target="_blank"
              >
                <Facebook />
              </a>
            </li>
          </ul>
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
