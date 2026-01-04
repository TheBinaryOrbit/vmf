import slider2 from '@/public/images/slider1.jpeg';
import Image from 'next/image';
function HomeAboutUs() {
  return (
    <section className="bg-white">
      <section id="about-us" className="relative py-20 px-4 md:px-0 bg-[#910606] flex justify-center items-center md:rounded-tl-[15%] md:rounded-br-[15%] rounded-tl-0 rounded-br-0">
        <div className="max-w-7xl w-full mx-auto bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <h3 className="uppercase text-[#23293a] font-bold tracking-widest text-lg mb-2">Founder Profile</h3>
            <div className="w-12 h-1 bg-[#910606] mb-6" />
            <p className="text-[#000000] text-lg leading-relaxed mb-8">
              Our law firm is dedicated to providing reliable and effective legal services backed by over 13 years of professional experience. With a team of skilled associates and a strong foundation of practical knowledge, we offer comprehensive legal solutions tailored to the needs of individuals, businesses, and organizations. We focus on professionalism, transparency, and delivering results that protect our clients’ best interests.
            </p>
            <div className="mt-8 mb-2">
              <span className="block text-3xl font-signature text-[#000000] mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>Naman Gupta</span>
              <span className="block text-xs tracking-widest text-[#000000]"> Founder of Gupta Law ffice</span>
            </div>
            <button
              className="text-[#910606] text-xl hover:text-2xl duration-300 rounded font-semibold mb-10  hover:text-[#910606df]  transition-all cursor-pointer  text-start" 
            >
              Learn More &rarr;
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src={slider2} alt="About Gupta Law Firm" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </section>
  );
}
export default HomeAboutUs;