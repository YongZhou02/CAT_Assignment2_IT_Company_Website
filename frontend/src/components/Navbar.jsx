import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // 辅助函数：生成导航链接的样式
    const getNavLinkClass = (path) => {
        const isActive = location.pathname === path;

        // ✨ Base: 这里加上了 backdrop-blur 和 border，让每个按钮都变成独立的毛玻璃
        const baseClass = "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer backdrop-blur-md border";

        // 激活状态：亮的毛玻璃 + 青色发光
        const activeClass = "bg-white/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]";

        // 未激活状态：暗的毛玻璃 -> 悬停变亮
        const inactiveClass = "bg-black/50 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30";

        return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
    };

    return (
        // ✨ 重点 1: Navbar 容器变成完全透明 (bg-transparent)，去掉所有边框和模糊
        // 这样星星就能完全透出来，而按钮是悬浮的
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform group">
                            {/* Logo 背景也可以加一点点光晕，防止在星星上看不清 */}
                            <div className="p-1 rounded-lg bg-black/20 backdrop-blur-sm">
                                <img src="/logo.png" alt="PixelForge Logo" className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                            </div>
                            <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-md">
                                PIXELFORGE
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {/* 这里调用的 getNavLinkClass 会让每个 Link 变成一块玻璃 */}
                            <Link to="/" className={getNavLinkClass('/')}>Home</Link>
                            <Link to="/games" className={getNavLinkClass('/games')}>Games</Link>
                            <Link to="/studio" className={getNavLinkClass('/studio')}>Studio</Link>
                            <Link to="/team" className={getNavLinkClass('/team')}>Team</Link>
                            <Link to="/careers" className={getNavLinkClass('/careers')}>Careers</Link>
                            <Link to="/faq" className={getNavLinkClass('/faq')}>FAQ</Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            // 手机菜单按钮也做成毛玻璃
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
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

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                // 手机端展开菜单依然需要背景，否则文字会看不清
                // 这里用深色毛玻璃
                <div className="md:hidden absolute top-20 left-4 right-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl animate-fadeIn">
                    <div className="px-4 pt-2 pb-3 space-y-1">
                        <Link to="/" onClick={() => setIsOpen(false)} className={`block text-center ${getNavLinkClass('/')}`}>Home</Link>
                        <Link to="/games" onClick={() => setIsOpen(false)} className={`block text-center ${getNavLinkClass('/games')}`}>Games</Link>
                        <Link to="/studio" onClick={() => setIsOpen(false)} className={`block text-center ${getNavLinkClass('/studio')}`}>Studio</Link>
                        <Link to="/team" onClick={() => setIsOpen(false)} className={`block text-center ${getNavLinkClass('/team')}`}>Team</Link>
                        <Link to="/careers" onClick={() => setIsOpen(false)} className={`block text-center ${getNavLinkClass('/careers')}`}>Careers</Link>
                        <Link to="/faq" onClick={() => setIsOpen(false)} className={`block text-center ${getNavLinkClass('/faq')}`}>FAQ</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;