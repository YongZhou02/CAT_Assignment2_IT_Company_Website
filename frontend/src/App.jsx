import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
import Studio from './pages/Studio';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="font-sans text-gray-100 bg-black min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/games/:id" element={<GameDetail />} />
                        <Route path="/studio" element={<Studio />} />
                        <Route path="/team" element={<Team />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
