import React from 'react';
import ProjectCard from '../components/ProjectCard';
import PROJECTS from '../services/projects';

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-title" data-aos="zoom-in">Projects</h2>
      <p data-aos="zoom-in">More coming soon...</p>
      <div className="projects-wrapper">
        {PROJECTS.map(({
          name, image, description, stacks, repository, deploy,
        }) => (
          <ProjectCard
            name={name}
            image={image}
            description={description}
            stacks={stacks}
            repository={repository}
            deploy={deploy}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
