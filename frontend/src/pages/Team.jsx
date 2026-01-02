import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll'; // ✨ 引入动画组件

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Lim Yong Zhou",
            role: "Lead Developer & Architect",
            bio: "Master of code. Converting caffeine into complex game mechanics and bug-free systems.",
            image: "/limyongzhou.png",
            color: "text-purple-500",
            border: "hover:border-purple-500",
            github: "https://github.com/",
            linkedin: "https://www.linkedin.com/"
        },
        {
            id: 2,
            name: "Saw Cheng Rui",
            role: "Creative Director & Designer",
            bio: "The visionary. Designing levels that challenge the mind and stories that touch the soul.",
            image: "/sawchengrui.jpg",
            color: "text-cyan-500",
            border: "hover:border-cyan-500",
            github: "https://github.com/",
            linkedin: "https://www.linkedin.com/"
        },
        {
            id: 3,
            name: "Tan Jia Hong",
            role: "Lead 3D Artist",
            bio: "Visual sorcerer. Sculpting polygons into breathtaking characters and immersive environments.",
            image: "/tanjiahong.jpg",
            color: "text-pink-500",
            border: "hover:border-pink-500",
            github: "https://github.com/JiaHong531",
            linkedin: "https://www.linkedin.com/in/tan-jia-hong-1392a9335/"
        }
    ];

    return (
        <div className="bg-transparent w-full py-24 pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* ✨ Header Animation: 整体向上浮现 */}
                <RevealOnScroll variant="fade-up">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Dev Squad</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            The minds behind the madness. We are a team of passionate creators dedicated to building the next generation of gaming.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        // ✨ 重点：在这里包裹 RevealOnScroll
                        // index * 200: 第一个0ms，第二个200ms，第三个400ms，波浪感更强
                        <RevealOnScroll key={member.id} delay={index * 200} variant="fade-up">
                            <div
                                className={`bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 ${member.border} hover:-translate-y-2 hover:shadow-2xl h-full`}
                            >
                                <div className="h-80 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>

                                <div className="p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className={`font-bold text-sm uppercase tracking-wider mb-4 ${member.color}`}>
                                        {member.role}
                                    </p>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {member.bio}
                                    </p>

                                    <div className="mt-6 flex justify-center space-x-4">

                                        {/* GitHub Button */}
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 flex-shrink-0"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        </a>

                                        {/* LinkedIn Button */}
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 flex-shrink-0"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;