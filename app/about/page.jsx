
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
                    <p className="text-gray-700 mb-5 leading-relaxed">
                        <strong>V M Financial services (GLO)</strong> is a distinguished law firm delivering strategic legal services backed by experience and integrity. We represent clients across diverse legal domains, offering tailored solutions that address both legal and practical concerns.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Led by <strong>Mr. REKHA GUPTA</strong>, and supported by associates with more than 13 years of collective experience, the firm is known for its disciplined approach, strategic thinking, and consistent results. At GLO, we believe in delivering clear legal advice, timely solutions, and representation that clients can trust.
                    </p>
                </div>

                <div className="relative">
                    <img
                        src={backgroundimage.src}
                        alt="Law office interior"
                        className="rounded-2xl shadow-2xl border border-[#e5d3b3]"
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
                            To establish V M Financial services (GLO) as a distinguished and trusted legal institution known for its unwavering commitment to justice, ethical advocacy, and professional excellence. Our vision is to be recognized for delivering well-reasoned legal solutions that combine deep legal knowledge with practical insight, while maintaining the highest standards of integrity and accountability.

                            <br />We aspire to create a lasting impact in the legal profession by building long-term relationships with our clients, institutions, and communities, grounded in trust, transparency, and consistent results. Through continuous learning, disciplined practice, and a client-first philosophy, we aim to contribute meaningfully to the development of a fair, accessible, and effective legal system.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 border-b-2 border-[#910606] inline-block pb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Our mission is to provide comprehensive, precise, and result-oriented legal services tailored to the unique needs of each client. We are committed to representing individuals, businesses, and institutions with diligence, discretion, and strategic clarity across all stages of legal proceedings.

                            <br />At V M Financial services, we focus on understanding the practical realities behind every legal issue, enabling us to deliver solutions that are not only legally sound but also commercially and socially effective. We uphold the highest standards of professionalism, ethical conduct, and confidentiality while ensuring clear communication, timely action, and strong advocacy. Our goal is to protect our clients’ rights, safeguard their interests, and achieve sustainable legal outcomes through responsible and principled practice.
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