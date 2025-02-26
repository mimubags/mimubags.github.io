document.addEventListener('DOMContentLoaded', function() {
    // Control del menú desplegable
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Cambiar el color del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'var(--pastel-pink)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            // Solo hacerlo transparente en la página principal
            if (document.querySelector('.hero')) {
                header.style.backgroundColor = 'transparent';
                header.style.boxShadow = 'none';
            }
        }
    });
    
    // Animación de aparición para las tarjetas al hacer scroll
    const animateItems = document.querySelectorAll('.category-card, .product-item');
    
    // Función para aplicar animaciones cuando los elementos están visibles
    function checkIfInView() {
        animateItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const inView = (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
            
            if (inView) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 150); // Agregamos un retraso para un efecto escalonado
            }
        });
    }
    
    // Verificar cuando se carga la página y al desplazarse
    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Verificar también al cargar la página
    
    // Smooth scrolling para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});