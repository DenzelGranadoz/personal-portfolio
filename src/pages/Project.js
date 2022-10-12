import React, { useState, useEffect } from 'react';
import '../styles/components/_projects.scss';
import MoreProjects from '../components/utils/MoreProjects';
import Featured from '../components/utils/FeaturedProjects';
import FeaturedItem from '../components/utils/FeaturedItem';
import allProjects from '../components/utils/AllProjects';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [projects, setProjects] = useState(false);
  const [featuredProjects, setFeaturedProjects] = useState(Featured);
  const [allProject, setAllProject] = useState(allProjects);

  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    inView ? control.start('visible') : control.start('hidden');
  }, [control, inView, projects]);

  const handleMoreProjects = () => {
    projects === false ? setProjects(true) : setProjects(false);
  };

  const pageTitleVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 4,
      },
    },
  };

  const titleBgVariant = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 0.15,
      x: -205,
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <section className="projects-page" id="projectPage">
      <motion.h1
        ref={ref}
        animate={control}
        variants={titleBgVariant}
        initial="hidden"
      >
        Projects
      </motion.h1>
      <motion.h2
        ref={ref}
        animate={control}
        variants={pageTitleVariant}
        initial="hidden"
      >
        Projects
      </motion.h2>
      <ul className="projects-container">
        {featuredProjects.map((project) => (
          <FeaturedItem key={project.name} project={project} />
        ))}
      </ul>
      <div className="more-projects">
        {!projects && (
          <button onClick={handleMoreProjects}>View More Projects</button>
        )}
        <div className="more-projects-container">
          {projects &&
            allProject.map((project, i) => (
              <MoreProjects key={project.name} project={project} counter={i} />
            ))}
        </div>
        {projects && (
          <button onClick={handleMoreProjects}>Hide Projects</button>
        )}
      </div>
    </section>
  );
};

export default Projects;
