
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import backgroundimage from '@/public/images/backgound.png';
import HeroBanner from '../../components/HeroBanner';

export default function About() {
    return (
        <div className="min-h-screen bg-white">

            <HeroBanner
                pretitle="Get in Touch"
                title={<>About <span className="">Us</span></>}
                description="Have questions? Reach out to us and our team will get back to you shortly."
                backgroundImage={backgroundimage}
            />



            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#910606] pl-4">
                        Who We Are
                    </h2>
                    <p className="text-gray-700 mb-5 leading-relaxed text-justify">
                        <strong>At V M Financial Services </strong>, we believe that financial security is not just about policies and plans — it’s about protecting lives, dreams, and peace of mind.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-5 text-justify">
                        <b> Founded in 2016 </b>, our journey began with a simple yet powerful purpose: to help families feel confident about their future. Over the years, we have worked closely with individuals, families, and professionals who wanted clarity, honesty, and guidance in an otherwise complex financial world.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-5 text-justify">
                        Many people delay insurance decisions due to lack of awareness, fear of commitment, or confusion caused by too many options. We exist to change that. Our approach is rooted in <b>education first</b> — we help you understand before you decide. Every recommendation is carefully crafted after understanding your goals, budget, family responsibilities, and long-term aspirations.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-5 text-justify">
                        What sets us apart is our commitment to <b>customized solutions</b>. We do not believe in one-size-fits-all planning. Whether it’s life insurance, health coverage, or general insurance, our focus is always on <b>minimum investment with maximum protection</b>, ensuring your loved ones remain financially secure even in unforeseen situations.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        At V M Financial Services, relationships matter more than transactions. We aim to be your <b>long-term financial partner</b>, supporting you through every life stage — from starting your career and building a family to planning retirement with confidence. Transparency, trust, and reliability form the foundation of everything we do.
                    </p>
                    
                </div>

                <div className="relative">
                    <img
                        src={backgroundimage.src}
                        alt="Law office interior"
                        className="rounded-2xl shadow-2xl border border-[#e5d3b3] "
                    />
                    <div className="absolute -bottom-6 -left-6 bg-[#910606] text-white px-6 py-3 rounded-lg shadow-lg">
                        <p className="text-sm font-medium tracking-wide">
                            15+ Years of Legal Excellence
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white py-20 border-t border-[#ede0c6]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-b-2 border-[#910606] inline-block pb-2">
                            Our Vision
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            To create awareness about the importance of insurance and financial protection, and help more families secure their future through smart, customized planning.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-b-2 border-[#910606] inline-block pb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            To become a trusted lifelong financial partner for families, ensuring minimum investment with maximum protection, peace of mind, and long-term security.
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
                            Have Questions?
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Frequently Asked Questions
                        </p>
                        <p className="mt-4 text-lg text-slate-600">
                            Find answers to common questions about admissions, programs, and campus life.
                        </p>
                    </div>

                    <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">What are the admission requirements?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Admission requirements vary by program. Generally, for B.Sc. Nursing, candidates must have completed
                                10+2 with Physics, Chemistry, and Biology with a minimum of 50% marks. For detailed requirements, please
                                visit our Admissions page.
                            </p>
                        </div>

                        <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">When do admissions open?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Admissions typically open in June each year. The application deadline is usually in mid-July, with
                                entrance examinations conducted in late July. We recommend applying early as seats are limited.
                            </p>
                        </div>

                        <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Are scholarships available?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yes, we offer merit-based and need-based scholarships. Additionally, students can apply for various
                                government scholarship schemes. For more information, please visit our Fee Structure page.
                            </p>
                        </div>

                        <div className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-xl font-semibold text-slate-900 mb-4">Is hostel accommodation available?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yes, we provide separate hostel facilities for male and female students. Hostel accommodation is
                                optional and allocated on a first-come, first-served basis. The hostel fee is separate from the tuition
                                fee.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}