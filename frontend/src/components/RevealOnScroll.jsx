import React, { useState, useEffect, useRef } from 'react';

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Key: directly set isVisible based on isIntersecting
                // When scrolling away (leaving screen), it becomes false (hidden)
                // When scrolling back (entering screen), it becomes true (visible)
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.05, // Lower threshold for mobile - 5% visible triggers animation
                rootMargin: "0px 0px" // No offset for better mobile compatibility
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

    // Animation logic:
    // Hidden: opacity 0, shifted down (translate-y-24)
    // Visible: opacity 1, normal position
    const classes = `transition-all duration-1000 ease-out transform ${isVisible
        ? 'opacity-100 translate-y-0 blur-none'
        : 'opacity-0 translate-y-16 blur-sm' // Reduced translate for mobile
        }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

export default RevealOnScroll;