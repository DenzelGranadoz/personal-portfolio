import React from 'react';
import '../../styles/components/_nav.scss';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const handleReset = () => {
    window.location.reload();
  };

  const navVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -75 },
  };

  return (
    <motion.nav variants={navVariant} animate="visible" initial="hidden">
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
    </motion.nav>
  );
};

export default Header;
