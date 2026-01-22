
import backgroundimage from '@/public/images/backgound.png';
import { Award, Star, ShieldCheck, Trophy, Landmark, ArrowUpRight } from 'lucide-react';
import HeroBanner from '../../components/HeroBanner';
import { awards } from '@/script/data';
import { about } from '@/script/data';
import image from '@/public/images/award.jpeg'

// Map icon names to actual components
const iconMap = {
    Trophy: Trophy,
    Award: Award,
    Landmark: Landmark
};

// Convert icon names to components
const achievements = awards.achievements.map(achievement => {
    const IconComponent = iconMap[achievement.icon];
    return {
        ...achievement,
        icon: <IconComponent className={`w-8 h-8 ${achievement.iconColor}`} />
    };
});

export default function Page() {
    return (
        <div className="min-h-screen bg-white">


            <HeroBanner
                pretitle={awards.hero.pretitle}
                title={awards.hero.title}
                description={awards.hero.description}
                backgroundImage={backgroundimage}
            />

            <section className="py-24 bg-[#f8fafc] px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <div className="max-w-2xl">
                            <h2 className="text-[#910606] font-bold tracking-widest text-sm mb-3">{awards.section.badge}</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-[#001d3d]">
                                {awards.section.heading} <br />
                                <span className="text-transparent bg-clip-text bg-[#910606]">
                                    {awards.section.highlightedText}
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
                                    {awards.section.trustBadge.count}
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 font-medium">{awards.section.trustBadge.text}</p>
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
                        src={image.src}
                        alt={about.whoWeAre.image.alt}
                        className="rounded-2xl shadow-2xl border border-[#e5d3b3] "
                    />
                    {/* <div className="absolute -bottom-6 -left-6 bg-[#910606] text-white px-6 py-3 rounded-lg shadow-lg">
                                    <p className="text-sm font-medium tracking-wide">
                                        {about.whoWeAre.image.badge}
                                    </p>
                                </div> */}
                </div>
            </div>

        </div>
    )
}