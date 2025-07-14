document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-mobile');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // Efeito de Scroll no Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Scroll Suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Slider de Ídolos
    const slider = document.querySelector('.idolos-slider');
    const prevBtn = document.querySelector('.slider-controls .prev');
    const nextBtn = document.querySelector('.slider-controls .next');
    
    if (slider && prevBtn && nextBtn) {
        let currentScroll = 0;
        const cardWidth = 330; // Largura do card + margem
        const cardCount = document.querySelectorAll('.idolo-card').length;
        
        prevBtn.addEventListener('click', function() {
            currentScroll = Math.max(currentScroll - cardWidth, 0);
            slider.scrollTo({
                left: currentScroll,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            currentScroll = Math.min(currentScroll + cardWidth, (cardCount - 1) * cardWidth);
            slider.scrollTo({
                left: currentScroll,
                behavior: 'smooth'
            });
        });
    }
    
    // Animação ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .titulo-card, .idolo-card, .momento-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;    
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Chamar a função para aplicar a animação aos elementos visíveis    
    // Efeito de Parallax
    const parallaxElements = document.querySelectorAll('.parallax');                    
    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const offset = window.scrollY * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    }); 
    // Efeito de Fade In
    const fadeInElements = document.querySelectorAll('.fade-in');           
    fadeInElements.forEach(element => {
        element.style.opacity = 0; // Iniciar com opacidade 0
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1; // Fade in
                    observer.unobserve(entry.target); // Parar de observar após a animação
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(element);
    }); 
    // Efeito de Scroll Horizontal
    const horizontalScrollElements = document.querySelectorAll('.horizontal-scroll');   
    horizontalScrollElements.forEach(element => {
        element.style.overflowX = 'auto'; // Habilitar scroll horizontal
        element.style.whiteSpace = 'nowrap'; // Manter os itens em linha
        const items = element.querySelectorAll('.horizontal-item');
        
        items.forEach(item => {
            item.style.display = 'inline-block'; // Exibir itens em linha
            item.style.marginRight = '20px'; // Espaçamento entre os itens
        });
    });     

    