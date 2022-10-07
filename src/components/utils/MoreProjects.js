import React, { useEffect, useState } from 'react';
import { Github2, ExternalLink } from '../utils/svg/icons';
import '../../styles/components/_moreprojects.scss';
import Parser from 'html-react-parser';

const MoreProjects = ({ project }) => {
  const { name, description, github, demo } = project;
  const stack = project.stack;

  const [demoExist, setDemoExist] = useState(false);
  const checkLink = () => {
    if (demo !== '') setDemoExist(true);
  };
  useEffect(() => {
    checkLink();
  }, []);

  return (
    <div className="project-extra">
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
    </div>
  );
};

export default MoreProjects;
