// Central data file for all games - used by Games.jsx and GameDetail.jsx

export const gamesData = [
    {
        id: 1,
        title: "Neon Drifter",
        genre: "Cyberpunk Racing",
        tagline: "The streets never sleep.",
        shortDescription: "Tear through the neon-drenched streets of Neo-Tokyo. Customize your ride, outrun the corp enforcers, and race to the beat of a synthwave soundtrack.",
        longDescription: "Neon Drifter drops you into the heart of Neo-Tokyo 2087, where underground street racing is the ultimate form of rebellion. Master the art of drifting through rain-slicked highways, customize your vehicle with bleeding-edge tech, and build your reputation from street punk to legend. With a fully dynamic weather system, day-night cycle, and a reactive AI director, no two races are ever the same.",
        features: [
            "Dynamic weather and day/night cycle",
            "Deep vehicle customization system",
            "Original synthwave soundtrack with 40+ tracks",
            "Online multiplayer with up to 16 players",
            "Story campaign with multiple endings"
        ],
        releaseDate: "Q2 2025",
        platforms: ["PC", "PlayStation 5", "Xbox Series X"],
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
        color: "text-purple-400",
        borderColor: "border-purple-500",
        glowColor: "shadow-purple-500/30"
    },
    {
        id: 2,
        title: "StarForge",
        genre: "Space Simulation",
        tagline: "Build. Explore. Conquer.",
        shortDescription: "Command a fleet, build stations, and forge an empire among the stars. A procedurally generated universe awaits your exploration and conquest.",
        longDescription: "StarForge is an ambitious space simulation that puts you at the helm of an interstellar empire. Starting with nothing but a single ship and a dream, you'll explore a procedurally generated galaxy with billions of stars. Establish trade routes, construct massive space stations, research alien technologies, and when diplomacy fails—command devastating fleet battles in real-time combat.",
        features: [
            "Procedurally generated galaxy with billions of systems",
            "Deep economy and trade simulation",
            "Real-time tactical fleet combat",
            "Base building and station management",
            "Modding support with Steam Workshop integration"
        ],
        releaseDate: "Q4 2025",
        platforms: ["PC", "Mac"],
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        color: "text-cyan-400",
        borderColor: "border-cyan-500",
        glowColor: "shadow-cyan-500/30"
    },
    {
        id: 3,
        title: "Echoes of Time",
        genre: "Narrative RPG",
        tagline: "Every choice echoes through eternity.",
        shortDescription: "A time-bending RPG where every choice ripples across three distinct timelines. Save the past to secure your future.",
        longDescription: "Echoes of Time is a narrative-driven RPG that challenges players to navigate three interconnected timelines—past, present, and future. Every decision you make sends ripples through time, altering events in unexpected ways. Unravel a mystery that spans centuries, forge alliances with characters across eras, and discover that sometimes the only way forward is to go back.",
        features: [
            "Three distinct time periods to explore",
            "Branching narrative with 50+ hours of content",
            "Turn-based combat with time-manipulation mechanics",
            "Hand-painted 2D art style",
            "Original orchestral soundtrack"
        ],
        releaseDate: "Q1 2026",
        platforms: ["PC", "Nintendo Switch", "PlayStation 5", "Xbox Series X"],
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1668&q=80",
        color: "text-emerald-400",
        borderColor: "border-emerald-500",
        glowColor: "shadow-emerald-500/30"
    },
    {
        id: 4,
        title: "Cyber-Katana",
        genre: "Hack & Slash",
        tagline: "Precision. Speed. Perfection.",
        shortDescription: "Vanquish robotic hordes with high-frequency blades. Master the art of the parry in this punishingly difficult action game.",
        longDescription: "Cyber-Katana is a precision action game that demands mastery. Set in a fallen megacity overrun by rogue AI, you play as the last active combat android of the Katana Project. Every encounter is a deadly dance—parry at the precise moment, counter with devastating combos, and chain kills together in stylish displays of synthetic swordsmanship. Death comes quickly to the unprepared.",
        features: [
            "Frame-perfect parry system",
            "100+ unique enemy types",
            "Combo system with style rankings",
            "New Game+ with remixed encounters",
            "Boss rush mode"
        ],
        releaseDate: "Q3 2025",
        platforms: ["PC", "PlayStation 5", "Xbox Series X"],
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
        color: "text-pink-500",
        borderColor: "border-pink-500",
        glowColor: "shadow-pink-500/30"
    }
];

// Helper function to get a game by ID
export const getGameById = (id) => {
    return gamesData.find(game => game.id === parseInt(id));
};
