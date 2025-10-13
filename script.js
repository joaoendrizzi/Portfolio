document.addEventListener('DOMContentLoaded', () => {

    // Efeito de sombra no header ao rolar a página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        // No mobile, o header já tem sombra, então essa lógica é mais para o desktop
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

    // Intersection Observer para animações de scroll
    const animationOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('is-visible');
                observer.unobserve(el);
            }
        });
    }, animationOptions);

    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
});
