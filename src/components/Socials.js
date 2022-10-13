import React, { useEffect } from 'react';
import { LinkedIn, Github, Facebook } from './utils/svg/icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Socials = () => {
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
    <div className="homepage-socials">
      <div className="socials-container">
        <ul className="inner-container">
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
        </ul>
      </div>
    </div>
  );
};

export default Socials;
