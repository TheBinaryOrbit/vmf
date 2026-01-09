
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import backgroundimage from '@/public/images/backgound.png';
import HeroBanner from '../../components/HeroBanner';
import { about } from '@/script/data';

export default function About() {
    return (
        <div className="min-h-screen bg-white">

            <HeroBanner
                pretitle={about.hero.pretitle}
                title={<>{about.hero.title.main} <span className="">{about.hero.title.highlight}</span></>}
                description={about.hero.description}
                backgroundImage={backgroundimage}
            />



            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#910606] pl-4">
                        {about.whoWeAre.heading}
                    </h2>
                    {about.whoWeAre.paragraphs.map((para, index) => {
                        const renderText = () => {
                            if (para.isBold) {
                                return <strong>{para.text}</strong>;
                            }
                            if (para.highlightText) {
                                const parts = para.text.split(para.highlightText);
                                return (
                                    <>
                                        {parts[0]}<b>{para.highlightText}</b>{parts[1]}
                                    </>
                                );
                            }
                            return para.text;
                        };
                        
                        return (
                            <p key={index} className="text-gray-700 leading-relaxed mb-5 text-justify">
                                {renderText()}
                            </p>
                        );
                    })}
                </div>

                <div className="relative">
                    <img
                        src={backgroundimage.src}
                        alt={about.whoWeAre.image.alt}
                        className="rounded-2xl shadow-2xl border border-[#e5d3b3] "
                    />
                    <div className="absolute -bottom-6 -left-6 bg-[#910606] text-white px-6 py-3 rounded-lg shadow-lg">
                        <p className="text-sm font-medium tracking-wide">
                            {about.whoWeAre.image.badge}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white py-20 border-t border-[#ede0c6]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-b-2 border-[#910606] inline-block pb-2">
                            {about.vision.heading}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            {about.vision.text}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-b-2 border-[#910606] inline-block pb-2">
                            {about.mission.heading}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            {about.mission.text}
                        </p>
                    </div>
                </div>
            </div>
            {/* Map Section - Integrated design like about page */}
            {/* <section className="sm:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    
                    <div className="relative">
                        <div className="aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
                            <iframe
                                title="College Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.065843421685!2d84.85177467554935!3d25.536183577494274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f694d904f%3A0xec61bf6ba64170a9!2sIncubation%20Centre%20%5BIIT-Patna%5D!5e0!3m2!1sen!2sin!4v1752887228336!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* FAQ Section - Modern card grid */}
            <section className="bg-slate-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-base font-semibold leading-7 text-[#910606]">
                            {about.faq.badge}
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            {about.faq.heading}
                        </p>
                        <p className="mt-4 text-lg text-slate-600">
                            {about.faq.description}
                        </p>
                    </div>

                    <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2">
                        {about.faq.questions.map((item, index) => (
                            <div key={index} className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">{item.question}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
