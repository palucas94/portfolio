import React from 'react';
import SkillCard from '../components/SkillCard';
import SKILLS from '../services/skills';

function Skills() {
  return (
    <div id="skills" className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">Always learning something new</p>
      <div className="skills-wrapper">
        { SKILLS.map(({ name, icon }) => <SkillCard name={name} icon={icon} />)}
      </div>
    </div>
  );
}

export default Skills;
