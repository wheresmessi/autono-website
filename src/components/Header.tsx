import React, { useState, useEffect } from 'react';
import '../styles/colors.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'var(--color-primary)' : 'transparent',
        boxShadow: isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/image.png" 
              alt="Autono Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Right side navigation and buttons */}
          <div className="flex items-center justify-end flex-1 space-x-8">
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              
              <a 
                href="#vehicles" 
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ color: 'var(--color-primary-light)' }}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                style={{ color: 'var(--color-primary-light)' }}
              >
                About
              </a>
            </nav>

            {/* Contact Button */}
            <button 
              className="hidden md:inline-flex items-center px-6 py-2 rounded-full transition-colors duration-300 hover:opacity-90"
              style={{ 
                backgroundColor: 'var(--color-button-primary)',
                color: 'var(--color-button-primary-text)',
              }}
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" style={{ color: 'var(--color-text-primary)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 