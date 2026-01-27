"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  HeartPlus,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Shield,
  Heart,
  Car
} from 'lucide-react';
import backgroundimage from '@/public/images/backgound.png';
import { services } from '@/script/data';

// Map icon names to actual components
const iconMap = {
  HeartPlus: <HeartPlus className="w-5 h-5 text-red-700" />,
  Activity: <Activity className="w-5 h-5 text-orange-700" />,
  Car: <Car className="w-5 h-5 text-blue-700" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-yellow-700" />,
  Heart: <Heart className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />
};

// Convert icon names to components
export const servicesData = services.servicesData.map(service => ({
  ...service,
  icon: iconMap[service.icon],
  tabIcon: iconMap[service.tabIcon]
}));

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 rounded-tl-0 md:rounded-tl-[15%] relative">
      <div className="absolute inset-0 z-0 bg-primary-dark">
        
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-white/80 text-white rounded-md text-sm font-semibold mb-4 bg-blue-50/30">
            {services.pageHeader.badge}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl text-white font-serif font-bold text-balance text-foreground">
            {services.pageHeader.heading}
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty max-w-4xl mx-auto text-white">
            {services.pageHeader.description}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-3 h-full">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`w-full h-25 flex items-center gap-4 p-5 rounded-xl transition-all duration-300 border text-lg font-semibold ${
                  activeTab.id === service.id
                    ? "bg-primary text-white border-primary text-xl shadow-lg shadow-primary/30 scale-[1.02]"
                    : "bg-primary-light text-slate-700 border-red-100 hover:border-primary/30"
                }`}
              >
                <span className={activeTab.id === service.id ? "text-white" : "text-primary"}>
                  {service.tabIcon}
                </span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 bg-primary-light rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* Image Section */}
                <div className="relative">
                  <div className={`absolute -inset-4 ${activeTab.bgColor} opacity-50 rounded-[2rem] -rotate-3`}></div>
                  <img
                    src={activeTab.image}
                    alt={activeTab.title}
                    className="relative z-10 rounded-2xl h-80 w-full object-cover shadow-lg"
                  />
                  <div className={`absolute -top-6 -right-6 w-16 h-16 ${activeTab.bgColor} rounded-full z-20 flex items-center justify-center shadow-md`}>
                    {activeTab.icon}
                  </div>
                </div>

                {/* Text Content Section */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {activeTab.fullTitle}
                  </h3>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {activeTab.longDesc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {activeTab.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-700 font-semibold">
                        <div className="bg-red-100 p-1 rounded-full">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/service/${encodeURIComponent(activeTab.intId)}`}
                    onClick={() => {
                      try {
                        sessionStorage.setItem('selectedService', JSON.stringify(activeTab.intId));
                      } catch (e) { }
                    }}
                    className="text-primary text-md duration-300 rounded font-semibold mb-10 hover:text-primary/80 transition-all cursor-pointer text-start"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
