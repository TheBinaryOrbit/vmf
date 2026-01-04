"use client";
import slider1 from '@/public/images/slider1.jpeg';
import slider2 from '@/public/images/slider2.jpeg';
import slider3 from '@/public/images/slider3.jpeg';
import Carousel from '../../components/Carousel';

function HeroSection() {
    const images = [slider1, slider2, slider3];

    return (
        <section
            className="w-full"
        
        >
            <section className='flex flex-col md:flex-row items-center justify-around gap-0 px-6 py-8 md:px-10 md:py-8 relative min-h-[500px] mt-0 md:mt-0 bg-white  overflow-hidden shape-wavy-br-hero'>
                <Carousel images={images} />
                <div className="flex-1 flex items-center justify-center h-[400px] md:h-[500px] ">
                    <div className="relative z-10 w-full max-w-[500px] text-left flex flex-col items-start justify-center h-full bg-transparent rounded-lg  mt-8 md:mt-0">
                        <h1 className="text-5xl md:text-5xl font-serif text-[#000000] mb-6 font-bold">Gupta Law Offices</h1>
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
                                Naman Gupta
                            </span>
                            <span className="block text-xs tracking-widest text-[#000000]">
                                FOUNDER, GUPTA LAW OFFICES
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default HeroSection;