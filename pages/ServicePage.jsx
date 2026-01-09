"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, Wallet, Headset, Landmark,
  Check, ArrowRight, Factory, Home, Heart, Car,
  HeartPlus,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Shield
} from 'lucide-react';
import backgroundimage from '@/public/images/backgound.png';


export const servicesData = [
  {
    intId : 1, 
    id: 'life-insurance-planning',
    title: "Life Insurance",
    shortDesc: "Protect the people who matter most.",
    icon: <HeartPlus className="w-5 h-5 text-red-700" />, 
    tabIcon: <Heart className="w-5 h-5" />,
    image: "https://img.freepik.com/free-photo/close-up-doctor-holding-wooden-cube_23-2149191359.jpg?semt=ais_hybrid&w=740&q=80",
    fullTitle: "Life Insurance Planning",
    longDesc: "Secure your family’s future with smart life insurance solutions designed around your goals, income, and responsibilities — not generic plans.",
    features: ["Income Protection", "Family Stability", "Future Goals"],
    bgColor: "bg-[#e2f1b1]",
    // Detail Page Content
    pageHeader: "Secure Your Family’s Future with Confidence",
    detailedDesc: "Life insurance is not just a policy — it is a promise to protect your loved ones even when you are not around. At V M Financial Services, we help you choose life insurance solutions that ensure long-term financial stability for your family.",
    whyItMatters: "Life is unpredictable. A well-planned life insurance policy ensures that your family’s lifestyle, education plans, and financial responsibilities continue uninterrupted in any situation.",
    sectionTitle: "Our Approach",
    sectionItems: ["Income & expenses", "Family size & responsibilities", "Short-term and long-term goals", "Future dreams and commitments"],
    whoIsItFor: ["Young professionals", "Newly married couples", "Parents planning for children", "Self-employed individuals"],
    benefits: ["Tailor-made coverage", "Transparent guidance", "Long-term financial security", "Peace of mind for your loved ones"]
  },
  {
    intId : 2, 
    id: 'health-insurance-solutions',
    title: "Health Insurance",
    shortDesc: "Because health emergencies shouldn’t affect your savings.",
    icon: <Activity className="w-5 h-5 text-orange-700" />,
    tabIcon: <ShieldCheck className="w-5 h-5" />,
    image: "https://media.istockphoto.com/id/2129928358/photo/health-insurance-concept-hand-holding-wooden-cube-with-healthcare-medical-icon-family-life.jpg?s=612x612&w=0&k=20&c=CmQ5RgwVZzZQbHI_eyAcSdq6M-I_0sixo1fs0oRHNR4=",
    fullTitle: "Health Insurance Solutions",
    longDesc: "Comprehensive health coverage that protects you from rising medical costs while keeping your finances stable.",
    features: ["Rising Cost Protection", "Savings Safeguard", "Quality Healthcare"],
    bgColor: "bg-[#f9d7c1]",
    pageHeader: "Protect Your Health Without Financial Stress",
    detailedDesc: "Medical emergencies can arise anytime — but financial stress shouldn’t follow. Our health insurance solutions are designed to protect both your health and your savings.",
    whyItMatters: "With rising healthcare costs, even a short hospital stay can disrupt your financial planning. A good health insurance policy ensures access to quality healthcare without draining your hard-earned money.",
    sectionTitle: "Our Planning Method",
    sectionItems: ["Your age & health history", "Family medical needs", "Budget considerations", "Coverage expectations"],
    whoIsItFor: ["Individuals & families", "Parents with young children", "Working professionals", "People seeking health security"],
    benefits: ["Coverage clarity", "No unnecessary add-ons", "Budget-friendly plans", "Reliable support during claims"]
  },
  {
    intId : 3,
    id: 'car-insurance',
    title: "Car Insurance",
    shortDesc: "Protect your car. Drive with confidence.",
    icon: <Car className="w-5 h-5 text-blue-700" />,
    tabIcon: <Car className="w-5 h-5" />,
    image: "https://media.istockphoto.com/id/1173046833/photo/sale-agent-deal-to-agreement-successful-car-loan-contract-with-customer-and-sign-agreement.jpg?s=612x612&w=0&k=20&c=0ZTfEfidz5PFLqXWu0lsAraXYbVLD4tWeoNaXM6cb2U=",
    fullTitle: "Car Insurance",
    longDesc: "Safeguard your vehicle against accidents, theft, and unexpected damages with car insurance plans that offer reliable coverage and stress-free ownership.",
    features: ["Accident Coverage", "Theft Protection", "Third-party Liability"],
    bgColor: "bg-[#d1f3f1]",
    pageHeader: "Comprehensive Protection for Your Vehicle",
    detailedDesc: "Your car is more than just a vehicle — it’s part of your daily life. Car insurance ensures you are financially protected so you can drive with complete peace of mind.",
    whyItMatters: "Unexpected road incidents can lead to costly repairs and legal liabilities. A well-chosen policy ensures compliance and protects you from financial loss.",
    sectionTitle: "Our Approach to Car Insurance",
    sectionItems: ["Vehicle type and usage", "Coverage requirements", "Budget preferences", "Claim support expectations"],
    whoIsItFor: ["New car owners", "Renewal/Upgrade seekers", "Individuals seeking affordable premiums", "Car owners valuing claim support"],
    benefits: ["Third-party coverage options", "Transparent premium explanation", "Assistance during renewals", "Long-term advisory support"]
  },
  {
    intId : 4,
    id: 'general-insurance',
    title: "General Insurance",
    shortDesc: "Stay prepared for life’s uncertainties.",
    icon: <ShieldAlert className="w-5 h-5 text-yellow-700" />,
    tabIcon: <Shield className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    fullTitle: "General Insurance",
    longDesc: "Safeguard your assets and everyday risks with reliable general insurance solutions that bring peace of mind.",
    features: ["Asset Protection", "Risk Management", "Unforeseen Losses"],
    bgColor: "bg-[#fff3b0]",
    pageHeader: "Protection Beyond Health & Life",
    detailedDesc: "General insurance helps protect your assets and daily life from unforeseen risks. We ensure that what you’ve worked hard for stays safe and secure.",
    whyItMatters: "From unexpected losses to everyday uncertainties, general insurance provides financial protection when life takes an unexpected turn.",
    sectionTitle: "Our Solution-Driven Approach",
    sectionItems: ["Identify what needs protection", "Risk exposure areas", "Cost-effective coverage options", "Lifestyle and needs matching"],
    whoIsItFor: ["Individuals & families", "Business owners", "Professionals seeking complete protection"],
    benefits: ["Simple explanations", "Honest recommendations", "One-stop insurance guidance", "Long-term support"]
  }
];


