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

// Este script debe colocarse al final de tus páginas o ser incluido como un archivo externo

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de interés
    const interestButtons = document.querySelectorAll('.interest-button');
    
    // Añadir el event listener a cada botón
    interestButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener información del producto
            const productContainer = this.closest('.product-item');
            const productId = productContainer.dataset.productId;
            const productName = productContainer.querySelector('h3').textContent;
            const redirectUrl = this.dataset.redirectUrl;
            
            // Enviar evento a Google Analytics
            gtag('event', 'interest_click', {
                'event_category': 'Producto',
                'event_label': productName,
                'value': productId
            });
            
            // Redirigir al usuario después de un breve retraso
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 300);
        });
    });
    
    // Función para guardar en localStorage
    function saveInterestToLocalStorage(data) {
        let interests = JSON.parse(localStorage.getItem('productInterests') || '[]');
        interests.push(data);
        localStorage.setItem('productInterests', JSON.stringify(interests));
    }
    
    // Función para enviar al servidor
    function sendInterestToServer(data) {
        // Aquí puedes usar fetch para enviar los datos a tu backend
        fetch('/api/track-interest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                console.error('Error al enviar datos de interés');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});