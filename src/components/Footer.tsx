import React from 'react';
import { Instagram, MessageSquare, Mail, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-card py-16 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-electric-blue" />
              <span className="text-2xl font-bold text-dark-text">Viral.plz</span>
            </div>
            <p className="text-dark-text-secondary mb-6 max-w-md">
              We help local businesses go viral on social media through strategic content creation, 
              Instagram growth, and targeted advertising.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/viral.plz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark-bg p-3 rounded-full hover:bg-electric-blue hover:text-white transition-colors border border-dark-border"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark-bg p-3 rounded-full hover:bg-electric-blue hover:text-white transition-colors border border-dark-border"
              >
                <MessageSquare className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hello@viral.plz"
                className="bg-dark-bg p-3 rounded-full hover:bg-electric-blue hover:text-white transition-colors border border-dark-border"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-dark-text mb-4">Services</h4>
            <ul className="space-y-2 text-dark-text-secondary">
              <li><a href="#" className="hover:text-electric-blue transition-colors">Reel Editing</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Social Media Strategy</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Instagram Management</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Web Development Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-dark-text mb-4">Company</h4>
            <ul className="space-y-2 text-dark-text-secondary">
              <li><a href="#" className="hover:text-electric-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-border mt-12 pt-8 text-center">
          <p className="text-dark-text-secondary">
            © 2024 Viral.plz. All rights reserved. Making local brands go viral, one reel at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;