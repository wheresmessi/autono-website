import React from 'react';
import '../styles/colors.css';
import '../styles/carousel.css';

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

interface OfferingCardProps {
  title: string;
  description: string;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      style={{ 
        backgroundColor: 'var(--color-primary)',
        border: '1px solid var(--color-border)'
      }}
    >
      <h3 
        className="text-2xl font-semibold mb-4 transition-colors duration-300 cursor-pointer"
        style={{ 
          color: isHovered ? '#EA762C' : 'var(--color-secondary)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {title}
      </h3>
      <p 
        className="leading-relaxed"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {description}
      </p>
    </div>
  );
};

const ClientLogos: React.FC = () => {
  const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png";

  return (
    <div className="relative overflow-hidden h-[100px] w-full mx-auto">
      <div className="absolute left-0 flex animate-scroll">
        {/* Repeat the logo multiple times for continuous scrolling */}
        {[...Array(8)].map((_, index) => (
          <div 
            key={`logo-${index}`}
            className="flex-shrink-0 w-[300px] flex items-center justify-center px-12"
          >
            <img 
              src={logo} 
              alt="Microsoft Logo" 
              className="h-[40px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const VisionSection: React.FC = () => {
  const offerings = [
    {
      title: "Autonomous Fleet Management",
      description: "Enterprise-grade solutions for managing autonomous vehicle fleets with real-time monitoring, predictive maintenance, and optimization algorithms."
    },
    {
      title: "Smart City Integration",
      description: "Seamless integration with smart city infrastructure, enabling efficient traffic flow, reduced congestion, and enhanced urban mobility."
    },
    {
      title: "Personal Transport Solutions",
      description: "Revolutionary personal vehicles equipped with our advanced autonomous technology, offering unparalleled safety and comfort."
    }
  ];

  return (
    <>
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
                src="/assets/Capture.PNG"
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

      <section className="py-24" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-4 mb-16 text-center">
            <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted)' }}>
              OFFERINGS
            </h3>
            <h2 className="text-3xl lg:text-4xl font-light leading-tight" style={{ color: 'var(--color-secondary)' }}>
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <OfferingCard 
                key={index}
                title={offering.title}
                description={offering.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--color-background-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-4 mb-12 text-center">
            <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted)' }}>
              TRUSTED BY
            </h3>
            <h2 className="text-3xl lg:text-4xl font-light leading-tight" style={{ color: 'var(--color-secondary)' }}>
              Our Clients
            </h2>
          </div>
          
          <ClientLogos />
        </div>
      </section>
    </>
  );
};

export default VisionSection;