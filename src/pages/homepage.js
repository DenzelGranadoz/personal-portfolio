import React, { useState, useEffect } from 'react';
import MovingText from 'react-moving-text';
import '../styles/components/_homepage.scss';
import { Download } from '../components/utils/svg/icons';
import resume from '../assets/resume/Granadoz_Resume.pdf';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Socials from '../components/Socials';

const Homepage = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const nameVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const buttonsVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView ? control.start('visible') : control.start('hidden');
  }, [control, inView]);

  const [windowMatches, setWindowMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setWindowMatches(e.matches));
  });

  return (
    <motion.section className="homepage-about-me" variants={nameVariant}>
      <div className="homepage-intro-button-wrapper">
        <motion.div
          className="homepage-intro-text"
          ref={ref}
          variants={containerVariant}
          animate={control}
          initial="hidden"
        >
          <motion.h1 variants={nameVariant}>HELLO</motion.h1>
          <motion.h2 variants={nameVariant}>I'm</motion.h2>
          <motion.h2 variants={nameVariant}>
            Denzel <span className="main-color-text">Granadoz</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="homepage-buttons"
          ref={ref}
          animate={control}
          variants={containerVariant}
          initial="hidden"
        >
          <motion.div
            className="horizontal-line"
            variants={buttonsVariant}
          ></motion.div>
          <motion.p variants={buttonsVariant}>Front-End Web Developer</motion.p>
          <motion.div className="buttons-wrap" variants={buttonsVariant}>
            <a className="" href={resume} download="Granadoz_Resume.pdf">
              <button>
                RESUME <Download />
              </button>
            </a>
            <a
              href="mailto:zelgranadoz@gmail.com?subject=Important!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>CONTACT ME</button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {windowMatches && <Socials />}

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
    </motion.section>
  );
};

export default Homepage;
