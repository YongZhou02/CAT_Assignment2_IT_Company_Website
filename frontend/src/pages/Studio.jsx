import React from 'react';

const Studio = () => {
    return (
        <div className="bg-black min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
                        The Studio
                    </h1>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"></div>
                    <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        PixelForge isn't just a company; it's a laboratory for imagination.
                        We blend art, code, and storytelling to create digital experiences that matter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="bg-gray-900 border border-gray-800 p-10 rounded-2xl hover:border-purple-500 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                        <div className="flex items-center mb-6">
                            <div className="bg-gray-800 p-4 rounded-full mr-5 group-hover:bg-purple-900/30 transition-colors">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">Our Mission</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            To craft immersive worlds that inspire and connect players globally.
                            We strive to push the boundaries of what's possible in interactive entertainment,
                            turning wild dreams into playable realities.
                        </p>
                    </div>

                    <div className="bg-gray-900 border border-gray-800 p-10 rounded-2xl hover:border-cyan-500 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                        <div className="flex items-center mb-6">
                            <div className="bg-gray-800 p-4 rounded-full mr-5 group-hover:bg-cyan-900/30 transition-colors">
                                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">Our Vision</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            To redefine the future of gaming by merging cutting-edge AI technology with human creativity.
                            We envision a universe where every player's story is unique, meaningful, and unforgettable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studio;