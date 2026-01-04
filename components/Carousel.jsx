"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Carousel({ images = [], interval = 3000 }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;
        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(id);
    }, [images, interval]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    if (!images || images.length === 0) return null;

    return (
        <div className="flex-1 flex items-center justify-center h-full md:h-full mt-0 md:mt-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full  flex items-center justify-center relative">
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-3 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-1.5 shadow-lg transition-all"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <Image
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="object-cover w-full h-full transition-all duration-700 ease-in-out animate-fade"
                    style={{ aspectRatio: '16/7' }}
                />

                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-3 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-1.5 shadow-lg transition-all"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
