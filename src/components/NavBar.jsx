import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <nav className="navbar">
      <Link smooth to="about" className="nav-link" data-aos="fade-right">ABOUT</Link>
      <Link smooth to="skills" className="nav-link" data-aos="fade-left">SKILLS</Link>
      <Link smooth to="projects" className="nav-link" data-aos="fade-right">PROJECTS</Link>
      <Link smooth to="contact" className="nav-link" data-aos="fade-left">CONTACT</Link>
    </nav>
  );
}

export default NavBar;
