import React from 'react';
// 注意：删掉了 import { Link } ...

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
                            <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition duration-300">Home</a></li>
                            <li><a href="#games" className="text-gray-400 hover:text-cyan-400 transition duration-300">Games</a></li>
                            <li><a href="#studio" className="text-gray-400 hover:text-purple-400 transition duration-300">Studio</a></li>
                            <li><a href="#team" className="text-gray-400 hover:text-purple-400 transition duration-300">Team</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Contact Base</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>📍 Level 99, The Glitch Tower</li>
                            <li>📧 contact@pixelforge.games</li>
                            <li>📞 +1 (800) GAME-DEV</li>
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