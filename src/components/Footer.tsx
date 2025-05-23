import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import '../styles/colors.css';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-background-secondary)' }} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and Navigation Links */}
          <div className="md:col-span-3">
            <div className="mb-12">
              <img 
                src="/assets/image.png" 
                alt="Autono Logo" 
                className="h-8 w-auto"
              />
            </div>
            <nav className="space-y-4">
              <a href="#" className="block transition-colors duration-200" style={{ color: 'var(--color-text-secondary)' }}>Technology</a>
              <a href="#" className="block transition-colors duration-200" style={{ color: 'var(--color-text-secondary)' }}>About</a>
              <a href="#" className="block transition-colors duration-200" style={{ color: 'var(--color-text-secondary)' }}>Careers</a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4">
            <div className="space-y-4">
              <p style={{ color: 'var(--color-text-secondary)' }}>Tel: 123-456-7890</p>
              <p style={{ color: 'var(--color-text-secondary)' }}>Email: info@mysite.com</p>
              <div className="pt-4">
                <p style={{ color: 'var(--color-text-secondary)' }}>500 Terry Francine St</p>
                <p style={{ color: 'var(--color-text-secondary)' }}>San Francisco, CA 94158</p>
              </div>
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-medium mb-6" style={{ color: 'var(--color-heading-primary)' }}>SUBSCRIBE</h3>
            <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              Sign up to receive Autono news and updates.
            </p>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                    Email <span style={{ color: 'var(--color-text-primary)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full py-2 focus:outline-none"
                    style={{ 
                      borderBottom: '1px solid var(--color-border-secondary)',
                      backgroundColor: 'transparent'
                    }}
                    required
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="subscribe"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="subscribe" style={{ color: 'var(--color-text-secondary)' }}>
                    Yes, subscribe me to your newsletter. <span style={{ color: 'var(--color-text-primary)' }}>*</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="px-8 py-3 rounded-full transition-colors duration-300"
                style={{ 
                  backgroundColor: 'var(--color-button-primary)',
                  color: 'var(--color-button-primary-text)'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            {[Linkedin, Facebook, Twitter, Instagram].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="transition-colors duration-200"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;