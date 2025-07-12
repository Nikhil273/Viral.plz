import React from 'react';
import { Clock, Award, Users, Zap, CheckCircle } from 'lucide-react';

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Clock className="h-8 w-8 text-electric-blue" />,
      title: "Fast Delivery",
      description: "24-hour turnaround on most projects"
    },
    {
      icon: <Award className="h-8 w-8 text-electric-blue" />,
      title: "Focused on Results",
      description: "We measure success by your growth"
    },
    {
      icon: <Users className="h-8 w-8 text-electric-blue" />,
      title: "Personalized Support",
      description: "Dedicated account manager for your brand"
    },
    {
      icon: <Zap className="h-8 w-8 text-electric-blue" />,
      title: "Trusted by Local Brands",
      description: "50+ successful local business partnerships"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-electric-blue" />,
      title: "Proven Process",
      description: "Our system consistently delivers viral content"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-gray-900 to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Why Choose Viral.plz?
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            We're not just another agency - we're your growth partners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-dark-card p-8 rounded-2xl shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-1 border border-dark-border"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-electric-blue/10 p-3 rounded-xl">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-text mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-dark-text-secondary">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;