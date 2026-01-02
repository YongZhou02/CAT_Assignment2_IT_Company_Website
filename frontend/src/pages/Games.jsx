import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { gamesData } from '../data/gamesData';
import RevealOnScroll from '../components/RevealOnScroll';

const Games = () => {
    const games = gamesData;
    const [selectedGame, setSelectedGame] = useState(null);

    const openModal = (game) => {
        setSelectedGame(game);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedGame(null);
        document.body.style.overflow = 'unset';
    };

    // Render star rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center gap-1">
                {[...Array(fullStars)].map((_, i) => (
                    <span key={`full-${i}`} className="text-yellow-400 text-xl">★</span>
                ))}
                {hasHalfStar && <span className="text-yellow-400 text-xl">★</span>}
                {[...Array(emptyStars)].map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-600 text-xl">★</span>
                ))}
                <span className="text-gray-400 ml-2">({rating})</span>
            </div>
        );
    };

    return (
        <div className="bg-transparent w-full py-24 pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Animation */}
                <RevealOnScroll variant="fade-up">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                            Our Creations
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Explore the worlds we've built. From the neon streets to the furthest stars, adventure awaits.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Games Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {games.map((game, index) => (
                        <RevealOnScroll key={game.id} delay={index * 100} variant="fade-up">
                            <div
                                onClick={() => openModal(game)}
                                className={`group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:${game.borderColor} hover:shadow-2xl ${game.glowColor} block cursor-pointer h-full`}

                                // Video Preview Logic
                                onMouseEnter={(e) => {
                                    if (game.videoPreview) {
                                        const video = e.currentTarget.querySelector('video');
                                        if (video) video.play();
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (game.videoPreview) {
                                        const video = e.currentTarget.querySelector('video');
                                        if (video) {
                                            video.pause();
                                            video.currentTime = 0;
                                        }
                                    }
                                }}
                            >
                                {/* Image Container */}
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60"></div>

                                    {/* Image Logic: Hide on hover ONLY if video exists */}
                                    <img
                                        src={game.image}
                                        alt={game.title}
                                        className={`w-full h-full object-cover transform transition-all duration-700
                                            ${game.videoPreview
                                                ? 'group-hover:scale-110 group-hover:opacity-0'
                                                : 'group-hover:scale-110'
                                            }
                                        `}
                                    />

                                    {/* Video Element */}
                                    {game.videoPreview && (
                                        <video
                                            src={game.videoPreview}
                                            muted
                                            loop
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    )}

                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-gray-700">
                                            {game.genre}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className={`text-3xl font-bold mb-3 ${game.color} group-hover:text-white transition-colors`}>
                                        {game.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {game.shortDescription}
                                    </p>
                                    <span className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white group-hover:text-cyan-400 transition-colors">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

            {/* Modal Overlay - No Scroll Animation needed for modal itself */}
            {selectedGame && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
                    onClick={closeModal}
                >
                    {/* Modal Content */}
                    <div
                        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-xl rounded-2xl border ${selectedGame.borderColor} shadow-2xl ${selectedGame.glowColor}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Hero Image / Video Logic for Modal */}
                        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 z-10"></div>

                            {selectedGame.videoPreview ? (
                                <video
                                    src={selectedGame.videoPreview}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={selectedGame.image}
                                    alt={selectedGame.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute top-4 left-4 z-20">
                                <span className={`bg-black/80 backdrop-blur ${selectedGame.color} text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider border ${selectedGame.borderColor} transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default ${selectedGame.glowColor}`}>
                                    {selectedGame.genre}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 -mt-10 relative z-20">
                            {/* Title & Tagline */}
                            <h2 className={`text-4xl md:text-5xl font-bold ${selectedGame.color} mb-2 transition-all duration-300 hover:tracking-wider cursor-default`}>
                                {selectedGame.title}
                            </h2>
                            <p className="text-xl text-gray-400 italic mb-6 transition-colors duration-300 hover:text-gray-300 cursor-default">{selectedGame.tagline}</p>

                            {/* Long Description */}
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {selectedGame.longDescription}
                            </p>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    <div className="group/date cursor-default">
                                        <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2 transition-colors group-hover/date:text-gray-400">Release Date</h3>
                                        <p className="text-white text-lg transition-all duration-300 group-hover/date:translate-x-1 group-hover/date:text-cyan-400">{selectedGame.releaseDate}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Platforms</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedGame.platforms.map((platform, index) => (
                                                <span
                                                    key={index}
                                                    className={`bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 hover:bg-gray-700 hover:${selectedGame.color} hover:shadow-md cursor-default`}
                                                >
                                                    {platform}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="group/rating cursor-default">
                                        <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Rating</h3>
                                        <div className="transition-transform duration-300 group-hover/rating:scale-105 origin-left">
                                            {renderStars(selectedGame.rating)}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Features */}
                                <div>
                                    <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {selectedGame.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3 group/feature transition-all duration-300 hover:translate-x-2 cursor-default"
                                            >
                                                <span className={`${selectedGame.color} mt-1 transition-transform duration-300 group-hover/feature:scale-125`}>▹</span>
                                                <span className="text-gray-300 transition-colors duration-300 group-hover/feature:text-white">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Close Button at Bottom */}
                            <div className="flex justify-center pt-4 border-t border-gray-800">
                                <button
                                    onClick={closeModal}
                                    className={`bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105`}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Games;