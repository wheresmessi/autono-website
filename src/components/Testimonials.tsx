import React from 'react';
import '../styles/colors.css';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, image }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 relative">
    {/* Quote marks decoration */}
    <div className="absolute -top-4 right-6 text-6xl text-teal-400/20">"</div>
    
    <div className="flex items-start gap-4">
      <img 
        src={image} 
        alt={name} 
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <h4 className="text-lg font-medium text-white mb-1">{name}</h4>
        <p className="text-sm text-gray-400 mb-4">{role}</p>
        <p className="text-gray-300 leading-relaxed">{quote}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Fleet Manager at TechCorp",
      quote: "Autono's autonomous fleet management system has revolutionized our operations. The efficiency gains and safety improvements are remarkable.",
      image: "/assets/testimonials/person1.jpg"
    },
    {
      name: "James Wilson",
      role: "City Transport Director",
      quote: "Implementing Autono's smart city solutions has reduced traffic congestion by 30% and improved emergency response times significantly.",
      image: "/assets/testimonials/person2.jpg"
    },
    {
      name: "Maria Rodriguez",
      role: "Innovation Lead at LogiTech",
      quote: "The integration of Autono's technology into our logistics chain has been seamless. Their support team is exceptional.",
      image: "/assets/testimonials/person3.jpg"
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--color-background-dark)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4" style={{ color: 'var(--color-secondary)' }}>
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from the organizations and individuals who have transformed their operations with Autono's autonomous solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Testimonials; 