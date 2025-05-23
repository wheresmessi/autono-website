import React from 'react';
import '../styles/colors.css';

const TextContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative pl-8">
    <div 
      className="absolute left-0 top-0 h-full"
      style={{ 
        backgroundColor: '#EA762C',
        width: '2px'
      }}
    />
    {children}
  </div>
);

const VisionSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center py-24" style={{ backgroundColor: 'var(--color-background-dark)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <TextContainer>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted)' }}>
                  VISION
                </h3>
                <h2 className="text-4xl lg:text-5xl font-light leading-tight" style={{ color: 'var(--color-secondary)' }}>
                  We're Changing the<br />
                  Way the World Thinks<br />
                  About Cars
                </h2>
              </div>
              <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
                Our revolutionary autonomous technology combines advanced AI with cutting-edge hardware
                to deliver the safest and most efficient driving experience. We're reimagining mobility
                for the future generation.
              </p>
            </div>
          </TextContainer>

          <div className="relative">
            <img
              src="/src/assets/Capture.PNG"
              alt="Autono Concept Car"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0" style={{ 
              background: 'linear-gradient(to right, var(--color-background-dark), transparent)' 
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;