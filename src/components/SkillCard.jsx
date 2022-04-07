import React from 'react';
import PropTypes from 'prop-types';

function SkillCard({ name, icon }) {
  return (
    <div className="skillcard-wrapper" data-aos="fade-up">
      <i className={icon} />
      <div className="skill-name">
        { name }
      </div>
    </div>
  );
}

export default SkillCard;

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
