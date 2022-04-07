import React from 'react';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div className="page-container">
      <div className="title-container">
        <p className="subtitle">{'Hi, I\'m'}</p>
        <div className="title-wrapper">
          <div className="relative">
            <div className="title" data-text="Lucas">Lucas</div>
          </div>
          <div className="relative">
            <div className="title" data-text="Pontes">Pontes</div>
          </div>
          <div className="relative">
            <div className="title" data-text="Arruda">Arruda</div>
          </div>
        </div>
        <p className="subtitle">Full Stack Developer</p>
        <div className="home-socials">
          <a target="_blank" href="https://www.linkedin.com/in/lucas-pontes-arruda" rel="noreferrer">
            <i className="devicon-linkedin-plain" />
          </a>
          <a target="_blank" href="https://github.com/palucas94" rel="noreferrer">
            <i className="devicon-github-original" />
          </a>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
