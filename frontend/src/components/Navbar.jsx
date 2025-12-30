import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800 text-white fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#home" className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:scale-105 transition-transform">
                            PIXELFORGE
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Home</a>
                            <a href="#games" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Games</a>
                            <a href="#studio" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Studio</a>
                            <a href="#team" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Team</a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-b border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#games" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Games</a>
                        <a href="#studio" onClick={() => setIsOpen(false)} className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Studio</a>
                        <a href="#team" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Team</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;