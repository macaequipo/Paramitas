document.addEventListener('DOMContentLoaded', () => {
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carousel = document.getElementById('carousel');

let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;

// Función para actualizar el carrusel
function updateCarousel() {
    const offset = -currentIndex * 100; // Desplazamiento en porcentaje
    carousel.style.transform = `translateX(${offset}%)`;
}

// Función para ir a la siguiente tarjeta
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards; // Avanzar al siguiente índice, y volver al inicio al llegar al final
    updateCarousel();
});

// Función para ir a la tarjeta anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Retroceder al índice anterior
    updateCarousel();
});
  
});