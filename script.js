document.addEventListener('DOMContentLoaded', function() {
    // Redirect to home.html if accessing root URL or index.html directly
    if (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) {
        window.location.replace('home.html');
    }

    // Smooth scrolling for navigation links (if applicable)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add click functionality to area cards on index.html
    const areaCards = document.querySelectorAll('.area-card');
    areaCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent default link behavior if it's already an <a> tag
            if (card.tagName === 'A') {
                return; 
            }
            const link = card.getAttribute('href');
            if (link) {
                window.location.href = link;
            }
        });
    });

    // Add click functionality to course buttons
    const courseButtons = document.querySelectorAll('.course-btn');
    courseButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const link = button.getAttribute('href');
            if (link && link !== '#') {
                window.open(link, '_blank'); // Open external link in new tab
            } else {
                // Optional: Provide feedback if link is not available
                // alert('Link para o curso não disponível no momento.');
            }
        });
    });

    // Animation for elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.area-card, .page-title, .feature-card, .area-preview-card, .course-card');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Responsive navigation (future implementation for mobile menu)
    function handleResponsiveNav() {
        const nav = document.querySelector('.nav');
        const navWrapper = document.querySelector('.nav-wrapper');
        
        if (window.innerWidth <= 768) {
            // Logic for mobile menu can be added here
            // console.log('Mobile mode activated');
        }
    }

    handleResponsiveNav();
    window.addEventListener('resize', handleResponsiveNav);

    document.body.classList.add('js-loaded');
});

// Placeholder functions (if needed for future expansion)
function searchAreas(query) {
    // console.log(`Searching areas for: ${query}`);
}

function filterByCategory(category) {
    // console.log(`Filtering by category: ${category}`);
}


