import React from 'react';
import ProjectCard from '../components/ProjectCard';
import PROJECTS from '../services/projects';

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <p>More coming soon...</p>
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
