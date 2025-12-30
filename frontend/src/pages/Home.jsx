import React from 'react';

const Home = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* --- Hero Section (大封面) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-ken-burns opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black z-0"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] pb-4 box-decoration-clone">
            PixelForge Studios
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Forging Digital Realities.
          </p>

          <a
            href="#games"
            className="inline-block px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-500 font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] cursor-pointer"
          >
            View Games
          </a>
        </div>
      </section>

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

    </div>
  );
};

export default Home;