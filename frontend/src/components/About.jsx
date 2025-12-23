import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        TechNova is a forward-thinking IT consultancy dedicated to empowering businesses
                        with cutting-edge technology and strategic digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission Card */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            To drive digital innovation by delivering robust, scalable, and user-centric
                            software solutions that solve complex business challenges. We strive to bridge
                            the gap between human potential and technological advancement.
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            To be the global catalyst for digital excellence, creating a world where
                            technology seamlessly enhances every aspect of life and business. We aim to set
                            the industry standard for innovation, integrity, and impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
