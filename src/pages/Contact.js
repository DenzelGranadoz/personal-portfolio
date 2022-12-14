import React, { useState, useEffect } from 'react';
import '../styles/components/_contact.scss';
import arrow from '../assets/logos/arrow-to-top.svg';
import * as Scroll from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Socials from '../components/Socials';
import contactInfo from '../components/utils/information/ContactDetails';

const Contact = () => {
  const handleScroll = () => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const footerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.25,
      },
    },
  };

  useEffect(() => {
    inView ? control.start('visible') : control.start('hidden');
  }, [control, inView]);

  const [windowMatches, setWindowMatches] = useState(
    window.matchMedia('(min-width: 769px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 769px)')
      .addEventListener('change', (e) => setWindowMatches(e.matches));
  });

  const { description, title, button, footer } = contactInfo;
  return (
    <section className="footer-page" id="contactPage">
      <motion.div
        className="footer-content"
        ref={ref}
        variants={containerVariant}
        animate={control}
        intial="hidden"
      >
        <motion.h1 variants={itemVariant}>{title}</motion.h1>
        <motion.p variants={itemVariant}>{description}</motion.p>
        <motion.a
          href="mailto:zelgranadoz@gmail.com?subject=Important!"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariant}
        >
          <button>{button}</button>
        </motion.a>
      </motion.div>

      <motion.button
        className="back-to-top"
        onClick={handleScroll}
        ref={ref}
        variants={footerVariant}
        animate={control}
        initial="hidden"
      >
        <img src={arrow} alt="back to top"></img>
      </motion.button>
      <motion.footer
        ref={ref}
        variants={footerVariant}
        animate={control}
        initial="hidden"
      >
        {!windowMatches && <Socials />}
        {footer}
      </motion.footer>
    </section>
  );
};

export default Contact;
