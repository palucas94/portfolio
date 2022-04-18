import React from 'react';

function ProjectCard(project) {
  const {
    name, image, description, stacks, repository, deploy,
  } = project;

  return (
    <div className="project-card" data-aos="flip-left">
      <a target="_blank" href={deploy} rel="noreferrer">
        <img className="project-img" src={image} alt={name} />
      </a>
      <div className="project-info">
        <h3 className="project-name">{ name }</h3>
        <p className="project-description">{description}</p>
        <div className="bottom-wrapper">
          <div>{stacks.map((s) => <span className="project-stack">{s}</span>)}</div>
          <div>
            <a target="_blank" href={repository} rel="noreferrer">
              <i className="devicon-github-original" />
            </a>
            <a target="_blank" href={deploy} rel="noreferrer">
              <i className="fa-solid fa-link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
