/* ===========================================
   WATER BEARFIELD SCHOOL - WORKSHOP SCHEDULE
   JavaScript for smooth scrolling and interactivity
   =========================================== */

document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll for workshop links (fallback for browsers without CSS scroll-behavior)
    const workshopLinks = document.querySelectorAll('.workshop[href^="#"]');

    workshopLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                // Scroll to the workshop description
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                // Add a brief highlight effect
                targetElement.classList.add('highlight-card');
                setTimeout(function() {
                    targetElement.classList.remove('highlight-card');
                }, 2000);
            }
        });
    });

    // Add highlight animation style dynamically
    const style = document.createElement('style');
    style.textContent = `
        .highlight-card {
            animation: highlightPulse 0.5s ease-in-out 2;
        }

        @keyframes highlightPulse {
            0%, 100% {
                box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            }
            50% {
                box-shadow: 0 4px 24px rgba(45, 106, 79, 0.4);
            }
        }
    `;
    document.head.appendChild(style);

});
