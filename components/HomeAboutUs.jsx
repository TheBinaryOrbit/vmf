"use client"
import Image from 'next/image';
import { homeAbout } from '@/script/data.js';
const slider1 = require('@/public/images/slider1.jpeg');
                
function HomeAboutUs() {
  return (
    <section className="bg-white">
      <section id="about-us" className="relative py-20 px-4 md:px-0 bg-[#910606] flex justify-center items-center md:rounded-br-[15%] rounded-tl-0 rounded-br-0">
        <div className="max-w-7xl w-full mx-auto bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 p-10 flex flex-col justify-center">
            {/* Header Section */}
            <h3 className="uppercase text-[#23293a] font-bold tracking-widest text-lg mb-2">{homeAbout.toptitle}</h3>
            <p className="text-[#910606] font-semibold text-sm tracking-wide mb-4 uppercase">
              {homeAbout.subtitle}
            </p>
            <div className="w-12 h-1 bg-[#910606] mb-6" />

            {/* Content Section */}
            <div className="text-[#000000] text-lg leading-relaxed mb-6 space-y-4">
              <p>
                {homeAbout.description1}
              </p>
              <p>
                {homeAbout.description2}
              </p>
              <blockquote className="italic border-l-4 border-[#910606] pl-4 text-gray-700 py-2">
                {homeAbout.quote}
              </blockquote>
            </div>

            {/* Signature Section */}
            <div className="mt-6 mb-2">
              <span className="block text-3xl font-signature text-[#000000] mb-1" style={{ fontFamily: 'Dancing Script, cursive' }}>
                {homeAbout.foundername}
              </span>
              <span className="block text-xs tracking-widest text-[#000000] uppercase">
                {homeAbout.foundertitle}
              </span>
            </div>

            <button className="text-[#910606] text-xl hover:translate-x-2 duration-300 rounded font-semibold transition-all cursor-pointer text-start mt-4" 
              onClick={() =>
                document.getElementById(homeAbout.button.link)?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {homeAbout.button.text}
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center">
            <Image src={slider1}  alt="Rekha Gupta - V M Financial Services" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </section>
  );
}
export default HomeAboutUs;