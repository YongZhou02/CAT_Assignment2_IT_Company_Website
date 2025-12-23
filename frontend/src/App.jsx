import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans text-gray-900 antialiased">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Team />
            </main>
            <Footer />
        </div>
    );
}

export default App;
