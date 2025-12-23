import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: 'Alex Johnson',
            role: 'CEO & Founder',
            image: 'https://via.placeholder.com/300x300', // Replace with real images
            bio: 'Visionary leader with 10+ years of experience in software engineering and business strategy.'
        },
        {
            name: 'Sarah Lee',
            role: 'Lead Developer',
            image: 'https://via.placeholder.com/300x300', // Replace with real images
            bio: 'Full-stack expert passionate about building scalable and efficient web architectures.'
        },
        {
            name: 'Michael Chen',
            role: 'Creative Director',
            image: 'https://via.placeholder.com/300x300', // Replace with real images
            bio: 'Award-winning designer focused on crafting seamless and beautiful digital experiences.'
        }
    ];

    return (
        <section id="team" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="mt-4 text-xl text-gray-600">
                        The talented individuals behind TechNova's success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-600">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
