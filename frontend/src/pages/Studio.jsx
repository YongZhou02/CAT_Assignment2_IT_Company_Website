import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const Studio = () => {

    const values = [
        {
            icon: "🎮",
            title: "Player First",
            description: "Every pixel, every line of code, every decision we make starts with the player experience."
        },
        {
            icon: "🚀",
            title: "Innovation",
            description: "We push the boundaries of what's possible, exploring new technologies and gameplay mechanics."
        },
        {
            icon: "🤝",
            title: "Collaboration",
            description: "Great games are built by great teams. We foster creativity through open dialogue and mutual respect."
        },
        {
            icon: "✨",
            title: "Quality",
            description: "We don't cut corners. Every game we release represents our commitment to excellence."
        }
    ];

    return (
        <div className="w-full py-24 pt-20 relative overflow-hidden bg-black text-white">

            {/* --- Hero Section --- */}
            <div className="relative overflow-hidden py-20 z-10">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-600 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                    Our Story
                                </span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Where passion meets pixels, and dreams become playable realities.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>

            {/* --- Mission & Vision Cards (Point Form 版) --- */}
            <div className="max-w-5xl mx-auto px-6 pb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Mission Card */}
                    <RevealOnScroll variant="slide-left">
                        <div className="group relative bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] h-full">
                            <div className="flex items-center mb-6">
                                <div className="bg-purple-500/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                            </div>

                            {/* Point Form */}
                            <ul className="space-y-5 text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-purple-400 font-bold text-lg">▹</span>
                                    <div>
                                        <strong className="text-white block mb-1">Push Boundaries</strong>
                                        <span className="text-sm text-gray-400">Leveraging UE5 & AI to redefine what's possible in interactive media.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-purple-400 font-bold text-lg">▹</span>
                                    <div>
                                        <strong className="text-white block mb-1">Craft Worlds</strong>
                                        <span className="text-sm text-gray-400">Building immersive, living universes that tell deep, emotional stories.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-purple-400 font-bold text-lg">▹</span>
                                    <div>
                                        <strong className="text-white block mb-1">Player First</strong>
                                        <span className="text-sm text-gray-400">Every mechanic and line of code starts with the player experience.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>

                    {/* Vision Card */}
                    <RevealOnScroll variant="slide-right">
                        <div className="group relative bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] h-full">
                            <div className="flex items-center mb-6">
                                <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                            </div>

                            {/* Point Form */}
                            <ul className="space-y-5 text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 font-bold text-lg">▹</span>
                                    <div>
                                        <strong className="text-white block mb-1">Global Standard</strong>
                                        <span className="text-sm text-gray-400">To become the industry benchmark for visual fidelity and immersion.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 font-bold text-lg">▹</span>
                                    <div>
                                        <strong className="text-white block mb-1">Cultural Impact</strong>
                                        <span className="text-sm text-gray-400">Creating game franchises that become lasting pillars of pop culture.</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-cyan-400 font-bold text-lg">▹</span>
                                    <div>
                                        <strong className="text-white block mb-1">Inspire Creators</strong>
                                        <span className="text-sm text-gray-400">Igniting the imagination of the next generation of developers.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>

            {/* --- Core Values Section --- */}
            <div className="py-16 bg-gradient-to-b from-transparent to-gray-900/50 relative z-10">
                <div className="max-w-5xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Values</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <RevealOnScroll key={index} variant="zoom-in" delay={index * 100}>
                                <div className="group text-center p-6 rounded-xl bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10 h-full">
                                    <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                        {value.description}
                                    </p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Tech Stack --- */}
            <div className="py-24 bg-gray-900/30 relative z-10 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powered By Technology</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                We push the boundaries of what's possible by leveraging the industry's most advanced tools and our own proprietary engines.
                            </p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <RevealOnScroll variant="fade-up" delay={0}>
                            <div className="group p-6 bg-black/50 rounded-xl border border-gray-700 hover:border-white transition-all duration-300 text-center hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                    <span className="text-xl font-black">UE5</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Unreal Engine 5</h3>
                                <p className="text-sm text-gray-400">Nanite & Lumen for hyper-realistic rendering.</p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll variant="fade-up" delay={100}>
                            <div className="group p-6 bg-black/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <span className="text-xl font-black">C++</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Native C++</h3>
                                <p className="text-sm text-gray-400">High-performance logic and memory management.</p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll variant="fade-up" delay={200}>
                            <div className="group p-6 bg-black/50 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 text-center hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                                    <span className="text-xl font-black">AI</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Adaptive AI</h3>
                                <p className="text-sm text-gray-400">Machine learning models for dynamic NPC behavior.</p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll variant="fade-up" delay={300}>
                            <div className="group p-6 bg-black/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center hover:-translate-y-2 h-full">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Modern Web</h3>
                                <p className="text-sm text-gray-400">React + Vite for seamless digital experiences.</p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>

            {/* --- Studio Stats --- */}
            <div className="py-16 relative z-10">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealOnScroll variant="fade-up">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
                            <div>
                                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">3+</h3>
                                <p className="text-gray-400 mt-2 uppercase tracking-widest text-xs">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">8</h3>
                                <p className="text-gray-400 mt-2 uppercase tracking-widest text-xs">Games Shipped</p>
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">10M+</h3>
                                <p className="text-gray-400 mt-2 uppercase tracking-widest text-xs">Global Players</p>
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">∞</h3>
                                <p className="text-gray-400 mt-2 uppercase tracking-widest text-xs">Coffee Consumed</p>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>

            {/* --- Quote Section --- */}
            <div className="pb-24 pt-10 relative overflow-hidden z-10">
                <RevealOnScroll variant="fade-up" delay={200}>
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full filter blur-[150px]"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <svg className="w-12 h-12 text-purple-500/50 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <blockquote className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed mb-6">
                            We don't just make games—we forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 not-italic font-bold">experiences that matter</span>.
                            Every player who enters our worlds should leave transformed.
                        </blockquote>
                        <p className="text-gray-500 text-lg">— The PixelForge Team</p>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default Studio;