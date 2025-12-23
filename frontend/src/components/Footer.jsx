import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">TechNova</h3>
                        <p className="text-gray-400">
                            Transforming businesses through innovative technology solutions.
                            We build the future of digital excellence.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                            <li><a href="#team" className="text-gray-400 hover:text-white transition duration-300">Our Team</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>📍 123 Tech Valley, Silicon District</li>
                            <li>📧 info@technova.com</li>
                            <li>📞 +60 12-345 6789</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} TechNova. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
