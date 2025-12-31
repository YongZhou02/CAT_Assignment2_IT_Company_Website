import React, { useEffect } from 'react'; // ✨ 引入 useEffect
import { Routes, Route, useLocation } from 'react-router-dom'; // ✨ 引入 useLocation
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Studio from './pages/Studio';
import Team from './pages/Team';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import { SpeedInsights } from "@vercel/speed-insights/react"; // 如果没用 vercel 就注释掉

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // 每次路由路径变化时，强制滚回顶部
    }, [pathname]);

    return null;
};

function App() {
    return (
        <div className="font-sans text-gray-100 bg-black min-h-screen flex flex-col relative">

            <StarBackground />

            {/* 👇 放在这里，它会在每次切换页面时工作 */}
            <ScrollToTop />

            <div className="relative z-50">
                <Navbar />
            </div>

            <main className="flex-grow pt-16 relative z-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/studio" element={<Studio />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
            </main>

            <div className="relative z-10">
                <Footer />
            </div>

            <SpeedInsights />
        </div>
    );
}

export default App;