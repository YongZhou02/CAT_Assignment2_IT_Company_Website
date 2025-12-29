import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getGameById } from '../data/gamesData';

const GameDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const game = getGameById(id);

    // Handle game not found
    if (!game) {
        return (
            <div className="bg-black min-h-screen pt-24 pb-20 px-6 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Game Not Found</h1>
                    <p className="text-gray-400 mb-8">The game you're looking for doesn't exist.</p>
                    <Link
                        to="/games"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Back to Games
                    </Link>
                </div>
            </div>
        );
    }

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
        <div className="bg-black min-h-screen pt-20">
            {/* Hero Image */}
            <div className="relative h-[50vh] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
                <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Genre Badge */}
                <div className="absolute top-8 right-8 z-20">
                    <span className={`bg-black/80 backdrop-blur ${game.color} text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider border ${game.borderColor} transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default`}>
                        {game.genre}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 pb-20 -mt-20 relative z-20">
                {/* Title & Tagline */}
                <h1 className={`text-5xl md:text-6xl font-bold ${game.color} mb-2 transition-all duration-300 hover:tracking-wider`}>
                    {game.title}
                </h1>
                <p className="text-xl text-gray-400 italic mb-6">{game.tagline}</p>

                {/* Description */}
                <div className="mb-10">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {game.longDescription}
                    </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="group/item">
                            <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2 transition-colors group-hover/item:text-gray-400">Release Date</h3>
                            <p className="text-white text-lg transition-all duration-300 group-hover/item:translate-x-1">{game.releaseDate}</p>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Platforms</h3>
                            <div className="flex flex-wrap gap-2">
                                {game.platforms.map((platform, index) => (
                                    <span
                                        key={index}
                                        className={`bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:scale-110 hover:bg-gray-700 hover:${game.color} cursor-default`}
                                    >
                                        {platform}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="group/rating">
                            <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Rating</h3>
                            <div className="transition-transform duration-300 group-hover/rating:scale-105 origin-left">
                                {renderStars(game.rating)}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Features */}
                    <div>
                        <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-4">Key Features</h3>
                        <ul className="space-y-3">
                            {game.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 group/feature transition-all duration-300 hover:translate-x-2 cursor-default"
                                >
                                    <span className={`${game.color} mt-1 transition-transform duration-300 group-hover/feature:scale-125`}>▹</span>
                                    <span className="text-gray-300 transition-colors duration-300 group-hover/feature:text-white">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:-translate-x-1 active:scale-95"
                    >
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </button>
                    <Link
                        to="/games"
                        className={`bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg ${game.glowColor} hover:scale-105 hover:shadow-xl active:scale-95`}
                    >
                        View All Games
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GameDetail;
