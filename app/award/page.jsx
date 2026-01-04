
import backgroundimage from '@/public/images/backgound.png';
import { Award, Star, ShieldCheck, Trophy, Landmark, ArrowUpRight } from 'lucide-react';
import HeroBanner from '../../components/HeroBanner';


const achievements = [
    {
        id: "01",
        title: "3x MDRT Qualifier",
        subtitle: "Million Dollar Round Table",
        desc: "Recognized among the top 1% of financial professionals globally for exceptional professional knowledge and strict ethical conduct.",
        icon: <Trophy className="w-8 h-8 text-amber-500" />,
        badge: "Global Standard",
        bg: "from-amber-500/10 to-transparent",
        border: "hover:border-amber-500/50"
    },
    {
        id: "02",
        title: "Ace Life Advisor",
        subtitle: "Top Tier Designation",
        desc: "Awarded for consistent excellence in insurance planning and maintaining a high portfolio persistence rate.",
        icon: <Award className="w-8 h-8 text-[#910606]" />,
        badge: "Premium Status",
        bg: "from-[#910606]/10 to-transparent",
        border: "hover:border-[#910606]/50"
    },
    {
        id: "03",
        title: "9+ Years Journey",
        subtitle: "Experience & Trust",
        desc: "A decade of transforming financial futures through customized 'Minimum Investment, Maximum Benefit' strategies.",
        icon: <Landmark className="w-8 h-8 text-emerald-600" />,
        badge: "Veteran Advisor",
        bg: "from-emerald-600/10 to-transparent",
        border: "hover:border-emerald-600/50"
    }
];

export default function Page() {
    return (
        <div className="min-h-screen bg-white">


            <HeroBanner
                pretitle="Our Achievements"
                title="Award and Recognition"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, possimus."
                backgroundImage={backgroundimage}
            />

            <section className="py-24 bg-[#f8fafc] px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <div className="max-w-2xl">
                            <h2 className="text-[#910606] font-bold tracking-widest text-sm mb-3">MILESTONES</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-[#001d3d]">
                                Recognized Excellence in <br />
                                <span className="text-transparent bg-clip-text bg-[#910606]">
                                    Financial Advisory
                                </span>
                            </h3>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-[#910606]/10 flex items-center justify-center">
                                        <Star className="w-5 h-5 text-[#910606] fill-[#910606]" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-[#001d3d] flex items-center justify-center text-white text-xs font-bold">
                                    500+
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 font-medium">TRUSTED BY 500+ FAMILIES</p>
                        </div>
                    </div>

                    {/* The Bento-Inspired Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {achievements.map((item, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white rounded-[2.5rem] p-10 border border-gray-100 transition-all duration-500 overflow-hidden ${item.border} hover:shadow-2xl hover:shadow-[#910606]/10/50`}
                            >
                                {/* Decorative Background Gradient */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.bg} rounded-bl-[5rem] -z-0 transition-transform group-hover:scale-150 duration-700`}></div>

                                {/* Number/ID Label */}
                                <span className="absolute top-10 right-10 text-6xl font-black text-gray-50 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {item.id}
                                </span>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-8 border border-gray-50 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>

                                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold tracking-widest text-gray-500 mb-4 group-hover:bg-[#910606] group-hover:text-white transition-colors">
                                        {item.badge}
                                    </div>

                                    <h4 className="text-2xl font-black text-[#001d3d] mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-[#910606] font-bold text-sm mb-6">
                                        {item.subtitle}
                                    </p>

                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>

                                    <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                        <span className="text-xs font-bold text-[#001d3d]">Official Recognition</span>
                                        <ArrowUpRight className="w-5 h-5 text-[#910606]" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                 
                </div>
            </section>

        </div>
    )
}