import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800 text-white fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:scale-105 transition-transform">
                            PIXELFORGE
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                            <Link to="/games" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</Link>
                            <Link to="/studio" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Mission/Vision</Link>
                            <Link to="/team" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Team</Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-b border-gray-800" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to="/games" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Products</Link>
                        <Link to="/studio" onClick={() => setIsOpen(false)} className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Mission/Vision</Link>
                        <Link to="/team" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Team</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
