import React, { useState } from 'react';

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

  return (
    <section className="bg-white min-h-screen flex items-center py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-8">
          {/* Services Content */}
          <div className="space-y-4">
            <h3 className="text-gray-400 uppercase tracking-wider font-light">
              SERVICES
            </h3>
            <h2 className="text-3xl lg:text-4xl text-black font-light leading-tight">
              We Deliver Exceptional<br />
              Products and Services<br />
              Around the World
            </h2>
          </div>

          {/* Divider */}
          <div className="w-0.5 h-16 bg-gray-300 ml-2"></div>

          {/* Autonomous Driving Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-20">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl text-black font-light leading-tight">
                AUTONOMOUS<br />
                DRIVING
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience the future of mobility with our advanced autonomous driving technology. 
                Our vehicles are equipped with state-of-the-art sensors and AI systems that ensure 
                a safe and comfortable journey every time.
              </p>
              <button className="inline-flex items-center space-x-2 text-black border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                <span>Read More</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            
            <div className="relative">
              <img
                src="/src/assets/capture-2.PNG"
                alt="Autonomous Vehicle"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;