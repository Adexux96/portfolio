import React from 'react';
import { ArrowDown } from 'lucide-react';

const HomePage = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden px-4">
      <div className="relative z-10 flex flex-col items-center">
        {/* Use heading font */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow-strong animate-float font-heading">
          Adrián Lorenzo
        </h1>
        {/* Use body font */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-float font-body" style={{ animationDelay: '0.2s' }}>
          Full-Stack Developer | Navigating the Digital Cosmos
        </p>
        {/* Use heading font for button text */}
        <a
          href="#projects"
          className="bg-accent-teal hover:bg-accent-teal/90 text-space-dark font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 button-glow-animated flex items-center space-x-2 font-heading" // Apply heading font
        >
          <span>Explore Project Portals</span>
          <ArrowDown size={20} className="animate-pulse-slow" />
        </a>
      </div>
       <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-space-dark/80 z-0 pointer-events-none"></div>
    </section>
  );
};

export default HomePage;
