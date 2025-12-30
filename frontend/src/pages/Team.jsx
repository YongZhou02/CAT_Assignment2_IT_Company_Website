import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Lim Yong Zhou",
            role: "Lead Developer & Architect",
            bio: "Master of code. Converting caffeine into complex game mechanics and bug-free systems.",
            image: "/limyongzhou.jpg",
            color: "text-purple-500",
            border: "hover:border-purple-500"
        },
        {
            id: 2,
            name: "Saw Cheng Rui",
            role: "Creative Director & Designer",
            bio: "The visionary. Designing levels that challenge the mind and stories that touch the soul.",
            image: "/sawchengrui.jpg",
            color: "text-cyan-500",
            border: "hover:border-cyan-500"
        },
        {
            id: 3,
            name: "Tan Jia Hong",
            role: "Lead 3D Artist",
            bio: "Visual sorcerer. Sculpting polygons into breathtaking characters and immersive environments.",
            image: "/tanjiahong.jpg",
            color: "text-pink-500",
            border: "hover:border-pink-500"
        }
    ];

    return (
        <div className="bg-black min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Dev Squad</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The minds behind the madness. We are a team of passionate creators dedicated to building the next generation of gaming.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className={`bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 ${member.border} hover:-translate-y-2 hover:shadow-2xl`}
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
                                    <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition cursor-pointer">
                                        GitHub
                                    </span>
                                    <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition cursor-pointer">
                                        In
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;