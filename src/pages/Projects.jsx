import React from 'react';
import ProjectCard from '../components/ProjectCard';
import PROJECTS from '../services/projects';

function Projects() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div id="projects" className="page projects-container">
      <h2 className="page-title" data-aos="zoom-in">Projects</h2>
      <p className="page-subtitle" data-aos="zoom-in">More coming soon...</p>
      <div className="projects-wrapper" ref={scrollRef}>
        {PROJECTS.map(({
          id, name, image, description, stacks, repository, deploy,
        }) => (
          <ProjectCard
            key={id}
            name={name}
            image={image}
            description={description}
            stacks={stacks}
            repository={repository}
            deploy={deploy}
          />
        ))}
      </div>

      <div className="project-arrows">
        <button type="button" onClick={() => scroll('left')}>
          <div className="arrow-left" />
        </button>
        <button type="button" onClick={() => scroll('right')}>
          <div className="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default Projects;
