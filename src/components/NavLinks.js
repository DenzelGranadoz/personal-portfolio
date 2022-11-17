import React from 'react';
import { Link } from 'react-scroll';

const Links = ({ innerRef, isOpen }) => {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <ul
      style={
        isOpen
          ? { transform: 'translateX(0%)' }
          : { transform: 'translateX(100%)' }
      }
    >
      <li>
        <h2 onClick={handleReset}>Denzel</h2>
      </li>
      <Link
        activeClass="active"
        to="aboutPage"
        spy={true}
        smooth={true}
        offset={18}
        duration={1000}
      >
        <li>About Me</li>
      </Link>
      <Link
        activeClass="active"
        to="projectPage"
        spy={true}
        smooth={true}
        duration={1200}
      >
        <li>Projects</li>
      </Link>
      <Link
        activeClass="active"
        to="contactPage"
        spy={true}
        smooth={true}
        duration={1500}
      >
        <li>Contact</li>
      </Link>
    </ul>
  );
};

export default Links;
