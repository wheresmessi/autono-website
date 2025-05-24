import React from 'react';
import TextContainer from './shared/TextContainer';

interface OrbitItem {
  id: number;
  name: string;
  icon: string;
  orbit: number;
  angle: number;
}

const Products = () => {
  const [rotation, setRotation] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  // Add custom animations to global styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin-slow {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }

      /* Spin Slower Animation */
      @keyframes spin-slower {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(-360deg); }
      }

      /* Float Animation */
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      /* Float Reverse Animation */
      @keyframes float-reverse {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(10px); }
      }

      /* Pulse Animation */
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }

      /* Animation Classes */
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
      .animate-spin-slower {
        animation: spin-slower 25s linear infinite;
      }
      .animate-spin-reverse-slow {
        animation: spin-slower 30s linear infinite;
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .animate-float-reverse {
        animation: float-reverse 8s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function
    return () => {
      if (style.parentNode) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const features = [
    'Proven track record of 98% on-time project delivery',
    'Average 23% reduction in project costs for our clients',
    '24/7 dedicated support from construction experts',
    'Seamless integration with existing tools and workflows',
    'Military-grade security for your project data',
    'Scalable solutions for projects of any size',
  ];

  const stats = [
    { label: 'Projects Completed', value: '2,500+' },
    { label: 'Team Members', value: '200+' },
    { label: 'Countries Served', value: '45+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Active Users', value: '25,000+' },
  ];

  const solutions: OrbitItem[] = [
    { id: 1, name: 'Project Mgmt', icon: '📊', orbit: 1, angle: 0 },
    { id: 2, name: 'Collaboration', icon: '🤝', orbit: 1, angle: 90 },
    { id: 3, name: 'Analytics', icon: '📈', orbit: 1, angle: 180 },
    { id: 4, name: 'Documents', icon: '📑', orbit: 1, angle: 270 },
    { id: 5, name: 'Resource Track', icon: '📋', orbit: 2, angle: 0 },
    { id: 6, name: 'Mobile Access', icon: '📱', orbit: 2, angle: 60 },
    { id: 7, name: 'Custom Reports', icon: '📄', orbit: 2, angle: 120 },
    { id: 8, name: 'Scheduling', icon: '📅', orbit: 2, angle: 180 },
    { id: 9, name: 'Inventory', icon: '📦', orbit: 2, angle: 240 },
    { id: 10, name: 'Safety Tools', icon: '🦺', orbit: 2, angle: 300 },
  ];

  return (
    <div className="bg-[#1F1F1F] text-[#EEEEEE]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3C3C3C] via-[#1F1F1F] to-[#3C3C3C] min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 font-['Roboto'] font-normal text-[#EEEEEE] animate-fadeInUp uppercase">
            THE SMART FORCE BEHIND EVERY CONSTRUCTION PROJECT
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-medium text-[#99CCD9] animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Supporting You with Powerful, Intelligent Project Management Solutions
          </p>
          <button className="relative bg-[#4B8898] hover:bg-[#99CCD9] text-[#1F1F1F] font-medium px-12 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_5px_rgba(75,136,152,0.6)] hover:shadow-[#4B8898]/60">
            <span className="relative z-10">Book a Call</span>
            <span className="absolute inset-0 rounded-lg bg-[#4B8898] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </section>

      {/* Why Choose Conforce Section */}
      <section className="min-h-screen py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <TextContainer>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="uppercase tracking-wider font-normal" style={{ color: 'var(--color-text-muted)' }}>
                  WHY CHOOSE CONFORCE
                </h3>
                <h2 className="text-4xl lg:text-5xl font-normal leading-tight">
                  Trusted by Leading<br />Construction Firms<br />Worldwide
                </h2>
              </div>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Conforce delivers unmatched efficiency and control for your projects, with proven success in optimizing construction operations.
              </p>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="bg-[var(--color-primary)]/20 p-1.5 rounded-lg group-hover:bg-[var(--color-primary)]/30">
                      <svg className="h-5 w-5" style={{ color: 'var(--color-text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3" style={{ color: 'var(--color-text-muted)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-[var(--color-text-muted)] font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1">
                Get Started
              </button>
            </div>
          </TextContainer>
          <div className="bg-[var(--color-primary)]/5 rounded-2xl p-8 border border-[var(--color-primary)]/30 shadow-2xl backdrop-blur-sm">
            <div className="space-y-6">
              <div className="text-5xl font-bold">15+</div>
              <h3 className="text-2xl font-semibold">Years of Excellence</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Delivering cutting-edge construction solutions worldwide</p>
              <div className="pt-6 space-y-4 border-t border-[var(--color-primary)]/30">
                {stats.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{item.label}:</span>
                    <span style={{ color: 'var(--color-text-muted)' }} className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="min-h-screen bg-gradient-to-b from-[#3C3C3C] to-[#1F1F1F] py-32 relative overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 relative" style={{ height: '900px' }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-2xl z-10 px-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#EEEEEE] mb-4">Our Solutions</h2>
            <p className="text-lg md:text-xl text-[#99CCD9] mb-8">
              Comprehensive tools that revolve around your construction needs
            </p>
            <button className="bg-gradient-to-r from-[#4B8898] to-[#3A6A7A] hover:from-[#5BA8B8] hover:to-[#4B8898] text-[#EEEEEE] font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#4B8898]/30 z-20 relative">
              Explore Solutions
              <svg className="h-5 w-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Animated Rings */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            {/* Middle Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-[#4B8898]/20 rounded-full animate-spin-reverse-slow" style={{ width: '600px', height: '600px' }}></div>
            
            {/* Outer Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-[#4B8898]/10 rounded-full animate-spin-slower" style={{ width: '800px', height: '800px' }}></div>
            
            {/* Revolving Elements */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5 + rotation) % 360;
              const radians = (angle * Math.PI) / 180;
              const radius = 300 + (i % 4) * 150; // Reduced radius and spread
              const x = radius * Math.cos(radians);
              const y = radius * Math.sin(radians);
              const size = 6 + (i % 4);
              const delay = i * 0.1;
              const animationDirection = i % 2 === 0 ? 'animate-float' : 'animate-float-reverse';
              
              return (
                <div
                  key={`dot-${i}`}
                  className={`absolute rounded-full bg-[#99CCD9] opacity-30 ${animationDirection}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${delay}s`,
                    opacity: 0.2 + (i % 4) * 0.2, // Vary opacity
                  }}
                />
              );
            })}
          </div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-10">
            {solutions.map((item) => {
              const radius = 300 + (item.orbit - 1) * 200; // Reduced radius
              const rotatedAngle = (item.angle + rotation) % 360;
              const radians = (rotatedAngle * Math.PI) / 180;
              const x = radius * Math.cos(radians);
              const y = radius * Math.sin(radians);
              
              return (
                <div
                  key={item.id}
                  className="absolute text-center transition-all duration-1000 ease-in-out hover:scale-110 hover:z-20"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#4B8898] rounded-full shadow-lg hover:shadow-[#99CCD9]/30 transition-all duration-300 hover:bg-[#5BA8B8] transform hover:rotate-12">
                    <span className="text-xl md:text-2xl">{item.icon}</span>
                  </div>
                  <div className="mt-2 text-sm md:text-base text-[#EEEEEE] font-medium bg-[#3C3C3C]/80 px-2 py-1 rounded-md">
                    {item.name}
                  </div>
                </div>
              );
            })}
            
            {/* Additional floating elements */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 + rotation * 1.5) % 360;
              const radians = (angle * Math.PI) / 180;
              const radius = 300 + (i % 4) * 150; // Reduced radius and spread
              const x = radius * Math.cos(radians);
              const y = radius * Math.sin(radians);
              const size = 8 + (i % 3) * 2;
              
              return (
                <div
                  key={`floating-${i}`}
                  className="absolute rounded-full bg-[#99CCD9] opacity-30"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: 'translate(-50%, -50%)',
                    animation: i % 2 === 0 ? 'pulse 3s infinite' : 'pulse 4s infinite',
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-[#1F1F1F] to-[#3C3C3C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal text-[#EEEEEE] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-[#99CCD9] max-w-2xl mx-auto">Choose the perfect plan for your construction business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-[#2A2A2A] rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4B8898]/20">
              <div className="text-center">
                <h3 className="text-2xl font-normal text-[#EEEEEE] mb-2">Basic</h3>
                <p className="text-[#99CCD9] mb-6">Perfect for small projects</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#EEEEEE]">₹7,999</span>
                  <span className="text-[#99CCD9]">/month</span>
                </div>
                <button className="w-full bg-[#4B8898] hover:bg-[#5BA8B8] text-[#1F1F1F] font-medium py-3 px-6 rounded-lg transition-colors duration-300 mb-8">
                  Get Started
                </button>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 5 team members
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    3 active projects
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Basic support
                  </li>
                </ul>
              </div>
            </div>

            {/* Popular Plan */}
            <div className="bg-gradient-to-br from-[#4B8898] to-[#3A6A7A] rounded-xl p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#99CCD9] text-[#1F1F1F] text-xs font-bold px-4 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-normal text-[#EEEEEE] mb-2">Professional</h3>
                <p className="text-[#D1E7EC] mb-6">Ideal for growing teams</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#EEEEEE]">₹24,999</span>
                  <span className="text-[#D1E7EC]">/month</span>
                </div>
                <button className="w-full bg-[#1F1F1F] hover:bg-[#333333] text-[#EEEEEE] font-medium py-3 px-6 rounded-lg transition-colors duration-300 mb-8">
                  Get Started
                </button>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 20 team members
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    15 active projects
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#D1E7EC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    API access
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#2A2A2A] rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#4B8898]/20">
              <div className="text-center">
                <h3 className="text-2xl font-normal text-[#EEEEEE] mb-2">Enterprise</h3>
                <p className="text-[#99CCD9] mb-6">For large organizations</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#EEEEEE]">Custom</span>
                </div>
                <button className="w-full bg-[#4B8898] hover:bg-[#5BA8B8] text-[#1F1F1F] font-medium py-3 px-6 rounded-lg transition-colors duration-300 mb-8">
                  Contact Sales
                </button>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited team members
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited projects
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-[#EEEEEE]">
                    <svg className="h-5 w-5 text-[#4B8898] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    On-premise deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#99CCD9] mb-4">Need help choosing the right plan?</p>
            <button className="text-[#4B8898] hover:text-[#99CCD9] font-medium flex items-center justify-center mx-auto">
              Contact our sales team
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
