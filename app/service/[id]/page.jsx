"use client";
import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react'; // Suggested: npm install lucide-react

function ServiceDetails() {
  const [service, setService] = useState(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('selectedService');
      if (stored) {
        setService(JSON.parse(stored));
      }
    } catch (e) {
      setService(null);
    }
  }, []);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-500">
        <p className="text-xl font-medium">No service selected.</p>
        <button 
          onClick={() => window.history.back()}
          className="mt-4 text-[#910606] hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Go back to services
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Top Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-[#910606] transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Services</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Image/Visuals */}
          <div className="relative">
            {service.image ? (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full object-cover h-[500px] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            ) : (
              <div className="w-full h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                No Image Available
              </div>
            )}
            {/* Floating Accent Card */}
            <div className="absolute -bottom-6 -right-6 bg-[#910606] text-white p-6 rounded-xl hidden md:block shadow-xl">
              <p className="text-sm uppercase tracking-widest opacity-80">Category</p>
              <p className="text-xl font-bold">{service.title || "Premium Service"}</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <header>
              <div className="inline-block px-3 py-1 rounded-full bg-[#910606]/10 text-[#910606] text-sm font-bold mb-4 uppercase tracking-wider">
                Service Detail
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#23293a] leading-tight">
                {service.title || service.name}
              </h1>
              <div className="h-1.5 w-20 bg-[#910606] mt-4 rounded-full"></div>
            </header>

            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="leading-relaxed">
                {service.longDesc || service.description || "Detailed information for this service is coming soon."}
              </p>
            </div>

            {/* Features Section */}
            {service.features && service.features.length > 0 && (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#23293a] mb-6 flex items-center gap-2">
                  Key Features & Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="mt-1 bg-[#910606]/10 p-1 rounded-full group-hover:bg-[#910606] transition-colors">
                        <CheckCircle2 size={16} className="text-[#910606] group-hover:text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;