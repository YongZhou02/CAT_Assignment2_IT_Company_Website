import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import emailjs from '@emailjs/browser';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isError = type === 'error';
  const borderColor = isError ? 'border-red-500/50' : 'border-green-500/50';
  const shadowColor = isError ? 'shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'shadow-[0_0_15px_rgba(34,197,94,0.3)]';
  const textColor = isError ? 'text-red-400' : 'text-green-400';
  const bgColor = isError ? 'bg-red-500/20' : 'bg-green-500/20';

  return (
    <div className={`fixed bottom-5 right-5 z-[9999] flex items-center gap-3 bg-gray-900 border ${borderColor} ${shadowColor} text-white px-6 py-4 rounded-xl animate-bounce-in`}>
      <div className={`${bgColor} p-2 rounded-full`}>
        {isError ? (
          <svg className={`w-6 h-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className={`w-6 h-6 ${textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        )}
      </div>
      <div>
        <h4 className={`font-bold ${textColor}`}>{isError ? 'Error' : 'Success!'}</h4>
        <p className="text-sm text-gray-300">{message}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_blwprns";
    const TEMPLATE_ID = "template_4k8ywt8";
    const PUBLIC_KEY = "BKs6xUt5NqoNUnoCw";

    // ✨ 5. Sending Logic
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        // Success
        console.log('SUCCESS!', result.text);
        setToast({ message: "We received your message!", type: 'success' });
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, (error) => {
        console.log('FAILED...', error.text);
        setToast({ message: "Failed to send. Please try again.", type: 'error' });
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-transparent text-white font-sans min-h-screen">

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-ken-burns opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black z-0"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] pb-4 box-decoration-clone">
            PixelForge Studios
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-pulse">
            Forging Digital Realities.
          </p>

          <Link
            to="/games"
            className="inline-block px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-500 font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] cursor-pointer rounded-sm"
          >
            View Games
          </Link>
        </div>
      </section>

      {/* --- Intro Text Section --- */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll variant="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-purple-400">We Craft Universes</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              At PixelForge, we don't just build games; we engineer immersive experiences.
              Blending cutting-edge technology with artistic mastery, our team pushes the boundaries
              of storytelling and gameplay to transport players into worlds they never want to leave.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- Video Teaser Section --- */}
      <section className="py-24 bg-black/80 relative overflow-hidden border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <RevealOnScroll variant="zoom-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              See It In Action
            </h2>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-gray-800 group hover:border-purple-500 transition-colors duration-500">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8ZXPYOzG4V8"
                title="PixelForge"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* --- Contact Form Section --- */}
      <section className="py-24 px-6 relative bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll variant="fade-up">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl hover:border-cyan-500/30 transition-colors duration-500">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-gray-400">Have a crazy game idea? We’d love to hear from you.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    required
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest transition-all duration-300 transform shadow-lg flex justify-center items-center
                    ${isSubmitting
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 hover:-translate-y-1 hover:shadow-cyan-500/25 text-white'
                    }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Portal Toast */}
      {toast && ReactDOM.createPortal(
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />,
        document.body
      )}

    </div>
  );
};

export default Home;