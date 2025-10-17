document.addEventListener('DOMContentLoaded', () => {

    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
        navToggle.classList.toggle('is-active');
        body.classList.toggle('body-no-scroll');
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');

        if (window.innerWidth > 768) { 
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        }
    });

    const animationOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('is-visible');
                observer.unobserve(element);
            }
        });
    }, animationOptions);

    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
});