"use client";
import { useEffect, useState } from 'react';
import slider1 from '@/public/images/slider1.jpeg';
import slider2 from '@/public/images/slider2.jpeg';
import slider3 from '@/public/images/slider3.jpeg';
import Image from 'next/image';

function HeroSection() {
    const images = [slider1, slider2, slider3];
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

    const bgImage = '';

    return (
        <section
            className="w-full bg-[#910606]"
        
        >
        <section className='rounded-br-0 md:rounded-br-[15%] bg-white overflow-hidden'>
            <section className='flex flex-col md:flex-row items-center justify-around gap-0 px-6 py-20 md:px-10 md:py-8 relative min-h-[500px] mt-0 md:mt-0 bg-white  overflow-hidden shape-wavy-br-hero mb-20 '>
                <div className="flex-1 flex items-center justify-center h-[400px] md:h-[500px] mt-0 md:mt-12">
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
                            src={images[current]}
                            alt={`Hero Slide ${current + 1}`}
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
                <div className="flex-1 flex items-center justify-center h-[400px] md:h-[500px] ">
                    <div className="relative z-10 w-full max-w-[500px] text-left flex flex-col items-start justify-center h-full bg-transparent rounded-lg  mt-8 md:mt-0">
                        <h1 className="text-5xl md:text-5xl font-serif text-[#000000] mb-6 font-bold">V M Financial services</h1>
                        <p className="text-lg md:text-lg text-[#1a1a19] mb-6">
                            Backed by 13+ years of experience, our law firm offers smart, practical, and effective legal services for clients across different sectors.
                        </p>
                        <button
                            onClick={() =>
                                document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className="bg-[#910606] text-white px-7 py-3 rounded font-semibold mb-10 shadow hover:bg-[#910606df] transition-all cursor-pointer"
                        >
                            CONTACT NOW &rarr;
                        </button>
                        <div className="mt-8">
                            <span
                                className="block text-3xl font-signature text-[#000000] mb-2"
                                style={{ fontFamily: 'Dancing Script, cursive' }}
                            >
                                REKHA GUPTA
                            </span>
                            <span className="block text-xs tracking-widest text-[#000000]">
                                FOUNDER, V M Financial services
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