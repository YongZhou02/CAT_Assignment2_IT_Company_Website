import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // 控制显示/隐藏
    const [lastScrollY, setLastScrollY] = useState(0); // 记录上一次滚动位置

    const location = useLocation();

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // 如果是向下滑，并且已经滚了一段距离 (>100px) -> 隐藏 Navbar
                    setIsVisible(false);
                } else {
                    // 如果是向上滑 -> 显示 Navbar
                    setIsVisible(true);
                }

                // 记录当前位置，供下一次比较
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        // 清理监听器
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


    const getNavLinkClass = (path) => {
        const isActive = location.pathname === path;
        const baseClass = "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer backdrop-blur-md border";
        const activeClass = "bg-white/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]";
        const inactiveClass = "bg-black/50 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30";

        return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-transform duration-300 bg-transparent py-4
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} // ✨ 核心逻辑：控制 Y 轴位移
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform group">
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