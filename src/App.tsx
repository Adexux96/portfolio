import React, { useEffect } from 'react';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    // Only initialize custom cursor on desktop
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) {
      const handleMouseMove = (event: MouseEvent) => {
        document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
        document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <Layout>
      <HomePage />
      <AboutMe />
      <Skills />
      <Projects />
    </Layout>
  );
}

export default App;
