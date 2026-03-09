document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Navigation Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    // Toggle menu
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });

    // 2. Set current year in Footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // 3. Scroll Reveal Animation (Intersection Observer)
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1, // Element needs to be 10% visible to trigger
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Stop observing once it has appeared
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
