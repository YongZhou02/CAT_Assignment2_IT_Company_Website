import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Studio from './pages/Studio';
import Team from './pages/Team';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';

function App() {
    return (
        <div className="font-sans text-gray-100 bg-black min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Home section - no scroll animation needed as it's visible on load */}
                <section id="home">
                    <Home />
                </section>

                {/* Games section with scroll reveal animation */}
                <section id="games">
                    <RevealOnScroll>
                        <Games />
                    </RevealOnScroll>
                </section>

                {/* Studio section with scroll reveal animation */}
                <section id="studio">
                    <RevealOnScroll>
                        <Studio />
                    </RevealOnScroll>
                </section>

                {/* Team section with scroll reveal animation */}
                <section id="team">
                    <RevealOnScroll>
                        <Team />
                    </RevealOnScroll>
                </section>
            </main>

            <Footer />
            <SpeedInsights />
        </div>
    );
}

export default App;