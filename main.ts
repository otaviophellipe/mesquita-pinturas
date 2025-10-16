// Rolagem suave para links de navegação
const anchors = document.querySelectorAll('nav a') as NodeListOf<HTMLAnchorElement>;
anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
            const target = document.querySelector(href) as HTMLElement;
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Submissão do formulário de contato
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
if (contactForm) {
    contactForm.addEventListener('submit', function(e: Event) {
        e.preventDefault();
        alert('Obrigado pela mensagem! Entraremos em contato em breve.');
        this.reset();
    });
}

// Observador de interseção para animações de fade-in
const fadeInObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach((section: Element) => {
    fadeInObserver.observe(section);
});
