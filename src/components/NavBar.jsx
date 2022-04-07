import React from 'react';

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#about" className="nav-link" data-aos="fade-right">ABOUT</a>
      <a href="#skills" className="nav-link" data-aos="fade-left">SKILLS</a>
      <a href="#projects" className="nav-link" data-aos="fade-right">PROJECTS</a>
      <a href="#contact" className="nav-link" data-aos="fade-left">CONTACT</a>
    </nav>
  );
}

export default NavBar;
