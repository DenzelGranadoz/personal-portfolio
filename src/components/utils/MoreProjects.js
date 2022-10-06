import React from 'react';
import github from '../../assets/logos/project-github.svg';
import link from '../../assets/logos/project-link.svg';
import '../../styles/components/_moreprojects.scss';
import Parser from 'html-react-parser';

const MoreProjects = ({ project }) => {
  const { name, description } = project;
  const stack = project.stack;

  return (
    <div className="project-extra">
      <div className="project-extra-title">
        <h3>{name}</h3>
      </div>
      <div className="project-extra-logo">
        <img src={github} alt="github-logo"></img>
        <img src={link} alt="link-logo"></img>
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
