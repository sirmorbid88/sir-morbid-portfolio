document.addEventListener("DOMContentLoaded", () => {
    
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                const bar = entry.target.querySelector('.bar-fill');
                if (bar) { bar.style.width = bar.dataset.percentage; }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.panel, .skill-bar-container').forEach(el => observer.observe(el));

    
    const cards = document.querySelectorAll('.panel');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            
            const rotateX = (centerY - y) / 15;
            const rotateY = (x - centerX) / 15;

           
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
           
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });
});