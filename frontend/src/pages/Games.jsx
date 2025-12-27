import React from 'react';

const games = [
    {
        id: 1,
        title: "Neon Drifter",
        genre: "Cyberpunk Racing",
        description: "Tear through the neon-drenched streets of Neo-Tokyo. customize your ride, outrun the corp enforcers, and race to the beat of a synthwave soundtrack.",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
        color: "text-purple-400",
        border: "hover:border-purple-500"
    },
    {
        id: 2,
        title: "StarForge",
        genre: "Space Simulation",
        description: "Command a fleet, build stations, and forge an empire among the stars. A procedurally generated universe awaits your exploration and conquest.",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Space theme
        color: "text-cyan-400",
        border: "hover:border-cyan-500"
    },
    {
        id: 3,
        title: "Echoes of Time",
        genre: "Narrative RPG",
        description: "A time-bending RPG where every choice ripples across three distinct timelines. Save the past to secure your future.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1668&q=80", // Abstract/Time theme
        color: "text-emerald-400",
        border: "hover:border-emerald-500"
    },
    {
        id: 4,
        title: "Cyber-Katana",
        genre: "Hack & Slash",
        description: "Vanquish robotic hordes with high-frequency blades. Master the art of the parry in this punishingly difficult action game.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80", // Dark/Action theme
        color: "text-pink-500",
        border: "hover:border-pink-500"
    }
];

const Games = () => {
    return (
        <div className="bg-black min-h-screen pt-24 pb-20 px-6">
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
                        <div
                            key={game.id}
                            className={`group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 ${game.border} hover:shadow-2xl hover:shadow-${game.color.split('-')[1]}-500/20`}
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
                                    {game.description}
                                </p>
                                <button className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-colors">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Games;
