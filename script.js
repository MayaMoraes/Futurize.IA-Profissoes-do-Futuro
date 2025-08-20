// Funcionalidades interativas para o site Futurize.IA

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Se for um link interno (começando com #)
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

    // Interatividade dos cards de áreas profissionais
    const areaCards = document.querySelectorAll('.area-card');
    
    areaCards.forEach(card => {
        card.addEventListener('click', function() {
            const areaName = this.querySelector('h3').textContent;
            
            // Adiciona efeito visual de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Simula navegação para página da área (pode ser implementado posteriormente)
            console.log(`Navegando para área: ${areaName}`);
            
            // Aqui você pode adicionar a lógica para navegar para páginas específicas
            // Por exemplo: window.location.href = `area-${areaName.toLowerCase().replace(/\s+/g, '-')}.html`;
        });

        // Efeito de hover aprimorado
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animação de entrada dos elementos
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

    // Observa elementos para animação
    const elementsToAnimate = document.querySelectorAll('.area-card, .page-title');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Navegação responsiva (para implementação futura de menu mobile)
    function handleResponsiveNav() {
        const nav = document.querySelector('.nav');
        const navWrapper = document.querySelector('.nav-wrapper');
        
        if (window.innerWidth <= 768) {
            // Lógica para menu mobile pode ser adicionada aqui
            console.log('Modo mobile ativado');
        }
    }

    // Verifica responsividade no carregamento e redimensionamento
    handleResponsiveNav();
    window.addEventListener('resize', handleResponsiveNav);

    // Adiciona classe para indicar que o JavaScript foi carregado
    document.body.classList.add('js-loaded');
});

// Função para buscar áreas (implementação futura)
function searchAreas(query) {
    const cards = document.querySelectorAll('.area-card');
    const searchTerm = query.toLowerCase();
    
    cards.forEach(card => {
        const areaName = card.querySelector('h3').textContent.toLowerCase();
        
        if (areaName.includes(searchTerm)) {
            card.style.display = 'flex';
            card.style.animation = 'fadeInUp 0.3s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Função para filtrar por categoria (implementação futura)
function filterByCategory(category) {
    // Lógica de filtro pode ser implementada aqui
    console.log(`Filtrando por categoria: ${category}`);
}

