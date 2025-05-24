import React, { useRef} from 'react';
import '../styles/colors.css';
import '../styles/carousel.css';
import TextContainer from './shared/TextContainer';
import { Link } from 'react-router-dom';

interface OfferingCardProps {
  title: string;
  description: string;
  isClickable?: boolean;
  isComingSoon?: boolean;
}

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description, isClickable = true, isComingSoon = false }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col h-full relative overflow-hidden"
      style={{ 
        backgroundColor: 'var(--color-primary)',
        border: '1px solid var(--color-border)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isComingSoon && (
        <div 
          className="absolute top-4 right-4 text-white text-sm font-medium px-3 py-1 rounded-full"
          style={{ backgroundColor: '#F99934' }}
        >
          Coming Soon
        </div>
      )}
      <h3 
        className="text-2xl font-semibold mb-4 transition-colors duration-300"
        style={{ 
          color: isHovered ? '#EA762C' : 'var(--color-secondary)'
        }}
      >
        {title}
      </h3>
      <p 
        className="leading-relaxed flex-grow mb-6"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {description}
      </p>
      {isClickable ? (
        <Link 
          to="/products"
          className="inline-block bg-[var(--color-button-primary)] hover:bg-[var(--color-primary-light)] text-[var(--color-text-primary)] font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 text-center"
          onClick={() => window.scrollTo(0, 0)}
        >
          Learn More
        </Link>
      ) : (
        <button 
          disabled
          className="inline-block bg-[var(--color-button-primary)] text-[var(--color-text-primary)] font-medium py-2 px-6 rounded-lg opacity-50 cursor-not-allowed"
        >
          Learn More
        </button>
      )}
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
      title: "Conforce",
      description: "Enterprise-grade solutions for managing construction projects with real-time monitoring, predictive maintenance, and optimization algorithms.",
      isComingSoon: false
    },
    {
      title: "Transforce",
      description: "Revolutionary transportation and logistics management system for optimizing fleet operations and delivery networks.",
      isComingSoon: true
    },
    {
      title: "Wareforce",
      description: "Advanced warehouse management system for inventory control, order fulfillment, and supply chain optimization.",
      isComingSoon: true
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 font-['Roboto'] font-medium uppercase"
                style={{ color: 'var(--color-background-secondary)' }}>
              TRANSFORM TODAY<br />THRIVE TOMORROW
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
                <h2 className="text-4xl lg:text-5xl font-normal leading-tight" style={{ color: 'var(--color-secondary)' }}>
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
            <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted2)' }}>
              OFFERINGS
            </h3>
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight" style={{ color: 'var(--color-secondary)' }}>
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <OfferingCard 
                key={index}
                title={offering.title}
                description={offering.description}
                isClickable={!offering.isComingSoon}
                isComingSoon={offering.isComingSoon}
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
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight" style={{ color: 'var(--color-secondary)' }}>
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
                className="text-5xl lg:text-6xl font-normal mb-6 leading-tight"
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
            src="/assets/snowforce-orange.png" 
            alt="Autono Logo" 
            className="w-[350px] opacity-60 hover:opacity-80 transition-opacity duration-500 transform hover:scale-105"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: '#E0E0E0' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-[var(--color-primary)] p-8 rounded-xl shadow-xl">
              <h3 className="uppercase tracking-wider font-light mb-2" style={{ color: 'var(--color-text-muted)' }}>
                Contact Us
              </h3>
              <h2 className="text-4xl font-normal mb-8" style={{ color: 'var(--color-text-muted)' }}>
                Get In Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name..." 
                    className="w-full p-3 rounded-lg bg-[var(--color-primary)]/80 border border-[var(--color-text-muted)]/20 focus:outline-none focus:border-[var(--color-text-muted)]"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Email</label>
                  <input 
                    type="email" 
                    placeholder="example@yourmail.com" 
                    className="w-full p-3 rounded-lg bg-[var(--color-primary)]/80 border border-[var(--color-text-muted)]/20 focus:outline-none focus:border-[var(--color-text-muted)]"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Subject</label>
                  <input 
                    type="text" 
                    placeholder="Title..." 
                    className="w-full p-3 rounded-lg bg-[var(--color-primary)]/80 border border-[var(--color-text-muted)]/20 focus:outline-none focus:border-[var(--color-text-muted)]"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: 'var(--color-text-muted)' }}>Message</label>
                  <textarea 
                    placeholder="Type Here..." 
                    rows={6}
                    className="w-full p-3 rounded-lg bg-[var(--color-primary)]/80 border border-[var(--color-text-muted)]/20 focus:outline-none focus:border-[var(--color-text-muted)]"
                    style={{ color: 'var(--color-text-muted)' }}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[var(--color-text-muted)] hover:bg-[var(--color-text-muted)]/90 text-[var(--color-primary)] font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Send Now
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  Ready to transform your construction operations? Get in touch with our team of experts who are ready to help you implement the perfect solution for your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-[var(--color-secondary)]">Phone Number</h4>
                    <p className="text-[var(--color-text-secondary)]">+6282 4032 567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-[var(--color-secondary)]">Email Address</h4>
                    <p className="text-[var(--color-text-secondary)]">contact@conforce.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-[var(--color-secondary)]">Our Office</h4>
                    <p className="text-[var(--color-text-secondary)]">2443 Oak Ridge, Omaha, QA 45065</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <svg className="w-8 h-8 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-[var(--color-secondary)]">WhatsApp</h4>
                    <p className="text-[var(--color-text-secondary)]">082-245-7253</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-[var(--color-primary)]/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7663120690635!2d-73.9852776!3d40.7484445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCc0NC40IkwgNzPCsDU5JzA3LjAiVw!5e0!3m2!1sen!2sus!4v1621523356679!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 