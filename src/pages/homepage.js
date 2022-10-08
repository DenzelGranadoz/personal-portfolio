import React, { useEffect } from 'react';
import MovingText from 'react-moving-text';
import '../styles/components/_homepage.scss';
import {
  LinkedIn,
  Github,
  Facebook,
  Download,
} from '../components/utils/svg/icons';
import resume from '../assets/resume/Granadoz_Resume.pdf';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const socialsVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    hiddenOne: {
      opacity: 0,
      x: 100,
    },
    hiddenTwo: {
      opacity: 0,
      x: 160,
    },
    hiddenThree: {
      opacity: 0,
      x: 250,
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        delay: 0.5,
        duration: 1.25,
      },
    },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView ? control.start('visible') : control.start('hidden');
  }, [control, inView]);

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

      <div className="homepage-socials">
        <div className="socials-container">
          <motion.ul className="inner-container">
            <li className="horizontal-line"></li>
            <motion.li
              variants={socialsVariant}
              ref={ref}
              animate={control}
              initial="hiddenOne"
            >
              <a
                href="https://www.linkedin.com/in/denzelgranadoz"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedIn />
              </a>
            </motion.li>
            <motion.li
              variants={socialsVariant}
              ref={ref}
              animate={control}
              initial="hiddenTwo"
            >
              <a
                href="https://github.com/DenzelGranadoz"
                rel="noreferrer"
                target="_blank"
              >
                <Github />
              </a>
            </motion.li>
            <motion.li
              variants={socialsVariant}
              ref={ref}
              animate={control}
              initial="hiddenThree"
            >
              <a
                href="https://www.facebook.com/denzzgranadoz/"
                rel="noreferrer"
                target="_blank"
              >
                <Facebook />
              </a>
            </motion.li>
          </motion.ul>
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
    </motion.section>
  );
};

export default Homepage;
