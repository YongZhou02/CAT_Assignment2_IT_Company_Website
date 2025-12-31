import React, { useEffect, useRef } from 'react';

const Studio = () => {
    const canvasRef = useRef(null);

    // Galaxy/Starfield Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let stars = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            stars = [];
            const numStars = Math.floor((canvas.width * canvas.height) / 4000);

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5, // Star size
                    speedX: (Math.random() - 0.5) * 0.2, // Slightly slower for elegance
                    speedY: Math.random() * 0.1 + 0.05,
                    opacity: Math.random() * 0.8 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                    twinklePhase: Math.random() * Math.PI * 2,
                    color: Math.random() > 0.7 ?
                        `rgba(${147 + Math.random() * 50}, ${100 + Math.random() * 50}, 255,` :
                        Math.random() > 0.5 ?
                            `rgba(100, ${200 + Math.random() * 55}, 255,` :
                            `rgba(255, 255, 255,`
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.x += star.speedX;
                star.y += star.speedY;
                star.twinklePhase += star.twinkleSpeed;

                // Wrap around screen (stars reappear on the opposite side)
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;

                const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
                const currentOpacity = star.opacity * twinkle;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = star.color + currentOpacity + ')';
                ctx.fill();

                if (star.size > 1.5) {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                    ctx.fillStyle = star.color + (currentOpacity * 0.2) + ')';
                    ctx.fill();
                }
            });

            animationId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        createStars();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createStars();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const values = [
        {
            icon: "🎮",
            title: "Player First",
            description: "Every pixel, every line of code, every decision we make starts with the player experience."
        },
        {
            icon: "🚀",
            title: "Innovation",
            description: "We push the boundaries of what's possible, exploring new technologies and gameplay mechanics."
        },
        {
            icon: "🤝",
            title: "Collaboration",
            description: "Great games are built by great teams. We foster creativity through open dialogue and mutual respect."
        },
        {
            icon: "✨",
            title: "Quality",
            description: "We don't cut corners. Every game we release represents our commitment to excellence."
        }
    ];

    return (
        <div className="bg-black w-full py-24 pt-20 relative overflow-hidden">
            {/* Animated Galaxy Background */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-0"
                style={{ opacity: 0.6 }}
            />

            {/* Hero Section */}
            <div className="relative overflow-hidden py-20 z-10">
                {/* Animated Nebula Blobs */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-600 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                Our Story
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Where passion meets pixels, and dreams become playable realities.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="max-w-5xl mx-auto px-6 pb-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full filter blur-2xl group-hover:bg-purple-600/20 transition-all duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="bg-purple-600/20 p-4 rounded-xl mr-4 group-hover:scale-110 group-hover:bg-purple-600/30 transition-all duration-300">
                                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Our Mission</h2>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To craft unforgettable gaming experiences that transport players to worlds beyond imagination.
                                We blend cutting-edge technology with masterful storytelling to create games that don't just
                                entertain—they <span className="text-purple-400 font-semibold">inspire, challenge, and unite</span> players across the globe.
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/10 rounded-full filter blur-2xl group-hover:bg-cyan-600/20 transition-all duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="bg-cyan-600/20 p-4 rounded-xl mr-4 group-hover:scale-110 group-hover:bg-cyan-600/30 transition-all duration-300">
                                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Our Vision</h2>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To become the global standard for <span className="text-cyan-400 font-semibold">immersive interactive entertainment</span>.
                                We envision a future where our games are cultural touchstones—experiences that spark creativity,
                                foster community, and push the boundaries of what interactive media can achieve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="py-16 bg-gradient-to-b from-transparent to-gray-900/50 relative z-10">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Values</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group text-center p-6 rounded-xl bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10"
                            >
                                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="py-20 relative overflow-hidden z-10">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full filter blur-[150px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <svg className="w-12 h-12 text-purple-500/50 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed mb-6">
                        We don't just make games—we forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 not-italic font-bold">experiences that matter</span>.
                        Every player who enters our worlds should leave transformed.
                    </blockquote>
                    <p className="text-gray-500 text-lg">— The PixelForge Team</p>
                </div>
            </div>
        </div>
    );
};

export default Studio;
