import React, { useEffect } from 'react'; // Import useEffect
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
// Removed Contact component import

function App() {
  // Effect to update custom cursor position
  useEffect(() => {
    const cursorDot = document.querySelector('body::after') as HTMLElement; // Get the pseudo-element (might need adjustment)
    // Note: Directly selecting pseudo-elements like this isn't standard JS.
    // A better approach uses a dedicated div or JS to track mouse and style the pseudo-element vars.
    // For simplicity here, we'll assume CSS handles the visual, but JS would be needed for precise tracking.

    // Let's use JS to update CSS variables for the cursor position
    const handleMouseMove = (event: MouseEvent) => {
      document.body.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.body.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Layout>
      <HomePage />
      <AboutMe />
      <Skills />
      <Projects />
      {/* Contact section is now integrated into the Footer */}
    </Layout>
  );
}

export default App;
