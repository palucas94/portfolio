import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

function DotNav({ page }) {
  return (
    <div className="dotnav">
      <Link smooth to="home" className={`${page === 'home' ? 'dotnav-selected' : 'dotnav-link'}`} />
      <Link smooth to="about" className={`${page === 'about' ? 'dotnav-selected' : 'dotnav-link'}`} />
      <Link smooth to="skills" className={`${page === 'skills' ? 'dotnav-selected' : 'dotnav-link'}`} />
      <Link smooth to="projects" className={`${page === 'projects' ? 'dotnav-selected' : 'dotnav-link'}`} />
      <Link smooth to="contact" className={`${page === 'contact' ? 'dotnav-selected' : 'dotnav-link'}`} />
    </div>

  );
}

export default DotNav;

DotNav.propTypes = {
  page: PropTypes.string.isRequired,
};
