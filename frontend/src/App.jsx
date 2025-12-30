import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Studio from './pages/Studio';
import Team from './pages/Team';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll'; // 1. 引入这个组件

function App() {
    return (
        <div className="font-sans text-gray-100 bg-black min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Home 通常不需要滚动动画，因为它一进来就在那里 */}
                <section id="home">
                    <Home />
                </section>

                {/* 给 Games 套上魔法斗篷 */}
                <section id="games">
                    <RevealOnScroll>
                        <Games />
                    </RevealOnScroll>
                </section>

                {/* 给 Studio 套上魔法斗篷 */}
                <section id="studio">
                    <RevealOnScroll>
                        <Studio />
                    </RevealOnScroll>
                </section>

                {/* 给 Team 套上魔法斗篷 */}
                <section id="team">
                    <RevealOnScroll>
                        <Team />
                    </RevealOnScroll>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;