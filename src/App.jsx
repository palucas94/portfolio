import './App.css';
import './styles/Home.scss';
import './styles/DotNav.scss';
import './styles/NavBar.scss';
import './styles/About.scss';
import './styles/Skills.scss';
import './styles/Projects.scss';
import './styles/Contact.scss';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import DotNav from './components/DotNav';

function App() {
  const [page, setPage] = useState('home');

  const pageSetter = () => {
    const h = 0.8 * window.innerHeight;
    const y = window.scrollY;
    if (y < h) {
      setPage('home');
    }
    if (y > h && y < 2 * h) {
      setPage('about');
    }
    if (y > 2 * h && y < 3 * h) {
      setPage('skills');
    }
    if (y > 3 * h && y < 4 * h) {
      setPage('projects');
    }
    if (y > 4 * h) {
      setPage('contact');
    }
  };

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
    window.addEventListener('scroll', pageSetter);
  }, []);

  return (
    <div className="App">
      <DotNav page={page} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
