import Link from "next/link";

export default function WhyChooseUs() {
    return (
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-white rounded-tl-0 md:rounded-tl-[15%]">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                
                {/* TOP BANNER SECTION */}
                <div className="mb-16 text-center lg:text-left max-w-3xl ">
                    <span className="inline-block px-4 py-1 border border-[#910606]/40 text-[#910606] rounded-md text-sm font-semibold bg-red-50 mb-4">
                        Why Choose Us
                    </span>
                    <h2 className=" text-gray-900 text-3xl md:text-4xl font-bold font-manrope mb-4 leading-tight">
                        Because protecting your family’s future deserves <span className="text-[#910606]">more than generic advice.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At <span className="font-semibold text-gray-900">V M Financial Services</span>, we combine experience, transparency, and personalized planning to help you make confident financial decisions that truly matter.
                    </p>
                </div>

                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h3 className="text-[#910606] text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        The Story Behind Our Trust
                                    </h3>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Our journey is built on one simple belief — financial security should be accessible, understandable, and reliable for every family. 
                                        Since 2016, we have guided individuals and families through some of the most important financial decisions of their lives.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        From first-time policy buyers to long-term planners, our focus has always been on education, clarity, and long-lasting relationships — not quick sales.
                                    </p>
                                </div>
                            </div>

                            {/* STATS / HIGHLIGHTS CARDS */}
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full h-full p-4 rounded-xl border border-gray-200 hover:border-[#910606]/30 transition-all duration-700 flex-col justify-start items-start gap-2 flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope">9+ Years</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            <strong>Of Trusted Experience:</strong> Helping families plan, protect, and grow with confidence.
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-4 rounded-xl border border-gray-200 hover:border-[#910606]/30 transition-all duration-700 flex-col justify-start items-start gap-2 flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope">3× MDRT</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            <strong>Recognized Excellence:</strong> Consistently acknowledged for professional performance.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full p-4 rounded-xl border border-gray-200 hover:border-[#910606]/30 transition-all duration-700 flex-col justify-start items-start gap-2 flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope">500+ Families</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            <strong>Protected & Secured:</strong> Solutions designed for real-life needs.
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-4 rounded-xl border border-gray-200 hover:border-[#910606]/30 transition-all duration-700 flex-col justify-start items-start gap-2 flex">
                                        <h4 className="text-gray-900 text-2xl font-bold font-manrope">100%</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            <strong>Client-Centric:</strong> We educate first, recommend second — always with honesty.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/about"
                            className="sm:w-fit w-full group px-5 py-2.5 bg-red-50 hover:bg-[#910606] rounded-lg transition-all duration-700 justify-center items-center flex">
                            <span className="px-1.5 text-[#910606] group-hover:text-white text-sm font-medium transition-all duration-700">
                                Read Our Full Story
                            </span>
                            <svg className="group-hover:translate-x-1 transition-all duration-700"
                                xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" 
                                    className="stroke-[#910606] group-hover:stroke-white" 
                                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* IMAGE SECTION */}
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div className="sm:w-[564px] w-full sm:h-[646px] h-[450px] sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover shadow-lg"
                                src="https://pagedone.io/asset/uploads/1717742431.png" alt="V M Financial Services team" />
                            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-b-4 border-[#910606] hidden md:block">
                                <p className="text-[#910606] font-bold text-xl italic">"Guidance Over Sales"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}