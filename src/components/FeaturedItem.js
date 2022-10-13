import React, { useEffect } from 'react';
import { Github2, ExternalLink } from './utils/svg/icons';
import Parser from 'html-react-parser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturedItem = ({ project }) => {
  const { name, image, github, demo } = project;
  const description = project.description;
  const stack = project.stack;

  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    inView ? control.start('visible') : control.start('hidden');
  }, [control, inView]);

  return (
    <motion.li
      className="project"
      ref={ref}
      variants={itemVariant}
      animate={control}
      initial="hidden"
    >
      <div className="project-image-div">
        <img src={image} alt="E-Commerce"></img>
      </div>

      <motion.div
        className="project-information-div"
        ref={ref}
        variants={containerVariant}
        animate={control}
        initial="hidden"
      >
        <motion.h3 variants={itemVariant}>{name}</motion.h3>

        <motion.div className="information" variants={itemVariant}>
          <p>{Parser(description)}</p>
        </motion.div>

        <motion.div className="tech-stack-div" variants={itemVariant}>
          <ul className="tech-stack-list">{Parser(stack)}</ul>
        </motion.div>

        <motion.div className="project-logo-div" variants={itemVariant}>
          <a href={github} rel="noreferrer" target="_blank">
            <Github2 />
          </a>

          <a href={demo} rel="noreferrer" target="_blank">
            <ExternalLink />
          </a>
        </motion.div>
      </motion.div>
    </motion.li>
  );
};

export default FeaturedItem;
