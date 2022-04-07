import React from 'react';

function About() {
  return (
    <div id="about" className="about-container">
      <h2 className="page-title">About</h2>
      <div className="about-wrapper">
        <div className="about-me">
          <h3 className="about-subtitle">Me</h3>
          <p>{'I\'m a Brazilian Full Stack Developer currently located in France.'}</p>
          <p>Studying at Trybe since July/2021.</p>
          <p>
            Fluent in Portuguese, English and French,
            I am excited about working with people from all over the world.
          </p>
          <p>
            Looking forward to working with positive people that
            will bring amazing and ambitious projects to life.
          </p>
        </div>
        <div className="about-trybe">
          <h3 className="about-subtitle">Trybe</h3>
          <p>
            Trybe is a web development school that has a
            genuine commitment to the professional success of its students.
          </p>
          <p>
            The web development training program from Trybe has a workload
            of more than 1500 hours that covers the fundamentals of web development,
            front-end, back-end, computer science, software engineering, agile methodologies,
            and soft skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
