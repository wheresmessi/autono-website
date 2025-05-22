import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-[110vh] flex items-center justify-center bg-cover bg-bottom transition-all duration-700 ease-in-out overflow-hidden"
      style={{ 
        backgroundImage: 'url(/src/assets/Hero-bg.avif)',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 bg-black/20 "></div>
      {/* Add gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto -mt-40"> {/* Added negative margin top */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight mb-6 font-['Roboto'] font-extralight">
            THE FUTURE OF<br />MOBILITY IS HERE
          </h1>
          <p className="text-xl md:text-2xl text-black mb-10">
            Discover the safest self-driving experience with Autono.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-8 h-8 text-black" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;