import './App.css';
import './styles/Home.scss';
import './styles/NavBar.scss';
import './styles/About.scss';
import './styles/Skills.scss';
import './styles/Contact.scss';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });

  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
