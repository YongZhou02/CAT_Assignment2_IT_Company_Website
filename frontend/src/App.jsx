import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Studio from './pages/Studio';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans text-gray-100 bg-black min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <section id="home">
                    <Home />
                </section>

                <section id="games">
                    <Games />
                </section>

                <section id="studio">
                    <Studio />
                </section>

                <section id="team">
                    <Team />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;