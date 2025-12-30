import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // 默认激活 'home'

    // 监听滚动事件
    useEffect(() => {
        const handleScroll = () => {
            // 获取所有板块的 ID
            const sections = ['home', 'games', 'studio', 'team'];

            // 获取当前滚动条的位置 (加 100px 是为了让切换更灵敏一点)
            const scrollPosition = window.scrollY + 100;

            // 循环检查每个板块
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    // 如果滚动条位置 > 这个板块的顶部位置，就激活它
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        // 添加监听器
        window.addEventListener('scroll', handleScroll);
        // 清理监听器 (防止内存泄漏)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getNavLinkClass = (sectionName) => {
        const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer";
        const activeClass = "text-cyan-400 font-bold scale-110 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]"; // 激活时的样式 (发光 + 变大)
        const inactiveClass = "text-gray-400 hover:text-white hover:bg-gray-800"; // 未激活时的样式

        return `${baseClass} ${activeSection === sectionName ? activeClass : inactiveClass}`;
    };

    return (
        <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 text-white fixed w-full z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#home" className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition-transform">
                            PIXELFORGE
                        </a>
                    </div>

                    {/* Desktop Menu (电脑端菜单) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className={getNavLinkClass('home')}>Home</a>
                            <a href="#games" className={getNavLinkClass('games')}>Games</a>
                            <a href="#studio" className={getNavLinkClass('studio')}>Studio</a>
                            <a href="#team" className={getNavLinkClass('team')}>Team</a>
                        </div>
                    </div>

                    {/* Mobile Menu Button (手机端菜单按钮) */}
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

            {/* Mobile Menu (手机端菜单) */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-b border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('home')}`}>Home</a>
                        <a href="#games" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('games')}`}>Games</a>
                        <a href="#studio" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('studio')}`}>Studio</a>
                        <a href="#team" onClick={() => setIsOpen(false)} className={`block ${getNavLinkClass('team')}`}>Team</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;