import React from 'react';
import '../styles/components/_contact.scss';
import arrow from '../assets/logos/arrow-to-top.svg';

const Contact = () => {
  return (
    <div className="footer-page">
      <div className="footer-content">
        <h1>Get In Touch</h1>

        <p>
          If you have an opportunity to share, or would like to discuss
          anything, you can leave your details by clicking the button below.
        </p>
        <button>Say Hello</button>
      </div>
      <button className="back-to-top">
        <img src={arrow} alt="back to top"></img>
      </button>
      <footer>© Copyright 2022, Denzel Granadoz</footer>
    </div>
  );
};

export default Contact;
