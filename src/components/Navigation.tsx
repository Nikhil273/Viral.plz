import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-bg/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-electric-blue" />
            <span className="text-2xl font-bold text-dark-text">Viral.plz</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-dark-text hover:text-electric-blue transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose')} className="text-dark-text hover:text-electric-blue transition-colors">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-dark-text hover:text-electric-blue transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-dark-text hover:text-electric-blue transition-colors">
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-text hover:text-electric-blue transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-sm shadow-lg shadow-black/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-dark-text hover:text-electric-blue transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('why-choose')} className="block px-3 py-2 text-dark-text hover:text-electric-blue transition-colors">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-dark-text hover:text-electric-blue transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-dark-text hover:text-electric-blue transition-colors">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;