export default function ServicePage() {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  return (
    <div className="min-h-screen  py-20 px-4 md:px-8 rounded-tl-0 md:rounded-tl-[15%] relative">

      <div className="absolute inset-0 z-0">
        {backgroundimage ? (
          <img
            src={backgroundimage.src}
            alt={'Background'}
            className="h-full w-full object-cover object-center"
          />
        ) : null}
        <div className="absolute inset-0"></div>
      </div>


      <div className="relative max-w-7xl mx-auto">

        {/* Header (Inspired by Image 1) */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-white/80 text-white rounded-md text-sm font-semibold mb-4 bg-blue-50/30">
            Our Services
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl text-white font-serif font-bold text-balance text-foreground">Our Services</h2>
          <p className="mt-4 text-muted-foreground text-pretty max-w-4xl mx-auto text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium mollitia laborum est asperiores, omnis ex officia nemo cumque repellat alias aperiam facere vitae voluptatem eaque consequuntur! Cumque omnis nemo eveniet.
          </p>
        </div>

        {/* Layout Grid (Inspired by Image 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-3 h-full">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`w-full h-25 flex items-center gap-4 p-5 rounded-xl transition-all duration-300 border text-lg font-semibold ${activeTab.id === service.id
                  ? "bg-[#910606] text-white border-[#910606] text-xl shadow-lg shadow-[#910606]/30 scale-[1.02]"
                  : "bg-white text-slate-700 border-red-100 hover:border-[#910606]/30"
                  }`}
              >
                <span className={activeTab.id === service.id ? "text-white" : "text-[#910606]"}>
                  {service.tabIcon}
                </span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-50">
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
                  {/* Floating Icon from Image 1 style */}
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
                          <Check className="w-4 h-4 text-[#910606]" />
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
                    className="text-[#910606] text-md duration-300 rounded font-semibold mb-10 hover:text-[#910606df] transition-all cursor-pointer text-start"
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
  )
}   