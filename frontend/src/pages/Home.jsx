import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Animated Background Image (Cinematic Fallback) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-ken-burns opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            PixelForge Studios
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Forging Digital Realities.
          </p>
          <Link
            to="/games"
            className="inline-block px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-500 font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          >
            View Games
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-400">We Craft Universes</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            At PixelForge, we don't just build games; we engineer immersive experiences.
            Blending cutting-edge technology with artistic mastery, our team pushes the boundaries
            of storytelling and gameplay to transport players into worlds they never want to leave.
          </p>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400 uppercase tracking-wider">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Game Card 1 */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-colors duration-300 group">
              <div className="h-48 bg-gray-800 rounded-lg mb-6 flex items-center justify-center group-hover:bg-gray-700 transition">
                <span className="text-gray-500">Image Asset</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition">Neon Drifter</h3>
              <p className="text-gray-400 text-sm">
                A high-speed cyberpunk racer where the track evolves to the beat of the music.
              </p>
            </div>

            {/* Game Card 2 */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-cyan-500 transition-colors duration-300 group">
              <div className="h-48 bg-gray-800 rounded-lg mb-6 flex items-center justify-center group-hover:bg-gray-700 transition">
                <span className="text-gray-500">Image Asset</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition">StarForge</h3>
              <p className="text-gray-400 text-sm">
                Explore procedurally generated galaxies, trade with alien factions, and build your empire.
              </p>
            </div>

            {/* Game Card 3 */}
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-colors duration-300 group">
              <div className="h-48 bg-gray-800 rounded-lg mb-6 flex items-center justify-center group-hover:bg-gray-700 transition">
                <span className="text-gray-500">Image Asset</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition">Echoes of Time</h3>
              <p className="text-gray-400 text-sm">
                A narrative-driven RPG where your choices ripple across timelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
