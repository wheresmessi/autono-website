import React, { useState, useEffect } from 'react';
import '../styles/colors.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
      style={{ 
        backgroundColor: isScrolled || isMobileMenuOpen ? 'var(--color-primary)' : 'transparent',
        boxShadow: isScrolled || isMobileMenuOpen ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/image.png"
              alt="Autono Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Right side navigation and buttons */}
          <div className="flex items-center justify-end flex-1 space-x-8">
            {/* Navigation */}
            <nav className={`
              md:flex md:space-x-8
              ${isMobileMenuOpen ? 'flex' : 'hidden'}
              md:relative md:top-auto md:right-auto md:bg-transparent
              absolute top-full right-0 left-0 
              flex-col md:flex-row
              space-y-4 md:space-y-0
              py-4 md:py-0
              px-4 md:px-0
              bg-[var(--color-primary)]
              md:translate-y-0
              transition-all duration-300
              w-full md:w-auto
            `}>
              <a 
                href="#vehicles" 
                className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#99CCD9] w-full md:w-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium text-white transition-colors duration-200 hover:text-[#99CCD9] w-full md:w-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </nav>

            {/* Contact Button */}
            <button 
              onClick={scrollToFooter}
              className={`
                items-center px-6 py-2 rounded-full 
                transition-all duration-300 
                bg-white text-black hover:bg-teal-400 hover:text-white
                ${isMobileMenuOpen ? 'flex' : 'hidden md:inline-flex'}
              `}
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden" 
              style={{ color: 'white' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 