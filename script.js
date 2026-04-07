document.addEventListener("DOMContentLoaded", () => {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add('reveal');

                
                const bar = entry.target.querySelector('.bar-in');
                if (bar) {
                    const width = bar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                }
            }
        });
    }, { threshold: 0.1 });

    
    document.querySelectorAll('.panel, .skill-item').forEach(el => observer.observe(el));
});