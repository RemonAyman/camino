// Script to handle simple interactions

document.addEventListener('DOMContentLoaded', () => {
    console.log('Soldiers of Christ Scout Group - The Road 2026 Website Loaded');

    // Add staggered animation delay to chant cards dynamically if strictly needed, 
    // but CSS handles it well. 
    // We can add a parallax effect to the hero section here later.
    
    // Example: Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const heroText = document.querySelector('.hero-text');
        const scrollValue = window.scrollY;
        
        if(heroText) {
            heroText.style.transform = `translateY(${scrollValue * 0.5}px)`;
            heroText.style.opacity = 1 - (scrollValue / 500);
        }
    });
});
