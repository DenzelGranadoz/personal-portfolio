import React from 'react';
import '../styles/components/_contact.scss';
import arrow from '../assets/logos/arrow-to-top.svg';
import * as Scroll from 'react-scroll';

const Contact = () => {
  const handleScroll = () => {
    let scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  };

  return (
    <section className="footer-page" id="contactPage">
      <div className="footer-content">
        <h1>Get In Touch</h1>
        <p>
          If you have an opportunity to share, or would like to discuss
          anything, you can leave your details by clicking the button below.
        </p>
        <a
          href="mailto:zelgranadoz@gmail.com?subject=Important!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Say Hello</button>
        </a>
      </div>
      <button className="back-to-top" onClick={handleScroll}>
        <img src={arrow} alt="back to top"></img>
      </button>
      <footer>© Copyright 2022, Denzel Granadoz</footer>
    </section>
  );
};

export default Contact;
