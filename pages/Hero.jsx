"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { home } from '@/script/data.js';



function HeroSection() {
    const images = home.images;
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="w-full bg-[#910606]">
            <section className='rounded-br-0 md:rounded-br-[15%] bg-white overflow-hidden'>
                <section className='flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-20 md:px-30 md:py-8 relative min-h-[500px] mt-0 md:mt-0 bg-white overflow-hidden shape-wavy-br-hero mb-20 '>
                    <div className="flex-1 flex items-center w-[50%] justify-center h-[400px] md:h-[500px] mt-0 md:mt-12">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full max-w-[800px] max-h-[500px] flex items-center justify-center relative">
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 md:left-3 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-1.5 shadow-lg transition-all"
                                aria-label="Previous slide"
                            >
                                <svg className="w-2 h-2 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <Image
                                src={require(`@/public/images/slider${current + 1}.jpeg`)}
                                alt={`Insurance Slide ${current + 1}`}
                                className="object-cover w-full h-full transition-all duration-700 ease-in-out animate-fade"
                                style={{ aspectRatio: '16/7' }}
                            />
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 md:right-3 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-1.5 shadow-lg transition-all"
                                aria-label="Next slide"
                            >
                                <svg className="w-2 h-2 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center w-[50%] justify-center mr-[-40] h-[400px] md:h-[500px]">
                        <div className="relative z-10 w-full max-w-[500px] text-left flex flex-col items-start justify-center h-full bg-transparent rounded-lg mt-8 md:mt-0">
                            {/* Main Headline */}
                            <h1 className="text-3xl md:text-4xl font-serif text-[#000000] mb-4 font-bold leading-tight">
                                {home.heading.part1} <br /> {home.heading.part2}
                            </h1>

                            {/* Sub-headline */}
                            <h2 className="text-xl font-semibold text-[#910606] mb-4">
                                {home.subheading}
                            </h2>

                            {/* Detailed Body Text */}
                            <p className="text-base md:text-lg text-[#1a1a19] mb-8 leading-relaxed">
                                {home.description}
                            </p>

                            {/* Call to Action Button */}
                            <button
                                onClick={() =>
                                    document.getElementById(home.button.link)?.scrollIntoView({ behavior: 'smooth' })
                                }
                                className="bg-[#910606] text-white px-7 py-3 rounded font-semibold mb-10 shadow hover:bg-[#910606df] transition-all cursor-pointer"
                            >
                                {home.button.text}
                            </button>

                            {/* Founder Signature Section */}
                            <div className="mt-4">
                                <span
                                    className="block text-3xl font-signature text-[#000000] mb-2"
                                    style={{ fontFamily: 'Dancing Script, cursive' }}
                                >
                                    {home.founder.name}
                                </span>
                                <span className="block text-xs tracking-widest text-[#000000]">
                                    {home.founder.title}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default HeroSection;