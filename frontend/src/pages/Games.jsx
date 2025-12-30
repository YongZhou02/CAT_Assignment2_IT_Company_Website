import React from 'react';
import { gamesData } from '../data/gamesData';

const Games = () => {
    const games = gamesData;
    return (
        <div className="bg-black w-full py-24 pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                        Our Creations
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore the worlds we've built. From the neon streets to the furthest stars, adventure awaits.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {games.map((game) => (
                        // 2. 把 <Link> 改成了 <div>，并删掉了 to="..."
                        <div
                            key={game.id}
                            className={`group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:${game.borderColor} hover:shadow-2xl ${game.glowColor} block`}
                        >
                            {/* Image Container */}
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opactiy-60"></div>
                                <img
                                    src={game.image}
                                    alt={game.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
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
                                <span className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-colors cursor-default">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Games;