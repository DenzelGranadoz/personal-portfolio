import React, { useState, useEffect } from 'react';
import '../styles/components/_nav.scss';
import { motion } from 'framer-motion';
import Links from './NavLinks';
import { Divide as Hamburger } from 'hamburger-react';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  const navVariant = {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [isOpen, setOpen] = useState(false);

  const [windowMatches, setWindowMatches] = useState(
    window.matchMedia('(min-width: 769px)').matches
  );

  useEffect(() => {
    if (windowMatches) {
      setOpen(false);
    }

    window
      .matchMedia('(min-width: 769px)')
      .addEventListener('change', (e) => setWindowMatches(e.matches));
  }, [setOpen, windowMatches]);

  const [ref, inView] = useInView();

  useEffect(() => {
    inView ? setOpen(isOpen) : setOpen(false);
  }, [isOpen, inView]);

  return (
    <motion.nav
      ref={ref}
      variants={navVariant}
      animate="visible"
      initial="hidden"
    >
      {windowMatches && <Links isOpen={!isOpen} />}

      {!windowMatches && (
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={35}
          color="#E8E4C9"
          duration={0.75}
          label="Show menu"
        />
      )}

      {!windowMatches && <Links isOpen={isOpen} />}
    </motion.nav>
  );
};

export default Header;
