import ContactFrom from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            {/* Header Section */}
            <div className="text-center mb-16 px-4">
                <span className="inline-block px-4 py-1 border border-[#910606]/40 text-[#910606] rounded-md text-sm font-semibold mb-4 bg-red-50/50">
                    Contact Us
                </span>
                <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Let’s Plan Wisely Today for a <span className="text-[#910606]">Secure Tomorrow</span>
                </h2>
                <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                    Whether you’re exploring insurance for the first time or reviewing your existing plans,
                    we’re here to guide you with clarity and care. Reach out to us for personalized advice
                    and trusted financial solutions.
                </p>
            </div>

            

            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* Left Side: Contact Form & Services List */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Can We Help You?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Choosing the right life insurance plan",
                                    "Understanding health insurance coverage",
                                    "Securing your family’s financial future",
                                    "Reviewing existing policies",
                                    "Minimum investment & maximum protection"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="h-5 w-5 text-[#910606] flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>

                    {/* Right Side: Contact Information */}
                    <div className="flex flex-col justify-start lg:pt-4">
                        <div className="mb-5">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-[#910606] mb-2">
                                Contact Details
                            </h2>
                            <div className="h-1 w-12 bg-[#910606]"></div>
                        </div>

                        <div className="space-y-6">
                            {/* Phone / WhatsApp */}
                            <div className="group flex items-start gap-6">
                                <div className="rounded-2xl bg-red-50 p-4 group-hover:bg-[#910606] transition-all duration-300">
                                    <Phone className="h-6 w-6 text-[#910606] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Call / WhatsApp</h3>
                                    <a href="tel:+919910082424" className="text-xl font-medium text-gray-600 hover:text-[#910606] transition-colors">
                                        +91 99100 82424
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group flex items-start gap-6">
                                <div className="rounded-2xl bg-red-50 p-4 group-hover:bg-[#910606] transition-all duration-300">
                                    <Mail className="h-6 w-6 text-[#910606] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                                    <a href="mailto:rekhajune5@gmail.com" className="text-gray-600 hover:text-[#910606] transition-colors">
                                        rekhajune5@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="group flex items-start gap-6">
                                <div className="rounded-2xl bg-red-50 p-4 group-hover:bg-[#910606] transition-all duration-300">
                                    <Clock className="h-6 w-6 text-[#910606] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Office Hours</h3>
                                    <div className="text-gray-600 space-y-1">
                                        <p className="font-medium">Monday to Saturday</p>
                                        <p>10:00 AM – 6:00 PM</p>
                                        <p className="text-sm italic text-gray-500 mt-2">(Consultations available by prior appointment)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="rounded-[calc(1.5rem-1px)] p-5 sm:p-2 bg-white">
                <ContactFrom />
            </div>
        </section>
    )
}