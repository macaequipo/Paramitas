// Seleccionar todas las cards
const cards = document.querySelectorAll('.card');

// Agregar el efecto de hover a cada card
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Al pasar el ratón sobre la card
        card.style.transform = 'translateY(-10px) scale(1.05)';
        card.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        // Al quitar el ratón de la card
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = 'none';
    });
});

// Función para animar las cards al cargar la página
window.addEventListener('load', () => {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200); // Demora progresiva para cada card
    });
});

let currentIndex = 0; // Índice inicial de la card visible
const totalCards = cards.length; // Total de cards
const carousel = document.querySelector('.carousel'); // Seleccionar el contenedor del carrusel

// Función para mover el carrusel
function moveCarousel(direction) {
    // Actualizamos el índice basado en la dirección (1 para siguiente, -1 para anterior)
    currentIndex += direction;

    // Si el índice está fuera del rango, lo ajustamos
    if (currentIndex < 0) {
        currentIndex = totalCards - 1; // Volver al último elemento
    } else if (currentIndex >= totalCards) {
        currentIndex = 0; // Volver al primer elemento
    }

    // Desplazamos el carrusel
    const offset = -(currentIndex * (cards[0].offsetWidth + 20)); // Calculamos el desplazamiento
    carousel.style.transform = `translateX(${offset}px)`; // Aplicamos el desplazamiento al contenedor
}
