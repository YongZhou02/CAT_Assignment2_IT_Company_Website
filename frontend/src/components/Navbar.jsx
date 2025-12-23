import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-800">TechNova</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-300">About</a>
                        <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Services</a>
                        <a href="#team" className="text-gray-600 hover:text-blue-600 transition duration-300">Team</a>
                        <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Contact Us</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Home</a>
                        <a href="#about" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">About</a>
                        <a href="#services" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Services</a>
                        <a href="#team" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md">Team</a>
                        <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 text-blue-600 font-medium hover:bg-gray-50 rounded-md">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
