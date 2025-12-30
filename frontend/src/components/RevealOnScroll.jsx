import React, { useState, useEffect, useRef } from 'react';

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // ✅ 关键修改：直接把 isIntersecting 的状态赋值给 isVisible
                // 这样当你往回滚（离开屏幕）时，它会自动变回 false (消失)
                // 当你滚回来（进入屏幕）时，它会自动变成 true (出现)
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.15, // 稍微提高一点门槛，露出 15% 才开始动画，避免太灵敏闪烁
                rootMargin: "-50px 0px" // 让触发线往中间缩一点，视觉中心感更强
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

    // 动画逻辑：
    // 消失时：透明度变 0，稍微往下沉 (translate-y-24) 或往上浮，看你喜好
    // 出现时：透明度变 1，归位
    const classes = `transition-all duration-1000 ease-out transform ${
        isVisible
            ? 'opacity-100 translate-y-0 blur-none'
            : 'opacity-0 translate-y-24 blur-sm' // 加一点 blur (模糊) 会更有高级感
    }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

export default RevealOnScroll;