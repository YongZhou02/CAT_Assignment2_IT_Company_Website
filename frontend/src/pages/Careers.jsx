import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll'; // ✨ 引入动画组件

// 👇 1. Toast 组件 (保持不变)
const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-5 right-5 z-[100] flex items-center gap-3 bg-gray-900 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)] text-white px-6 py-4 rounded-xl animate-bounce-in">
            <div className="bg-green-500/20 p-2 rounded-full">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div>
                <h4 className="font-bold text-green-400">Success!</h4>
                <p className="text-sm text-gray-300">{message}</p>
            </div>
        </div>
    );
};

const Careers = () => {
    // 职位数据
    const jobs = [
        {
            id: 1,
            title: "Senior Game Developer",
            type: "Full-time",
            location: "Remote / Penang",
            department: "Engineering",
            description: "We are looking for a C++ wizard to help build our next-gen game engine.",
            responsibilities: [
                "Architect and implement high-performance game systems in C++.",
                "Optimize rendering pipelines for next-gen consoles (PS5/Xbox).",
                "Mentor junior developers and conduct code reviews.",
                "Collaborate with designers to implement gameplay mechanics."
            ],
            requirements: [
                "5+ years of experience in game development with C++.",
                "Deep understanding of Unreal Engine 5 source code.",
                "Strong math skills (Linear Algebra, 3D Vector math).",
                "Shipped at least one AAA title on console or PC."
            ],
            bonus: [
                "Experience with Vulkan or DirectX 12 APIs.",
                "Knowledge of Python for tooling automation."
            ]
        },
        {
            id: 2,
            title: "3D Character Artist",
            type: "Contract",
            location: "Penang",
            department: "Art",
            description: "Sculpt, texture, and breathe life into characters.",
            responsibilities: [
                "Create high-quality 3D character models (High/Low poly).",
                "Create realistic textures and materials (PBR workflow).",
                "Collaborate with riggers and animators to ensure proper deformation.",
                "Optimize assets for in-game performance."
            ],
            requirements: [
                "Strong portfolio demonstrating anatomy and clothing sculpting.",
                "Proficiency in ZBrush, Maya/Blender, and Substance Painter.",
                "Understanding of topology and UV mapping best practices."
            ],
            bonus: [
                "Experience with hair/fur creation (XGen or Cards).",
                "Ability to do basic rigging."
            ]
        },
        {
            id: 3,
            title: "Level Designer",
            type: "Full-time",
            location: "Remote",
            department: "Design",
            description: "Craft immersive worlds that tell a story.",
            responsibilities: [
                "Design and block out levels focusing on pacing and flow.",
                "Script gameplay events and encounters.",
                "Collaborate with environment artists to polish the visual fidelity.",
                "Iterate on designs based on playtest feedback."
            ],
            requirements: [
                "Experience with Level Editors (Unreal/Unity/Source).",
                "Strong sense of spatial design and lighting.",
                "Ability to communicate design ideas through documentation."
            ],
            bonus: []
        }
    ];

    // 状态管理
    const [applyingJob, setApplyingJob] = useState(null);
    const [viewingJob, setViewingJob] = useState(null);
    const [toast, setToast] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 文件上传状态
    const [resumeFile, setResumeFile] = useState(null);
    const fileInputRef = useRef(null);

    // 处理文件
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) setResumeFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) setResumeFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const removeFile = (e) => {
        e.stopPropagation();
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    // 处理提交
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!resumeFile) {
            alert("Please upload your resume first!");
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            const jobTitle = applyingJob.title;
            setApplyingJob(null);
            setResumeFile(null);
            setToast(`Application for ${jobTitle} has been sent!`);
        }, 1500);
    };

    const handleApplyFromDetails = () => {
        const job = viewingJob;
        setViewingJob(null);
        setApplyingJob(job);
    };

    return (
        <div className="bg-transparent min-h-screen text-white pt-24 pb-20 px-6 relative">

            {toast && <Toast message={toast} onClose={() => setToast(null)} />}

            <div className="max-w-5xl mx-auto">
                {/* ✨ Header Animation */}
                <RevealOnScroll variant="fade-up">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Forge</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            We are always looking for passionate creators. If you love games and want to build the future of interactive entertainment, you belong here.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Job List with Staggered Animation */}
                <div className="grid gap-6">
                    {jobs.map((job, index) => (
                        // ✨ 列表项动画：加上 delay
                        <RevealOnScroll key={job.id} variant="fade-up" delay={index * 150}>
                            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl hover:border-cyan-500 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
                                            <span className="bg-gray-800 px-3 py-1 rounded-full">{job.department}</span>
                                            <span className="bg-gray-800 px-3 py-1 rounded-full">{job.location}</span>
                                            <span className="bg-gray-800 px-3 py-1 rounded-full">{job.type}</span>
                                        </div>
                                        <p className="text-gray-300">{job.description}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0 shrink-0">
                                        <button
                                            onClick={() => setViewingJob(job)}
                                            className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-colors"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* ✨ Footer Section Animation */}
                <RevealOnScroll variant="fade-up" delay={200}>
                    <div className="mt-16 text-center bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-2xl border border-gray-700">
                        <h3 className="text-2xl font-bold mb-4">Don't see your role?</h3>
                        <p className="text-gray-400 mb-6">
                            We are always interested in meeting talented people. Send your portfolio to careers@pixelforge.games
                        </p>
                        <Link
                            to="/"
                            className="inline-block px-8 py-3 rounded-lg border border-gray-600 text-white font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </RevealOnScroll>
            </div>

            {/* JD Modal (No changes needed, modals handle their own animations usually via CSS or just appear) */}
            {viewingJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <div className="p-8 border-b border-gray-800 sticky top-0 bg-gray-900/95 backdrop-blur z-10 flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                                    {viewingJob.title}
                                </h2>
                                <div className="flex gap-3 text-sm text-gray-400">
                                    <span className="bg-gray-800 px-2 py-1 rounded">{viewingJob.department}</span>
                                    <span className="bg-gray-800 px-2 py-1 rounded">{viewingJob.location}</span>
                                </div>
                            </div>
                            <button onClick={() => setViewingJob(null)} className="text-gray-400 hover:text-white">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="p-8 space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-purple-400">◈</span> Responsibilities
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    {viewingJob.responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <span className="text-gray-600 mt-1.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-cyan-400">◈</span> Requirements
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    {viewingJob.requirements.map((item, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <span className="text-gray-600 mt-1.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {viewingJob.bonus && viewingJob.bonus.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="text-green-400">◈</span> Nice to Have
                                    </h3>
                                    <ul className="space-y-2 text-gray-300">
                                        {viewingJob.bonus.map((item, idx) => (
                                            <li key={idx} className="flex gap-3">
                                                <span className="text-gray-600 mt-1.5">+</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="p-6 border-t border-gray-800 bg-gray-900/50 flex justify-end gap-4 sticky bottom-0">
                            <button onClick={() => setViewingJob(null)} className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors">Close</button>
                            <button onClick={handleApplyFromDetails} className="px-8 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold hover:from-purple-500 hover:to-cyan-500 shadow-lg hover:shadow-purple-500/20 transition-all">Apply for this Role</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Application Modal */}
            {applyingJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg shadow-2xl relative">
                        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-white">Apply for Role</h3>
                                <p className="text-cyan-400 text-sm font-bold">{applyingJob.title}</p>
                            </div>
                            <button onClick={() => setApplyingJob(null)} className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                                <input required type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                <input required type="email" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Portfolio / LinkedIn URL</label>
                                <input type="url" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="https://..." />
                            </div>

                            {/* File Upload Area */}
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Resume / CV</label>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileSelect}
                                />
                                <div
                                    onClick={() => fileInputRef.current.click()}
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-all cursor-pointer relative group
                                        ${resumeFile
                                            ? 'border-green-500 bg-green-500/10'
                                            : 'border-gray-700 hover:border-cyan-500 hover:bg-gray-800'
                                        }`}
                                >
                                    {resumeFile ? (
                                        <div className="flex flex-col items-center">
                                            <svg className="w-8 h-8 text-green-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-white font-medium text-sm">{resumeFile.name}</p>
                                            <p className="text-xs text-green-400 mt-1">Ready to upload</p>
                                            <button
                                                onClick={removeFile}
                                                className="absolute top-2 right-2 p-1 bg-gray-900 rounded-full text-gray-400 hover:text-white"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <svg className="w-8 h-8 text-gray-500 mx-auto mb-2 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <p className="text-gray-400 text-sm group-hover:text-white">Click to upload or drag and drop</p>
                                            <p className="text-xs text-gray-600 mt-1">PDF, DOCX up to 5MB</p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button type="button" onClick={() => setApplyingJob(null)} className="flex-1 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors">Cancel</button>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`flex-1 py-2 rounded-lg font-bold transition-all shadow-lg flex justify-center items-center
                                        ${isSubmitting
                                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-500 hover:to-cyan-500'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        "Submit Application"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Careers;