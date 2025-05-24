import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import '../styles/colors.css';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-background-secondary)' }} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Navigation Links */}
          <div className="space-y-8">
            <div>
              <img 
                src="/assets/image.png" 
                alt="Conforce Logo" 
                className="h-8 w-auto mb-8"
              />
              <nav className="space-y-4">
                <a 
                  href="#" 
                  className="block transition-colors duration-200 hover:text-[var(--color-button-primary)]" 
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Products
                </a>
                <a 
                  href="#" 
                  className="block transition-colors duration-200 hover:text-[var(--color-button-primary)]" 
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="block transition-colors duration-200 hover:text-[var(--color-button-primary)]" 
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {[Linkedin, Facebook, Twitter, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="transition-colors duration-200 hover:text-[var(--color-button-primary)]"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium" style={{ color: 'var(--color-heading-primary)' }}>
              Contact Us
            </h3>
            <div className="space-y-4">
              <p 
                className="flex items-center space-x-2 hover:text-[var(--color-button-primary)] transition-colors duration-200" 
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <span>Tel: 123-456-7890</span>
              </p>
              <p 
                className="flex items-center space-x-2 hover:text-[var(--color-button-primary)] transition-colors duration-200" 
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <span>Email: info@mysite.com</span>
              </p>
              <div className="pt-4">
                <p style={{ color: 'var(--color-text-secondary)' }}>500 Terry Francine St</p>
                <p style={{ color: 'var(--color-text-secondary)' }}>San Francisco, CA 94158</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700/20">
          <p className="text-sm text-center" style={{ color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} Conforce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;