// script.js
document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations for text and button
    gsap.from(".animated-text", { opacity: 0, y: -100, duration: 1, stagger: 0.2 });
    gsap.from(".hero-button", { opacity: 0, y: 30, delay: 1.5, duration: 1 });

    // Scroll-down animation fade in after a delay
    gsap.from(".scroll-text", { opacity: 0, y: 30, delay: 2, duration: 1 });
    gsap.from(".scroll-icon", { opacity: 0, y: 30, delay: 2.3, duration: 1 });

    // Parallax Effect (Background Movement on Mouse)
    document.querySelector(".hero-section").addEventListener("mousemove", (e) => {
        const movement = 15;
        const xMove = (e.clientX - window.innerWidth / 2) / movement;
        const yMove = (e.clientY - window.innerHeight / 2) / movement;
        document.querySelector(".hero-overlay").style.transform = `translate(${xMove}px, ${yMove}px)`;
    });

    // Scroll-triggered animations
    gsap.to(".scroll-down", { opacity: 0.6, y: 20, scrollTrigger: {
        trigger: ".scroll-down",
        start: "top center",
        end: "bottom center",
        scrub: true
    }});
});
