import React, { useRef, useEffect } from 'react';
import '../styles/colors.css';
import '../styles/carousel.css';

const TextContainer = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="relative pl-8" ref={containerRef}>
      <div 
        className="absolute left-0 top-0 h-full"
        style={{ 
          backgroundColor: '#EA762C',
          width: '2px'
        }}
      />
      <div
        className="absolute left-[-2px] w-[6px] h-[50px]"
        style={{
          backgroundColor: '#EA762C',
          animation: isVisible ? 'moveBox 1.5s ease forwards' : 'none',
          bottom: '0',
        }}
      />
      <style>
        {`
          @keyframes moveBox {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-900%);
            }
          }
        `}
      </style>
      {children}
    </div>
  );
};

interface OfferingCardProps {
  title: string;
  description: string;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
      style={{ 
        backgroundColor: 'var(--color-primary)',
        border: '1px solid var(--color-border)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 
        className="text-2xl font-semibold mb-4 transition-colors duration-300"
        style={{ 
          color: isHovered ? '#EA762C' : 'var(--color-secondary)'
        }}
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

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  offset?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, image, offset = '' }) => (
  <div
    className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-2 hover:scale-105 ${offset}`}
    style={{ backgroundColor: 'white', position: 'relative', zIndex: 20 }}
  >
    <div className="flex items-start gap-4">
      <img 
        src={image} 
        alt={name} 
        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-secondary)' }}>{name}</h4>
        <p style={{ color: 'var(--color-text-muted2)' }}>{text}</p>
      </div>
    </div>
    <div className="absolute -top-2 -right-2 text-4xl" style={{ color: 'var(--color-secondary)', opacity: 0.2 }}>"</div>
  </div>
);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  const testimonials = [
    {
      name: "Mehwish",
      text: "Compliment interested discretion estimating on stimulated apartments oh.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Elizabeth Jeff", 
      text: "Dear so sing when in find read of call. As distrusts behaviour abilities defective is.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Thomas",
      text: "Never at water me might. On formed merits hunted unable merely by mr whence or.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-[110vh] flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scaleY(-1)' }}
        >
          <source src="/assets/bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-overlay)' }}></div>
        
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(70% 70% at 50% 50%, transparent 45%, rgba(46, 60, 75, 0.5) 80%, rgba(46, 60, 75, 0.8) 100%)',
            pointerEvents: 'none'
          }}
        ></div>
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-64" 
          style={{ 
            background: 'linear-gradient(to top, var(--color-background-dark), transparent)'
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

      {/* About Us Section */}
      <section id="about" className="min-h-screen flex items-center py-24" style={{ backgroundColor: 'var(--color-background-dark)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <TextContainer>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted)' }}>
                    ABOUT US
                  </h3>
                  <h2 className="text-4xl lg:text-5xl font-light leading-tight" style={{ color: 'var(--color-secondary)' }}>
                    Revolutionizing<br />
                    Construction &<br />
                    Warehouse Solutions
                  </h2>
                </div>
                <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
                  We are a forward-thinking IT solutions company committed to empowering construction, warehouses, and transportation companies with cutting-edge digital tools. With a deep understanding of industry-specific challenges, we design custom ERP & CRM solutions and offer end-to-end digital services to optimize your operations, reduce costs, and boost productivity.
                </p>
                <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
                  Whether you're looking to digitize your supply chain, improve customer relationships, or enhance your brand online, we deliver scalable, secure solutions that drive results.
                </p>
              </div>
            </TextContainer>

            <div className="relative">
              <img
                src="/assets/Capture.PNG"
                alt="Digital Transformation"
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

      {/* Testimonials Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-background-dark)' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:pr-8">
              <h2
                className="text-5xl lg:text-6xl font-light mb-6 leading-tight"
                style={{ color: 'var(--color-secondary)' }}
              >
                What Our<br /> Customers Says
              </h2>
              <p
                className="text-lg mb-8 leading-relaxed max-w-md"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.
              </p>
            </div>

            <div className="relative ">
              <div className="space-y-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={index}
                    {...testimonial} 
                    offset={index % 2 === 0 ? "ml-16" : "ml-2"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -left-20 z-10">
          <img 
            src="/assets/logo-orange.png" 
            alt="Autono Logo" 
            className="w-[350px] opacity-60 hover:opacity-80 transition-opacity duration-500 transform hover:scale-105"
          />
        </div>
      </section>
    </>
  );
};

export default Home; 