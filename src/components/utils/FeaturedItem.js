import React from 'react';
import { Github2, ExternalLink } from '../utils/svg/icons';
import Parser from 'html-react-parser';

const FeaturedItem = ({ project }) => {
  const { name, image, github, demo } = project;
  const description = project.description;
  const stack = project.stack;

  return (
    <li className="project">
      <div className="project-image-div">
        <img src={image} alt="E-Commerce"></img>
      </div>

      <div className="project-information-div">
        <h3>{name}</h3>

        <div className="information">
          <p>{Parser(description)}</p>
        </div>

        <div className="tech-stack-div">
          <ul className="tech-stack-list">{Parser(stack)}</ul>
        </div>

        <div className="project-logo-div">
          <a href={github} rel="noreferrer" target="_blank">
            <Github2 />
          </a>

          <a href={demo} rel="noreferrer" target="_blank">
            <ExternalLink />
          </a>
        </div>
      </div>
    </li>
  );
};

export default FeaturedItem;
