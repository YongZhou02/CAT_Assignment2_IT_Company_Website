import React from 'react';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            {/* Background - Replace with Video later */}
            <div className="absolute inset-0 bg-blue-900 opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                    Innovate. Build. <span className="text-blue-400">Scale.</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    Your partner in digital transformation. We craft world-class software solutions
                    for the modern enterprise.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="#services" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                        Our Services
                    </a>
                    <a href="#about" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
                        Learn More
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
