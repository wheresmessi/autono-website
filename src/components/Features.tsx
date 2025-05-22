import React from 'react';
import { ShieldCheck, Zap, Compass, Cpu } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-black p-8 rounded-2xl transition-all duration-500 hover:bg-gray-900">
      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-white" })}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck />,
      title: "Vision Technology",
      description: "Advanced neural networks and sensor fusion provide unparalleled 360° awareness and predictive capabilities."
    },
    {
      icon: <Zap />,
      title: "Electric Performance",
      description: "Zero-emission powertrains delivering instant torque and sustainable mobility for a cleaner future."
    },
    {
      icon: <Compass />,
      title: "Autonomous Navigation",
      description: "AI-driven pathfinding with real-time adaptation to traffic patterns and environmental conditions."
    },
    {
      icon: <Cpu />,
      title: "Smart Integration",
      description: "Seamless connectivity with intuitive controls and personalized cabin experiences for every journey."
    }
  ];

  return (
    <section className="bg-black min-h-screen flex items-center py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"> {/* Changed gap-12 to gap-20 */}
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-gray-400 uppercase tracking-wider font-light">
                VISION
              </h3>
              <h2 className="text-4xl lg:text-5xl text-white font-light leading-tight">
                We're Changing the<br />
                Way the World Thinks<br />
                About Cars
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Our revolutionary autonomous technology combines advanced AI with cutting-edge hardware
              to deliver the safest and most efficient driving experience. We're reimagining mobility
              for the future generation.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/src/assets/Capture.PNG"
              alt="Autono Concept Car"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          </div>
        </div>

            {/* Add gradient overlay 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>*/}
      </div>
    </section>
  );
};

export default Features;