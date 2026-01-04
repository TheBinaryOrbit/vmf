import ContactFrom from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock } from "lucide-react"


export default function Contact() {
    return (
        <section id="contact" className="py-10">

            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 border border-[#910606]/40 text-[#910606] rounded-md text-sm font-semibold mb-4 bg-blue-50/30">
                    Contact Us
                </span>
                <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-balance text-foreground">Get In Touch</h2>
                <p className="mt-4 text-muted-foreground text-pretty max-w-4xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium mollitia laborum est asperiores, omnis ex officia nemo cumque repellat alias aperiam facere vitae voluptatem eaque consequuntur! Cumque omnis nemo eveniet.
                </p>
            </div>

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Contact Form Card */}
                    <div className="relative">
                        <div className="rounded-3xl pt-0 p-4 bg-white ring-slate-200">
                            <ContactFrom />
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col justify-start ">
                        <div className="mb-8">
                            <h2 className="text-base font-semibold leading-7 text-[#910606]">
                                Contact Information
                            </h2>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 space-y-3">
                            {/* Address */}
                            <div className="group flex items-start gap-6 ">
                                <div className="rounded-2xl bg-red-50 p-3 group-hover:bg-red-100 transition-colors">
                                    <MapPin className="h-6 w-6 text-[#910606]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Address</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Indian Institute of Technology,
                                        Patna, Bihar - 801106.
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="group flex items-start gap-6">
                                <div className="rounded-2xl bg-red-50 p-3 group-hover:bg-red-100 transition-colors">
                                    <Phone className="h-6 w-6 text-[#910606]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                                    <div className="space-y-1 text-slate-600">
                                        +91 88584 96391
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group flex items-start gap-6">
                                <div className="rounded-2xl bg-red-50 p-3 group-hover:bg-red-100 transition-colors">
                                    <Mail className="h-6 w-6 text-[#910606]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                                    <div className="space-y-1 text-slate-600">
                                        <p>support@mediisist.in</p>
                                    </div>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="group flex items-start gap-6">
                                <div className="rounded-2xl bg-red-50 p-3 group-hover:bg-red-100 transition-colors">
                                    <Clock className="h-6 w-6 text-[#910606]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Working Hours</h3>
                                    <div className="space-y-1 text-slate-600">
                                        <p>Monday - Sunday: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}