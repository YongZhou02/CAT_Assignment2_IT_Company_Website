import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 text-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            PixelForge Studios
                        </h3>
                        <p className="text-gray-400">
                            Forging immersive digital realities. We build worlds that players never want to leave.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-cyan-400 transition duration-300">Home</Link></li>
                            <li><Link to="/games" className="text-gray-400 hover:text-cyan-400 transition duration-300">Games</Link></li>
                            <li><Link to="/studio" className="text-gray-400 hover:text-purple-400 transition duration-300">Studio</Link></li>
                            <li><Link to="/team" className="text-gray-400 hover:text-purple-400 transition duration-300">Team</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-cyan-400 transition duration-300">Join Us</Link></li>
                            <li><Link to="/faq" className="text-gray-400 hover:text-cyan-400 transition duration-300">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Contact Base</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>📍 11800 USM Penang, Malaysia</li>
                            <li>📧 contact@pixelforge.games</li>
                            <li>📞 +1 (800) 88 8888</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} PixelForge Studios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;