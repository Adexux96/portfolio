import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="bg-space-dark/80 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-transparent bg-clip-padding border-gradient-to-r from-accent-pink/50 via-accent-teal/50 to-accent-purple/50 pb-px">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Use heading font for brand */}
          <a href="#home" className="flex items-center space-x-2 text-white text-xl font-bold group transition duration-300 font-heading">
             <Rocket className="text-accent-teal group-hover:text-glow-strong transition-all duration-300" size={28}/>
             <span className="group-hover:text-accent-teal transition duration-300">Adrián Lorenzo</span>
          </a>

          {/* Use heading font for nav links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-accent-teal transition duration-300 px-3 py-2 rounded-md text-sm font-medium relative group font-heading" // Apply heading font
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-accent-teal focus:outline-none focus:text-accent-teal transition duration-300"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Use heading font */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-space-mid/95 backdrop-blur-sm absolute w-full shadow-lg border-t border-space-light/30`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:bg-space-light hover:text-accent-teal block px-3 py-2 rounded-md text-base font-medium transition duration-200 font-heading" // Apply heading font
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
