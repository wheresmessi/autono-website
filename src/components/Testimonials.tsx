import React from 'react';
import '../styles/colors.css';

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  offset?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, image, offset = '' }) => (
  <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${offset}`}>
    <div className="flex items-start gap-4">
      <img 
        src={image} 
        alt={name} 
        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <h4 className="text-lg font-medium mb-2" style={{ color: 'var(--color-secondary)' }}>{name}</h4>
        <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{text}</p>
      </div>
    </div>
    {/* Quote marks */}
    <div className="absolute -top-2 -right-2 text-4xl text-teal-400/20">"</div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Mehwish",
      text: "Compliment interested discretion estimating on stimulated apartments oh.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
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
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background-dark)' }}>
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:pr-8">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight" style={{ color: 'var(--color-secondary)' }}>
              What Our<br />
              Customers Says
            </h2>
            <p className="text-lg mb-12 leading-relaxed max-w-md" style={{ color: 'var(--color-text-muted)' }}>
              Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.
            </p>
            <div className="mt-16">
              <img 
                src="/assets/logo-orange.png" 
                alt="Autono Logo" 
                className="w-32 opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Right Testimonials */}
          <div className="relative">
            <div className="space-y-8">
              <TestimonialCard 
                {...testimonials[0]} 
                offset="ml-0"
              />
              <TestimonialCard 
                {...testimonials[1]} 
                offset="ml-8"
              />
              <TestimonialCard 
                {...testimonials[2]} 
                offset="ml-4"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Testimonials;