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

    // Modal Logic
    const modal = document.getElementById('videoModal');
    const btn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-modal');
    const video = document.getElementById('modalVideo');

    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
            video.currentTime = 0; // Reset video
            video.play();
        }
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
            video.pause();
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            video.pause();
        }
    }
});
