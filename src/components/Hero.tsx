import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bg to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-dark-text mb-6 leading-tight">
            We Make Local Brands
            <span className="text-electric-blue block">Go Viral</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-text-secondary mb-8 max-w-3xl mx-auto">
            <span className="font-semibold">Reels</span> | <span className="font-semibold">Instagram Growth</span> | <span className="font-semibold">Local Ads</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-electric-blue hover:bg-electric-blue-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
            >
              Get Free Audit
              <ArrowRight size={20} />
            </button>
            
            <button className="flex items-center gap-2 text-dark-text hover:text-electric-blue transition-colors font-semibold">
              <Play size={20} />
              Watch Our Work
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-blue mb-2">50+</div>
              <div className="text-dark-text-secondary">Local Brands Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-blue mb-2">50M+</div>
              <div className="text-dark-text-secondary">Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-blue mb-2">24h</div>
              <div className="text-dark-text-secondary">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;