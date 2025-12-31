import React, { useState, useEffect, useRef } from 'react';

const RevealOnScroll = ({ children, variant = "fade-up", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // 动画只播放一次，往回滚不会消失
                }
            },
            {
                threshold: 0.1, // 只要出现 10% 就触发
                rootMargin: "0px 0px -50px 0px" // 稍微往上一点才触发，体验更好
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, []);

    // 定义不同的动画样式
    const variants = {
        "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        "slide-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20", // 从左边飞进来
        "slide-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20", // 从右边飞进来
        "zoom-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90", // 从小变大
    };

    // 延迟样式的构建
    const transitionDelay = delay ? `delay-[${delay}ms]` : "";
    // 注意：Tailwind 动态 class 有时需要 safelist，简单的可以直接用 style
    const styleDelay = { transitionDelay: `${delay}ms` };

    return (
        <div
            ref={ref}
            style={styleDelay}
            className={`transition-all duration-1000 ease-out transform ${variants[variant] || variants["fade-up"]}`}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;