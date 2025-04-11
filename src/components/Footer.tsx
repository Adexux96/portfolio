import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    // Added subtle gradient border top
    <footer className="bg-space-dark/90 backdrop-blur-sm mt-16 py-8 border-t border-transparent bg-clip-padding border-gradient-to-r from-accent-purple/50 via-accent-teal/50 to-accent-pink/50 pt-px">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/Adexux96"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-teal transition duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://twitter.com/Adexux96"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-teal transition duration-300"
            aria-label="Twitter Profile"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:adrian@itzthelorenz.me"
            className="text-gray-400 hover:text-accent-teal transition duration-300"
            aria-label="Send Email"
          >
            <Mail size={24} />
          </a>
        </div>
        {/* Use body font */}
        <p className="text-sm font-body">&copy; {year} Adrián Lorenzo. All rights reserved.</p>
        {/* Optional: Add a small link back or creative credit */}
        <p className="text-xs mt-2 opacity-70 font-body">Powered by Starlight and Code</p>
      </div>
    </footer>
  );
};

export default Footer;
