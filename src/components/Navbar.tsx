import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left */}
          <a href="/" className="flex items-center space-x-2 text-black font-bold text-xl">
            <Car className="h-6 w-6" />
            <span className="tracking-wider">AUTONO</span>
          </a>

          {/* Navigation and Subscribe button grouped on the right */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <a 
                href="#technology" 
                className="text-gray-800 hover:text-black transition-colors duration-200 font-medium"
              >
                Technology
              </a>
              <a 
                href="#about" 
                className="text-gray-800 hover:text-black transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a 
                href="#careers" 
                className="text-gray-800 hover:text-black transition-colors duration-200 font-medium"
              >
                Careers
              </a>
            </nav>

            <a 
              href="#subscribe" 
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-900 transition-colors duration-200"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;