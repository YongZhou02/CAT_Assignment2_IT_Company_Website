import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 text-white relative overflow-hidden" id="contact">
            {/* 顶部装饰光晕 - 增加氛围感 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* 1. Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                            PixelForge Studios
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Forging immersive digital realities. We build worlds that players never want to leave.
                        </p>
                        <p className="text-gray-500 text-xs">
                            Designed for CAT201 Assignment 2.
                        </p>
                    </div>

                    {/* 2. Links Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-cyan-400 transition duration-300 flex items-center gap-2"><span className="text-purple-500">›</span> Home</Link></li>
                            <li><Link to="/games" className="hover:text-cyan-400 transition duration-300 flex items-center gap-2"><span className="text-purple-500">›</span> Games</Link></li>
                            <li><Link to="/studio" className="hover:text-purple-400 transition duration-300 flex items-center gap-2"><span className="text-cyan-500">›</span> Studio</Link></li>
                            <li><Link to="/team" className="hover:text-purple-400 transition duration-300 flex items-center gap-2"><span className="text-cyan-500">›</span> Team</Link></li>
                            <li><Link to="/careers" className="hover:text-cyan-400 transition duration-300 flex items-center gap-2"><span className="text-purple-500">›</span> Join Us</Link></li>
                            <li><Link to="/faq" className="hover:text-cyan-400 transition duration-300 flex items-center gap-2"><span className="text-purple-500">›</span> FAQ</Link></li>
                        </ul>
                    </div>

                    {/* 3. Contact & Socials Section (重点修改) */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Contact Base</h3>
                        <ul className="space-y-3 text-gray-400 text-sm mb-6">
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400">📍</span>
                                <span>11800 USM Penang, Malaysia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-cyan-400">📧</span>
                                <span>contact@pixelforge.games</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-pink-400">📞</span>
                                <span>+60 12-345 6789</span>
                            </li>
                        </ul>

                        {/* ✨ 社交媒体图标栏 ✨ */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">Join the Community</h4>
                            <div className="flex gap-4">
                                {/* Facebook */}
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                   className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white hover:shadow-[0_0_15px_rgba(24,119,242,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.476h3.425l-.46 3.667h-2.965v7.98c9.278-2.542 10.738-8.845 6.967-15.695C17.404 2.82 12.068 2 12 2c-13.333 0-13.333 20 0 20 2.276 0 2.411-.097 2.411-.097a.26.26 0 0 0 .23-.075.253.253 0 0 0 .054-.265A16.48 16.48 0 0 1 9.1 23.691Z"/></svg>
                                </a>

                                {/* Instagram */}
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                   className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>

                                {/* YouTube */}
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                                   className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#FF0000] hover:text-white hover:shadow-[0_0_15px_rgba(255,0,0,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                </a>

                                {/* Discord */}
                                <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
                                   className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-[#5865F2] hover:text-white hover:shadow-[0_0_15px_rgba(88,101,242,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873-3.012.077.077 0 01.1027-.137c3.9554 1.7933 10.0858 1.7933 12.0614 0z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} PixelForge Studios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;