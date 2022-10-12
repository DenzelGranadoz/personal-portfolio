import React, { useState, useEffect } from 'react';
import '../../styles/components/_nav.scss';
import { motion } from 'framer-motion';
import Links from './NavLinks';
import { Divide as Hamburger } from 'hamburger-react';

const Header = () => {
  const navVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -75 },
  };

  const [isOpen, setOpen] = useState(false);

  const [windowMatches, setWindowMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    if (windowMatches) {
      setOpen(false);
    }

    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setWindowMatches(e.matches));
  }, [setOpen, windowMatches]);

  // const childRef = useRef();

  return (
    <motion.nav variants={navVariant} animate="visible" initial="hidden">
      {windowMatches && <Links />}

      {!windowMatches && (
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          // onToggle={(toggled) => {
          //   if (!toggled) {
          //     handleToggle();
          //   }
          // }}
          size={48}
          color="#E8E4C9"
          duration={0.75}
          label="Show menu"
        />
      )}

      {isOpen && !windowMatches && <Links />}
    </motion.nav>
  );
};

export default Header;
