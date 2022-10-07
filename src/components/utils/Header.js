import React from 'react';
import '../../styles/components/_nav.scss';
import { Link } from 'react-scroll';

const Header = () => {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <nav>
      <ul>
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
    </nav>
  );
};

export default Header;
