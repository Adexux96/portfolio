import React from 'react';
import { User, Code, Rocket } from 'lucide-react'; // Example icons

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient text-gray-200"> {/* Use section gradient */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-teal text-glow">About Me</h2> {/* Added glow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Placeholder for an image or avatar */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center shadow-lg mb-6 md:mb-0 animate-float"> {/* Gradient circle + float */}
            <User size={80} className="text-space-dark" /> {/* Placeholder Icon */}
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg mb-4 leading-relaxed">
              Hello! I'm Adrian, a passionate Full Stack Developer navigating the vast universe of web technologies. My mission is to build seamless, scalable, and visually stunning digital experiences.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              With a strong foundation in both frontend artistry and backend logic, I enjoy bringing complex ideas to life, transforming challenges into elegant solutions. I thrive in collaborative environments and am always eager to learn and explore new frontiers in tech.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <span className="inline-flex items-center bg-space-mid px-3 py-1 rounded-full text-sm font-medium text-gray-300">
                <Code size={16} className="mr-2 text-accent-teal" /> Full Stack Development
              </span>
              <span className="inline-flex items-center bg-space-mid px-3 py-1 rounded-full text-sm font-medium text-gray-300">
                <Rocket size={16} className="mr-2 text-accent-pink" /> Innovative Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
