import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/colors.css';

interface Vehicle {
  id: number;
  name: string;
  description: string;
  image: string;
  specs: {
    range: string;
    topSpeed: string;
    chargingTime: string;
    capacity: string;
  };
}

const VehicleShowcase: React.FC = () => {
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Autono City",
      description: "The perfect urban commuter with compact dimensions and nimble handling.",
      image: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      specs: {
        range: "250 miles",
        topSpeed: "85 mph",
        chargingTime: "30 min (fast charge)",
        capacity: "4 passengers"
      }
    },
    {
      id: 2,
      name: "Autono Shuttle",
      description: "Spacious autonomous vehicle designed for ridesharing and family transport.",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600",
      specs: {
        range: "350 miles",
        topSpeed: "100 mph",
        chargingTime: "40 min (fast charge)",
        capacity: "6 passengers"
      }
    }
  ];

  const [activeVehicle, setActiveVehicle] = useState<Vehicle>(vehicles[0]);

  const TextContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="relative pl-8">
      <div 
        className="absolute left-0 top-0 bottom-0 w-0.5" 
        style={{ backgroundColor: '#EA762C', width: '2px' }}
      />
      {children}
    </div>
  );

  return (
    <section style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-24">
        <div className="space-y-8">
          {/* Services Content */}
          <TextContainer>
            <div className="space-y-4">
              <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted)' }}>
                SERVICES
              </h3>
              <h2 className="text-3xl lg:text-4xl font-light leading-tight" style={{ color: 'var(--color-heading-primary)' }}>
                We Deliver Exceptional<br />
                Products and Services<br />
                Around the World
              </h2>
            </div>
          </TextContainer>

          {/* Autonomous Driving Sections */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-20">
              {index % 2 === 0 && (
                <div className="relative">
                  <img
                    src="/src/assets/capture-2.PNG"
                    alt="Autonomous Vehicle"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-light leading-tight" style={{ color: 'var(--color-heading-primary)' }}>
                    AUTONOMOUS<br />
                    DRIVING
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    Experience the future of mobility with our advanced autonomous driving technology. 
                    Our vehicles are equipped with state-of-the-art sensors and AI systems that ensure 
                    a safe and comfortable journey every time.
                  </p>
                  <button className="inline-flex items-center space-x-2 px-6 py-2 rounded-full transition-colors duration-300"
                          style={{ 
                            color: 'var(--color-button-secondary-text)',
                            borderColor: 'var(--color-border-primary)',
                            borderWidth: '1px',
                            '--hover-bg': 'var(--color-button-primary)',
                            '--hover-text': 'var(--color-button-primary-text)'
                          } as React.CSSProperties}>
                    <span>Read More</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              
              {index % 2 !== 0 && (
                <div className="relative">
                  <img
                    src="/src/assets/capture-2.PNG"
                    alt="Autonomous Vehicle"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Manufacturing Approach Section */}
      <div className="relative h-[600px]">
        <img
          src="/src/assets/why-us.avif"
          alt="Manufacturing Robots"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl h-full flex items-center">
          <div className="max-w-md p-12 rounded-2xl flex backdrop-blur-sm"
               style={{ backgroundColor: 'var(--color-overlay-dark)' }}>
            <div className="w-0.5 mr-8 self-stretch" style={{ backgroundColor: '#EA762C', width: '2px' }}></div>
            
              <div>
                <h3 className="uppercase tracking-wider font-light mb-6" style={{ color: 'var(--color-text-muted)' }}>
                  WHY AUTONO
                </h3>
                <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6" style={{ color: 'var(--color-secondary)' }}>
                  A different approach,<br />
                  using a new method of<br />
                  manufacturing.
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-muted)' }}>
                  I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                </p>
                <button className="inline-flex items-center space-x-2 group" style={{ color: 'var(--color-secondary)' }}>
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
          </div>
        </div>
      </div>

      {/* Numbers Section */}
      <div className="relative h-[600px]">
        <div className="absolute left-0 w-1/2 h-full">
          <img
            src="/src/assets/robo-arm.avif"
            alt="Robot Arm"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center h-full">
            <div></div>
            
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-light leading-tight" style={{ color: 'var(--color-heading-primary)' }}>
                  Autono In Numbers
                </h2>
                <div className="grid grid-cols-2 gap-12">
                  {[
                    { value: "200", label: "Employees" },
                    { value: "5", label: "Core Teams" },
                    { value: "200M$", label: "Capital" },
                    { value: "326", label: "Partners" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <p className="text-4xl font-light" style={{ color: 'var(--color-heading-primary)' }}>{item.value}</p>
                      <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="py-24" style={{ backgroundColor: 'var(--color-background-dark)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted)' }}>
                    CAREERS
                  </h3>
                  <h2 className="text-3xl lg:text-4xl font-light leading-tight" style={{ color: 'var(--color-secondary)' }}>
                    We're looking for<br />
                    innovative talent to join<br />
                    our team. See all positions<br />
                    and submit your CV.
                  </h2>
                  <button className="inline-flex items-center space-x-2 px-6 py-2 rounded-full transition-colors duration-300"
                          style={{ 
                            color: 'var(--color-secondary)',
                            borderColor: 'var(--color-border-secondary)',
                            borderWidth: '1px',
                            '--hover-bg': 'var(--color-overlay)'
                          } as React.CSSProperties}>
                    <span>Openings</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
           
            <div className="p-8 rounded-2xl backdrop-blur-sm border"
                 style={{ 
                   backgroundColor: 'var(--color-overlay-dark)',
                   borderColor: 'var(--color-border-secondary)'
                 }}>  
                <div>
                  <h3 className="text-2xl font-light mb-4" style={{ color: 'var(--color-secondary)' }}>ELECTRICAL ENGINEER</h3>
                  <p className="mb-2" style={{ color: 'var(--color-text-muted)' }}>San Francisco, CA</p>
                  <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>
                    I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                  </p>
                  <button className="inline-flex items-center space-x-2 px-6 py-2 rounded-full transition-colors duration-300"
                          style={{ 
                            color: 'var(--color-secondary)',
                            borderColor: 'var(--color-border-secondary)',
                            borderWidth: '1px',
                            '--hover-bg': 'var(--color-overlay)'
                          } as React.CSSProperties}>
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="w-2 h-2 rounded-full" 
                       style={{ backgroundColor: index === 0 ? 'var(--color-secondary)' : 'var(--color-overlay)' }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      

      {/* Industry Partners Section */}
      <div className="py-24" style={{ backgroundColor: 'var(--color-background-dark)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="uppercase tracking-wider font-light" style={{ color: 'var(--color-text-muted)' }}>
                    INDUSTRY
                  </h3>
                  <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6" style={{ color: 'var(--color-secondary)' }}>
                    Our<br />
                    Partners
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    Click here to add your own content and customize the text. This is a great place to tell a story about your company and let your users know a little more about the company's history, the team's background, or any other information you'd like to share. Just click "Edit Text" to get started.
                  </p>
                </div>
              </div>
            <div className="grid grid-cols-2 gap-12">
              {[
                { name: "GENERAL TRANSPORT" },
                { name: "IDI SOFTWARE" },
                { name: "IMOGEN CARS" },
                { name: "TRI-NEX" }
              ].map((partner, index) => (
                <div key={index} className="space-y-4 text-center">
                  <div className="h-24 flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                         style={{ color: 'var(--color-secondary)' }}>
                      <path d={
                        index === 0 ? "M4 4h16v16H4z M4 12h16 M12 4v16" :
                        index === 1 ? "M4 20L20 4M4 4l16 16" :
                        index === 2 ? "M12 4v16M4 12h16" :
                        "M4 20L20 4"
                      } />
                    </svg>
                  </div>
                  <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;