import React, { useRef } from 'react';
import '../styles/colors.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={heroRef}
      className="relative h-[110vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-sm"
        style={{ transform: 'scaleY(-1)' }}
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-overlay)' }}></div>
      
      {/* Gradient overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64" 
        style={{ 
          background: 'linear-gradient(to top, var(--color-background-dark) 20%, transparent)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto -mt-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 font-['Roboto'] font-normal"
              style={{ color: 'var(--color-background-secondary)' }}>
            Transform today<br />Thrive tomorrow
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-medium"
             style={{ color: 'var(--color-background-secondary)' }}>
            Revolutionising how construction, logistics and warehouse companies work</p>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;