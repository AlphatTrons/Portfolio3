// Parallax Effect for Background
document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelectorAll("section").forEach(section => {
        section.style.backgroundPositionY = `${scrollY * 0.8}px`;
    });
});

// Scroll Animations with GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate About Section Cards on Scroll
gsap.from(".about-section .card", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
});

// Animate About Text Section
gsap.from(".about-text", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Animate About Image Section
gsap.from(".about-image", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 0.3,
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});

// Scroll-triggered animations for Skills Section (Optional - Can add more sections)
gsap.from(".skills-section .skill-item", {
    scrollTrigger: {
        trigger: ".skills-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
});

// Optional: Fade-in Animation for Projects Section
gsap.from(".projects-section .project-card", {
    scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.3,
});

// Scroll Animations using GSAP
gsap.registerPlugin(ScrollTrigger);

// Animate cards on scroll
gsap.from(".about-section .card", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
});

// Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-section .card", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
});

// Skills Progress Bar Animation
gsap.from(".skills-bar", {
    scrollTrigger: {
        trigger: ".skills-section",
        start: "top 70%",
        end: "bottom 60%",
        toggleActions: "play none none none",
    },
    width: "0%",
    duration: 1,
});

console.log(localStorage.getItem('theme'));

const testimonialsLoop = document.querySelector(".testimonials-loop");

testimonialsLoop.addEventListener("mouseover", () => {
    testimonialsLoop.style.animationPlayState = "paused";
});

testimonialsLoop.addEventListener("mouseout", () => {
    testimonialsLoop.style.animationPlayState = "running";
});
