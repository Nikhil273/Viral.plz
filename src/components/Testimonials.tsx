import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Bloom Bakery",
      text: "Viral.plz transformed our Instagram from 500 to 15K followers in just 3 months. Our sales increased by 300%!",
      rating: 5
    },
    {
      name: "Mike Chen",
      business: "FitLife Gym",
      text: "Their reels are incredible! We went from unknown to the most popular gym in town. Bookings are through the roof.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      business: "Glow Beauty Studio",
      text: "Professional, fast, and results-driven. They understand what makes content go viral. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto">
            Real results from real local businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-dark-card p-8 rounded-2xl shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-1 border border-dark-border"
            >
              <div className="mb-6">
                <Quote className="h-10 w-10 text-electric-blue mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-dark-text-secondary mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-6">
                <div className="font-semibold text-dark-text text-lg border-dark-border">
                  {testimonial.name}
                </div>
                <div className="text-electric-blue font-medium">
                  {testimonial.business}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;