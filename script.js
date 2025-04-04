// Add interactive elements and animations
document.addEventListener('DOMContentLoaded', () => {
    // Cake interaction
    const flame = document.querySelector('.flame');
    const celebrationOverlay = document.querySelector('.celebration-overlay');
    const confettiContainer = document.querySelector('.confetti-container');

    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd700', '#ff9a9e'];
        const confettiCount = 100;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.opacity = '1';
            confetti.style.animation = 'confettiFall ' + (Math.random() * 3 + 3) + 's linear forwards';
            confettiContainer.appendChild(confetti);
        }

        // Clean up confetti after animation
        setTimeout(() => {
            while (confettiContainer.firstChild) {
                confettiContainer.removeChild(confettiContainer.firstChild);
            }
        }, 6000);
    }

    if (flame) {
        document.addEventListener('click', () => {
            flame.style.opacity = '0';
            celebrationOverlay.classList.add('active');
            createConfetti();
            
            // Cake celebration animation
            const cake = document.querySelector('.cake');
            cake.style.animation = 'cakeEntrance 1s ease-out forwards';
            
            setTimeout(() => {
                alert('🎉 Happy Birthday! Your wish has been made! 🎂');
                flame.style.opacity = '1';
                celebrationOverlay.classList.remove('active');
            }, 2000);
        });
    }

    // Random balloon colors and positions
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDuration = (Math.random() * 5 + 10) + 's';
    });

    // Photo gallery animation
    const photos = document.querySelectorAll('.photo-card');
    photos.forEach((photo, index) => {
        photo.style.animationDelay = (index * 0.2) + 's';
    });

    // Add sparkle effect to cake
    function createSparkle() {
        const cakeElement = document.querySelector('.cake');
        if (!cakeElement) return; // Exit if cake element doesn't exist

        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        cakeElement.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }

    // Create sparkles periodically
    setInterval(createSparkle, 500);
});