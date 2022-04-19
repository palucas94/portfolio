import React from 'react';
import SkillCard from '../components/SkillCard';
import SKILLS from '../services/skills';

function Skills() {
  return (
    <div id="skills" className="page skills-container">
      <h2 className="page-title" data-aos="zoom-in">Skills</h2>
      <p className="page-subtitle" data-aos="zoom-in">Always learning something new</p>

      <div className="skills-wrapper">
        { SKILLS.map(({ name, icon, id }) => <SkillCard key={id} name={name} icon={icon} />)}
      </div>
    </div>
  );
}

export default Skills;
