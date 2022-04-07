import React from 'react';

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
      </div>
    </div>
  );
}

export default Home;
