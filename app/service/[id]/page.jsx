"use client";
import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2,
  HeartPlus,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Shield,
  Heart, Car,
 } from 'lucide-react';
import { services } from '@/script/data';
import { useParams } from 'next/navigation.js';
import FloatingButton from '@/components/FoatingButton';

// Map icon names to actual components
const iconMap = {
  HeartPlus: <HeartPlus className="w-12 h-12 text-red-700" />,
  Activity: <Activity className="w-12 h-12 text-orange-700" />,
  Car: <Car className="w-12 h-12 text-blue-700" />,
  ShieldAlert: <ShieldAlert className="w-12 h-12 text-yellow-700" />
};

// Convert icon names to components
const servicesData = services.servicesData.map(service => ({
  ...service,
  icon: iconMap[service.icon],
  tabIcon: iconMap[service.tabIcon]
}));

function ServiceDetails() {
  const params = useParams();

  const [service, setService] = useState(servicesData.find(s => s.intId === params.id));


  useEffect(()=>{
    const selectedService = servicesData.find(s => s.intId === parseInt(params.id));
    setService(selectedService);
  },[params.id]);


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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button onClick={() => window.history.back()} className="flex items-center gap-2 text-gray-600 hover:text-[#910606] mb-8 group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to Services</span>
      </button>

      <div className=" gap-12 items-start">
        {/* Visuals Section */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img src={service.image} alt={service.title} className="w-full object-cover h-[500px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#910606] text-white p-6 rounded-xl shadow-xl">
            <p className="text-sm uppercase tracking-widest opacity-80">Protection Plan</p>
            <p className="text-xl font-bold">{service.title}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8 mt-20">
          <header>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#23293a] leading-tight mb-4">
              {service.pageHeader || service.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-[#910606] pl-4">
              {service.detailedDesc}
            </p>
          </header>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-[#23293a] mb-4 uppercase tracking-tight text-sm">Why it Matters</h3>
            <p className="text-gray-600 leading-relaxed">{service.whyItMatters}</p>
          </section>

          {/* New Dynamic Approach Section */}
          <section>
            <h3 className="text-xl font-bold text-[#23293a] mb-4">{service.sectionTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.sectionItems?.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#910606]" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits List */}
          <div className="bg-[#910606] p-8 rounded-2xl text-white shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              Our Promise & Benefits
            </h3>
            <div className="space-y-4">
              {service.benefits?.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-white shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default ServiceDetails;