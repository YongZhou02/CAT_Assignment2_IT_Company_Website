import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gamesData } from '../data/gamesData';

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const carouselRef = useRef(null);

  // Scroll the carousel left/right
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-600">★</span>
        ))}
        <span className="text-gray-400 ml-1 text-sm">({rating})</span>
      </div>
    );
  };

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
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] pb-4 box-decoration-clone">
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

      {/* Featured Games Carousel */}
      <section className="py-20 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-cyan-400 uppercase tracking-wider">
            Featured Projects
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 -translate-x-4"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 translate-x-4"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable Cards */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-8 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {gamesData.map((game) => (
                <div
                  key={game.id}
                  onClick={() => setSelectedGame(game)}
                  className="flex-shrink-0 w-80 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${game.color} group-hover:text-white transition-colors`}>
                      {game.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {game.shortDescription}
                    </p>
                    {renderStars(game.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedGame && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedGame(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Genre Badge */}
              <div className="absolute top-4 left-4">
                <span className={`bg-black/80 ${selectedGame.color} text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${selectedGame.borderColor}`}>
                  {selectedGame.genre}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Title */}
              <h2 className={`text-3xl font-bold ${selectedGame.color} mb-1`}>
                {selectedGame.title}
              </h2>
              <p className="text-gray-400 italic mb-4">{selectedGame.tagline}</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {selectedGame.longDescription}
              </p>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-gray-500 text-sm uppercase mb-1">Release Date</h4>
                  <p className="text-white">{selectedGame.releaseDate}</p>
                </div>
                <div>
                  <h4 className="text-gray-500 text-sm uppercase mb-1">Rating</h4>
                  {renderStars(selectedGame.rating)}
                </div>
                <div className="col-span-2">
                  <h4 className="text-gray-500 text-sm uppercase mb-2">Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedGame.platforms.map((platform, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-gray-500 text-sm uppercase mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedGame.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={selectedGame.color}>▹</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedGame(null)}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors font-medium"
                >
                  Close
                </button>
                <Link
                  to={`/games/${selectedGame.id}`}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white py-3 rounded-lg transition-all font-medium text-center"
                >
                  View Full Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
