import React, { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const FAQ = () => {
    const faqs = [
        {
            question: "What game engine does PixelForge use?",
            answer: "We primarily build our AAA titles using Unreal Engine 5 to leverage Nanite and Lumen technologies. For our mobile prototypes, we occasionally use Unity or custom frameworks."
        },
        {
            question: "Are you currently hiring interns?",
            answer: "Yes! We run an internship program twice a year (Summer and Winter). Check our Careers page for the latest openings."
        },
        {
            question: "Can I stream your games on Twitch/YouTube?",
            answer: "Absolutely! We encourage content creators to stream our games. You are free to monetize your videos. We'd love to see your playthroughs!"
        },
        {
            question: "When is your next major release?",
            answer: "Our next major sci-fi RPG is scheduled for Q4 2026. Join our newsletter to stay updated on beta testing opportunities."
        },
        {
            question: "Do you offer remote work?",
            answer: "PixelForge Studios adopts a hybrid work culture. Most of our roles offer remote flexibility, although some positions may require on-site collaboration at our Penang HQ."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-transparent min-h-screen text-white pt-24 pb-20 px-6">
            <div className="max-w-3xl mx-auto">

                <RevealOnScroll variant="fade-up">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Frequently Asked <span className="text-purple-500">Questions</span>
                        </h1>
                        <p className="text-gray-400">Everything you need to know about our studio and games.</p>
                    </div>
                </RevealOnScroll>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <RevealOnScroll key={index} variant="fade-up" delay={index * 100}>
                            <div
                                className={`bg-gray-900/50 border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'border-gray-800 hover:border-gray-700'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-purple-400' : 'text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`transform transition-transform duration-300 text-2xl text-purple-500 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-800/50">
                                        {faq.answer}
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

export default FAQ;