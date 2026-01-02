import React, { useState, useEffect, useRef } from 'react';

const RevealOnScroll = ({ children, variant = "fade-up", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
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

    const variants = {
        "fade-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        "slide-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20", // 从左边飞进来
        "slide-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20", // 从右边飞进来
        "zoom-in": isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90", // 从小变大
    };

    const transitionDelay = delay ? `delay-[${delay}ms]` : "";
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