import React from 'react';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <h2 className="page-title" data-aos="zoom-in">Contact</h2>
      <p className="contact-subtitle" data-aos="zoom-in">Connect with me anytime</p>
      <div className="socials-container" data-aos="zoom-in">
        <a className="contact-mail" href="mailto:paluke94@gmail.com">Say Hello</a>
        <div className="socials-wrapper">
          <a target="_blank" href="https://www.linkedin.com/in/lucas-pontes-arruda" rel="noreferrer">
            <i className="devicon-linkedin-plain" />
          </a>
          <a target="_blank" href="https://github.com/palucas94" rel="noreferrer">
            <i className="devicon-github-original" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
