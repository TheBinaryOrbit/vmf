"use client"
import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '@/script/data';

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
            {testimonials.badge}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-balance text-foreground">{testimonials.heading}</h2>
        </div>

        {/* Testimonials Grid with Animation */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {testimonials.pages[currentPage].map((item) => (
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
          {testimonials.pages.map((_, index) => (
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