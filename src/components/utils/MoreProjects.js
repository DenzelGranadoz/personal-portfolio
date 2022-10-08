import React, { useEffect, useState } from 'react';
import { Github2, ExternalLink } from '../utils/svg/icons';
import '../../styles/components/_moreprojects.scss';
import Parser from 'html-react-parser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MoreProjects = ({ project, counter }) => {
  const { name, description, github, demo } = project;
  const stack = project.stack;

  const [demoExist, setDemoExist] = useState(false);
  const checkLink = () => {
    if (demo !== '') setDemoExist(true);
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  const projectVariant = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.15 * counter,
      },
    },
  };

  useEffect(() => {
    checkLink();
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <motion.div
      className="project-extra"
      ref={ref}
      variants={projectVariant}
      animate={control}
      initial="hidden"
    >
      <div className="project-extra-title">
        <h3>{name}</h3>
      </div>
      <div className="project-extra-logo">
        <a href={github} rel="noreferrer" target="_blank">
          <Github2 />
        </a>
        {demoExist && (
          <a href={demo} rel="noreferrer" target="_blank">
            <ExternalLink />
          </a>
        )}
      </div>
      <div className="project-extra-description">
        <p>{description}</p>
      </div>
      <div className="project-extra-stack">
        <ul className="extra-stack-list">{Parser(stack)}</ul>
      </div>
    </motion.div>
  );
};

export default MoreProjects;
