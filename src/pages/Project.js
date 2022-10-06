import React, { useState } from 'react';
import '../styles/components/_projects.scss';
import MoreProjects from '../components/utils/MoreProjects';
import Featured from '../components/utils/FeaturedProjects';
import FeaturedItem from '../components/utils/FeaturedItem';
import allProjects from '../components/utils/AllProjects';

const Projects = () => {
  const [projects, setProjects] = useState(false);
  const [featuredProjects, setFeaturedProjects] = useState(Featured);
  const [allProject, setAllProject] = useState(allProjects);

  const handleMoreProjects = () => {
    projects === false ? setProjects(true) : setProjects(false);
  };

  return (
    <section className="projects-page">
      <h1>Projects</h1>
      <h2>Projects</h2>
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
            allProject.map((project) => (
              <MoreProjects key={project.name} project={project} />
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
