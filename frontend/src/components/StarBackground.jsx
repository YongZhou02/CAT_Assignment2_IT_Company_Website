import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;
        let stars = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            stars = [];
            // 分母越大，星星越少。原本是4000，改成6000让背景清爽一点
            const numStars = Math.floor((canvas.width * canvas.height) / 4000);

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1.5,
                    speedX: (Math.random() - 0.5) * 0.1, // 速度放慢，更优雅
                    speedY: Math.random() * 0.1 + 0.02,
                    opacity: Math.random() * 0.5 + 0.1,
                    twinkleSpeed: Math.random() * 0.01 + 0.005,
                    twinklePhase: Math.random() * Math.PI * 2,
                    color: Math.random() > 0.7 ?
                        `rgba(${147 + Math.random() * 50}, ${100 + Math.random() * 50}, 255,` :
                        Math.random() > 0.5 ?
                            `rgba(100, ${200 + Math.random() * 55}, 255,` :
                            `rgba(255, 255, 255,`
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.x += star.speedX;
                star.y += star.speedY;
                star.twinklePhase += star.twinkleSpeed;

                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;

                const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
                const currentOpacity = star.opacity * twinkle;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = star.color + currentOpacity + ')';
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        createStars();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createStars();
        });

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.4 }} // 全局透明度，不抢内容风头
        />
    );
};

export default StarBackground;