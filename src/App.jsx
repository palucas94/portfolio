import './App.css';
import './styles/Home.scss';
import './styles/NavBar.scss';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
