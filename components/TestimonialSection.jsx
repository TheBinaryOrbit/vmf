"use client"
import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const allTestimonials = [
  // Page 1
  [
    { id: 1, name: "Jane Doe", profession: "Software Engineer", image: "https://i.pravatar.cc/150?u=1", text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat." },
    { id: 2, name: "John Smith", profession: "Product Manager", image: "https://i.pravatar.cc/150?u=2", text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat." },
    { id: 3, name: "Sarah Jenkins", profession: "UX Designer", image: "https://i.pravatar.cc/150?u=3", text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat." },
  ],
  // Page 2
  [
    { id: 4, name: "Michael Chen", profession: "Data Scientist", image: "https://i.pravatar.cc/150?u=4", text: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam sea. Accusam kasd sed sea gubergren et stet amet lorem gubergren clita." },
    { id: 5, name: "Emily Blunt", profession: "Marketing Lead", image: "https://i.pravatar.cc/150?u=5", text: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam sea. Accusam kasd sed sea gubergren et stet amet lorem gubergren clita." },
    { id: 6, name: "David Wilson", profession: "CTO", image: "https://i.pravatar.cc/150?u=6", text: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam sea. Accusam kasd sed sea gubergren et stet amet lorem gubergren clita." },
  ],
  // Page 3
  [
    { id: 7, name: "Alice Cooper", profession: "DevOps", image: "https://i.pravatar.cc/150?u=7", text: "Sanctus sea sed eirmod amet. Takimata kasd sea et et gubergren sanctus duo. Tempor gubergren magna invidunt et sit accusam invidunt." },
    { id: 8, name: "Robert Fox", profession: "Designer", image: "https://i.pravatar.cc/150?u=8", text: "Sanctus sea sed eirmod amet. Takimata kasd sea et et gubergren sanctus duo. Tempor gubergren magna invidunt et sit accusam invidunt." },
    { id: 9, name: "Sonia Gupta", profession: "Founder", image: "https://i.pravatar.cc/150?u=9", text: "Sanctus sea sed eirmod amet. Takimata kasd sea et et gubergren sanctus duo. Tempor gubergren magna invidunt et sit accusam invidunt." },
  ],
  // Page 4
  [
    { id: 10, name: "Tom Hardy", profession: "Sales", image: "https://i.pravatar.cc/150?u=10", text: "Justo et et invidunt diam gubergren consetetur. Eirmod erat amet rebum ea duo consetetur sed. Sadipscing et amet lorem diam duo." },
    { id: 11, name: "Lucy Liu", profession: "Operations", image: "https://i.pravatar.cc/150?u=11", text: "Justo et et invidunt diam gubergren consetetur. Eirmod erat amet rebum ea duo consetetur sed. Sadipscing et amet lorem diam duo." },
    { id: 12, name: "Kevin Hart", profession: "HR", image: "https://i.pravatar.cc/150?u=12", text: "Justo et et invidunt diam gubergren consetetur. Eirmod erat amet rebum ea duo consetetur sed. Sadipscing et amet lorem diam duo." },
  ]
];

const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePageChange = (index) => {
    if (index === currentPage) return;
    
    // Simple fade transition logic
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-[#910606]/40 text-[#910606] rounded-md text-sm font-semibold mb-4 bg-blue-50/30">
            Testimonial
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-balance text-foreground">What Our Clients Say!</h2>
        </div>

        {/* Testimonials Grid with Animation */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {allTestimonials[currentPage].map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              
              {/* The Bubble */}
              <div className="relative bg-white border border-[#910606]/20 rounded-lg p-8 mb-10 shadow-sm hover:shadow-md transition-shadow">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-[#910606]/20">
                  <Quote className="w-8 h-8 text-[#910606] fill-[#910606]" />
                </div>
                
                <p className="text-gray-500 text-center leading-relaxed">
                  {item.text}
                </p>

                {/* Bubble Tip */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-r border-b border-[#910606]/20 rotate-45"></div>
              </div>

              {/* User Profile */}
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl ring-1 ring-gray-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#001d3d] mb-1">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.profession}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mt-16">
          {allTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className="group relative flex items-center justify-center w-6 h-6"
              aria-label={`Go to page ${index + 1}`}
            >
              {/* Outer Ring (Visible when active) */}
              <span className={`absolute inset-0 rounded-full border-2 border-[#910606] transition-transform duration-300 ${currentPage === index ? 'scale-100' : 'scale-0'}`}></span>
              
              {/* Inner Dot */}
              <span className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index 
                ? "bg-[#910606]" 
                : "bg-[#910606]/40 group-hover:bg-[#910606]/30"
              }`}></span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;