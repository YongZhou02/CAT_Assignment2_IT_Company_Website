import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll'; // ✨ 引入动画组件

const Home = () => {
  // 简单的表单状态
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Simulation)"); // 模拟发送
  };

  return (
    <div className="bg-black text-white font-sans">

      {/* --- Hero Section (保持不动，不用 RevealOnScroll，因为一进来就要看到) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* 背景图 + Ken Burns 动画 */}
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

      {/* --- Intro Text Section (Fade Up) --- */}
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

      {/* --- Video Teaser Section (Zoom In 效果，强调视觉冲击) --- */}
      <section className="py-24 bg-black relative overflow-hidden border-y border-gray-900">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <RevealOnScroll variant="zoom-in"> {/* ✨ 视频放大出现 */}
                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                   See It In Action
                </h2>
                <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-gray-800 group hover:border-purple-500 transition-colors duration-500">
                   <iframe
                     className="w-full h-full"
                     src="" //Rmb insert video in there
                     title="Game Trailer"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                   ></iframe>
                </div>
            </RevealOnScroll>
         </div>
      </section>

      {/* --- Contact Form Section (Slide Up / Fade Up) --- */}
      <section className="py-24 px-6 relative bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll variant="fade-up">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl hover:border-cyan-500/30 transition-colors duration-500">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">Start a Project</h2>
                <p className="text-gray-400">Have a crazy game idea? Let's build it together.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-bold uppercase tracking-widest hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};

export default Home;