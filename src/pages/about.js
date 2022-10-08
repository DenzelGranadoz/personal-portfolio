import React, { useState, useEffect } from 'react';
import '../styles/components/_about.scss';
import about from '../components/utils/AboutMe';
import Parser from 'html-react-parser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [aboutMe, setAboutMe] = useState(about);
  const { description, image } = aboutMe;

  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const pageTitleVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const contentVariant = {
    hidden: {
      opacity: 0,
      y: 250,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const backgroundVariant = {
    hidden: {
      opacity: 0,
      x: 300,
    },
    visible: {
      opacity: 0.15,
      x: 0,
      transition: {
        delay: 0.75,
        duration: 1.75,
      },
    },
  };

  useEffect(() => {
    inView ? control.start('visible') : control.start('hidden');
  }, [control, inView]);

  return (
    <section className="about-container" id="aboutPage">
      <motion.h2
        ref={ref}
        variants={pageTitleVariant}
        initial="hidden"
        animate={control}
      >
        About me
      </motion.h2>
      <div className="about-content">
        <div className="image-text-container">
          <motion.img
            src={image}
            alt="my pic"
            ref={ref}
            variants={contentVariant}
            animate={control}
            initial="hiddenImage"
          ></motion.img>
        </div>
        <div className="about-text-container">
          <motion.p
            ref={ref}
            variants={contentVariant}
            animate={control}
            initial="hiddenText"
          >
            {Parser(description)}
          </motion.p>
        </div>
        <motion.h1
          ref={ref}
          variants={backgroundVariant}
          animate={control}
          initial="hidden"
        >
          About me
        </motion.h1>
      </div>
    </section>
  );
};

export default About;
