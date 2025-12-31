import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const getNavLinkClass = (path) => {
        const isActive = location.pathname === path;
        const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer";
        const activeClass = "text-cyan-400 font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]";
        const inactiveClass = "text-gray-400 hover:text-white hover:bg-gray-800";

        return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
    };

    return (
        <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 text-white fixed w-full z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform group">
                            <img src="/logo.png" alt="PixelForge Logo" className="h-10 auto object-contain rounded-lg drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                            <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                PIXELFORGE
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className={getNavLinkClass('/')}>Home</Link>
                            <Link to="/games" className={getNavLinkClass('/games')}>Games</Link>
                            <Link to="/studio" className={getNavLinkClass('/studio')}>Studio</Link>
                            <Link to="/team" className={getNavLinkClass('/team')}>Team</Link>
                            <Link to="/careers" className={getNavLinkClass('/careers')}>Careers</Link>
                            <Link to="/faq" className={getNavLinkClass('/faq')}>FAQ</Link>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none">
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

            {isOpen && (
                <div className="md:hidden bg-gray-900 border-b border-gray-800">
                    <div className="px-4 pt-2 pb-3 space-y-1 sm:px-4">
                        <Link to="/" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('/')}`}>Home</Link>
                        <Link to="/games" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('/games')}`}>Games</Link>
                        <Link to="/studio" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('/studio')}`}>Studio</Link>
                        <Link to="/team" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('/team')}`}>Team</Link>
                        <Link to="/careers" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('/careers')}`}>Careers</Link>
                        <Link to="/faq" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('/faq')}`}>FAQ</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;