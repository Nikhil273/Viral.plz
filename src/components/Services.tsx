import React from 'react';
import { Video, TrendingUp, Instagram, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="h-12 w-12 text-electric-blue" />,
      title: "Reel Editing",
      description: "Professional short-form content that stops the scroll and drives engagement"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-electric-blue" />,
      title: "Social Media Strategy",
      description: "Data-driven content plans that build your brand and attract customers"
    },
    {
      icon: <Instagram className="h-12 w-12 text-electric-blue" />,
      title: "Instagram Management",
      description: "Complete account management including posting, stories, and community building"
    },
    {
      icon: <Target className="h-12 w-12 text-electric-blue" />,
      title: "Web Development Service",
      description: "Custom websites and web applications that showcase your brand professionally"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Our Services
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            Everything you need to dominate social media and grow your local business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl bg-dark-card hover:bg-dark-card/80 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 transform hover:-translate-y-2 border border-dark-border"
            >
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-dark-text mb-4">
                {service.title}
              </h3>
              <p className="text-dark-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;