// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = mobileMenuButton.contains(event.target);

            if (!isClickInsideMenu && !isClickOnButton && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Mobile Dropdown Toggle
    const mobileDropdownToggle = document.getElementById('mobile-dropdown-toggle');
    const mobileDropdown = document.getElementById('mobile-dropdown');

    if (mobileDropdownToggle && mobileDropdown) {
        mobileDropdownToggle.addEventListener('click', function() {
            mobileDropdown.classList.toggle('hidden');
        });
    }

    // Contact Form Handling (Static Demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show alert for demo
            alert('Formulaire de démonstration statique.\n\nCe formulaire n\'est pas encore connecté à un backend.\n\nL\'intégration avec PHP/Node.js sera effectuée ultérieurement pour traiter les envois de messages.');

            // Optionally, you can log the form data to console
            const formData = new FormData(contactForm);
            console.log('Form data (demo):');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Reset form after submission
            // contactForm.reset();
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add active class to current page in navigation
    const currentLocation = window.location.pathname;
    const menuItems = document.querySelectorAll('nav a');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentLocation.endsWith(href)) {
            item.classList.add('active', 'text-primary');
            item.classList.remove('text-text-dark');
        }
    });
});

// Lazy loading images (if needed in the future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
