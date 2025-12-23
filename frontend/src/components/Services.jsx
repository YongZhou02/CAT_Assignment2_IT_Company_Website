import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'Building responsive, high-performance websites and web applications tailored to your business needs.',
            icon: '💻'
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive and visually stunning user interfaces that provide exceptional user experiences.',
            icon: '🎨'
        },
        {
            title: 'IoT Solutions',
            description: 'Connecting devices and systems to unlock new data-driven insights and operational efficiencies.',
            icon: '🌐'
        },
        {
            title: 'Cloud Consulting',
            description: 'Helping you migrate, optimize, and manage your cloud infrastructure for scalability and security.',
            icon: '☁️'
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="mt-4 text-xl text-gray-600">
                        Comprehensive technology solutions designed to help your business grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
