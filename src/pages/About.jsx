import React from 'react';

function About() {
  return (
    <div id="about" className="page dark-bg about-container">
      <h2 className="page-title" data-aos="zoom-in">About</h2>

      <div className="about-wrapper">
        <div className="light-dark-bg about-column" data-aos="flip-right">
          <h3 className="about-column-subtitle">Me</h3>
          <div className="about-column-text">
            <p>{'I\'m a Brazilian Full Stack Developer currently located in France.'}</p>
            <p>I have been studying Full Stack Development at Trybe since July/2021.</p>
            <br />
            <p>{'Fluent in Portuguese, English and French, I\'m looking forward to working with positive people from all over the world, using my skills to solve problems, collaborate with others and bring amazing projects to life.'}</p>
          </div>
        </div>

        <div className="light-dark-bg about-column" data-aos="flip-left">
          <h3 className="about-column-subtitle">Trybe</h3>
          <div className="about-column-text">
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
    </div>
  );
}

export default About;
