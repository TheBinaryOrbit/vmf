import ContactFrom from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"
import { contact } from '@/script/data'

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            {/* Header Section */}
            <div className="text-center mb-16 px-4">
                <span className="inline-block px-4 py-1 border border-[#910606]/40 text-[#910606] rounded-md text-sm font-semibold mb-4 bg-red-50/50">
                    {contact.heading.badge}
                </span>
                <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        {contact.heading.main} <span className="text-[#910606]">{contact.heading.highlight}</span>
                </h2>
                <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                    {contact.description}
                </p>
            </div>

            

            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* Left Side: Contact Form & Services List */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{contact.services.title}</h3>
                            <ul className="space-y-4">
                                {contact.services.list.map((item, index) => (
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
                                {contact.contactInfo.sectionTitle}
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
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{contact.contactInfo.phone.label}</h3>
                                    <a href={contact.contactInfo.phone.href} className="text-xl font-medium text-gray-600 hover:text-[#910606] transition-colors">
                                        {contact.contactInfo.phone.number}
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group flex items-start gap-6">
                                <div className="rounded-2xl bg-red-50 p-4 group-hover:bg-[#910606] transition-all duration-300">
                                    <Mail className="h-6 w-6 text-[#910606] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{contact.contactInfo.email.label}</h3>
                                    <a href={contact.contactInfo.email.href} className="text-gray-600 hover:text-[#910606] transition-colors">
                                        {contact.contactInfo.email.address}
                                    </a>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="group flex items-start gap-6">
                                <div className="rounded-2xl bg-red-50 p-4 group-hover:bg-[#910606] transition-all duration-300">
                                    <Clock className="h-6 w-6 text-[#910606] group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{contact.contactInfo.hours.label}</h3>
                                    <div className="text-gray-600 space-y-1">
                                        <p className="font-medium">{contact.contactInfo.hours.days}</p>
                                        <p>{contact.contactInfo.hours.time}</p>
                                        <p className="text-sm italic text-gray-500 mt-2">{contact.contactInfo.hours.note}</p>
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