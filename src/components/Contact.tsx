import React, { useState } from 'react';
import { MessageSquare, Instagram, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Ready to Go Viral?
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            Let's discuss how we can help your business dominate social media
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-dark-text mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-green-900/20 rounded-xl hover:bg-green-900/30 transition-colors group border border-green-800/30"
              >
                <MessageSquare className="h-8 w-8 text-green-600" />
                <div>
                  <div className="font-semibold text-dark-text">WhatsApp</div>
                  <div className="text-dark-text-secondary">Get instant response</div>
                </div>
              </a>
              
              <a 
                href="https://instagram.com/viral.plz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-pink-900/20 rounded-xl hover:bg-pink-900/30 transition-colors group border border-pink-800/30"
              >
                <Instagram className="h-8 w-8 text-pink-600" />
                <div>
                  <div className="font-semibold text-dark-text">Instagram</div>
                  <div className="text-dark-text-secondary">@viral.plz</div>
                </div>
              </a>
              
              <div className="flex items-center space-x-4 p-4 bg-blue-900/20 rounded-xl border border-blue-800/30">
                <Phone className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-dark-text">Phone</div>
                  <div className="text-dark-text-secondary">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-purple-900/20 rounded-xl border border-purple-800/30">
                <Mail className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="font-semibold text-dark-text">Email</div>
                  <div className="text-dark-text-secondary">hello@viral.plz</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-dark-text mb-6">
              Tell Us About Your Business
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all text-dark-text placeholder-dark-text-secondary"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all text-dark-text placeholder-dark-text-secondary"
                  placeholder="Your business name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-dark-text mb-2">
                  Tell us about your goals
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all text-dark-text placeholder-dark-text-secondary"
                  placeholder="What are you looking to achieve with social media?"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-electric-blue hover:bg-electric-blue-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;