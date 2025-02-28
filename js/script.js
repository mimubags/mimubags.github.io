document.addEventListener('DOMContentLoaded', function() {
    // Control del menú desplegable
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
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
    }
    
    // Cambiar el color del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (!header) return;
        
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
                }, index * 150);
            }
        });
    }
    
    // Verificar cuando se carga la página y al desplazarse
    window.addEventListener('scroll', checkIfInView);
    checkIfInView();
    
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
    
    // SEGUIMIENTO DE BOLSOS - Optimizado solo para Google Analytics
    const interestButtons = document.querySelectorAll('.interest-button');
    
    interestButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener información del producto
            const productContainer = this.closest('.product-item');
            let productId = "desconocido";
            let productName = "Bolso desconocido";
            const redirectUrl = this.dataset.redirectUrl || "https://www.vinted.es";
            
            // Extraer información del producto de manera segura
            if (productContainer) {
                productId = productContainer.dataset.productId || productContainer.id || "producto-sin-id";
                const nameElement = productContainer.querySelector('h3');
                if (nameElement) {
                    productName = nameElement.textContent;
                }
            }
            
            console.log(`Click en: ${productName} (ID: ${productId})`);
            
            // Verificar que gtag esté disponible
            if (typeof gtag === 'function') {
                // Enviar evento detallado a Google Analytics
                gtag('event', 'interest_click', {
                    'event_category': 'Producto',
                    'event_label': productName,
                    'product_id': productId,
                    'page_location': window.location.href,
                    'page_title': document.title,
                    'redirect_url': redirectUrl
                });
                
                console.log("✅ Evento enviado a Google Analytics");
            } else {
                console.error("❌ Error: gtag no está disponible");
            }
            
            // Redirigir al usuario después de un breve retraso
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 500); // Aumentado a 500ms para asegurar que el evento se registre
        });
    });
});