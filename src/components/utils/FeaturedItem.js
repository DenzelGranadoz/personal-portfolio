import React from 'react';
import github from '../../assets/logos/project-github.svg';
import link from '../../assets/logos/project-link.svg';
import Parser from 'html-react-parser';

const FeaturedItem = ({ project }) => {
  const { name, image } = project;
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
          <img src={github} alt="github-logo"></img>
          <img src={link} alt="link-logo"></img>
        </div>
      </div>
    </li>
  );
};

export default FeaturedItem;
