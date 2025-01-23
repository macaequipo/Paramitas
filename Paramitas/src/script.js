document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('photoModal');
    const modalCarouselInner = document.getElementById('modalCarouselInner');
    const closeModal = document.getElementById('closeModal');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const carousel = document.getElementById('carousel');
    const reviewsCarousel = document.getElementById('reviewsCarousel');
    const reviewsPrevButton = document.getElementById('reviewsPrevButton');
    const reviewsNextButton = document.getElementById('reviewsNextButton');

    let currentIndex = 0;
    const totalItems = carousel.children.length;

    // Función para actualizar el desplazamiento del carrusel
    function updateCarousel() {
        const cardWidth = carousel.querySelector('.card').offsetWidth; // Obtén el ancho de una card
        const offset = -currentIndex * cardWidth; // Desplazamiento basado en el ancho de una card
        carousel.style.transform = `translateX(${offset}px)`; // Mueve el carrusel
        carousel.style.transition = 'transform 1s ease-in-out'; // Añadir transición más lenta
    }

    // Acción de ir a la imagen anterior
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Permite retroceder al inicio
        updateCarousel();
    });

    // Acción de ir a la imagen siguiente
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems; // Permite avanzar al final
        updateCarousel();
    });

    let currentModalIndex = 0;
    let modalImages = [];

    // Diccionario de fotos por cabaña
    const cabinPhotos = {
        'Cabaña Entusiasmo': [
            '/public/img/Entusiasmo/entusiasmo 2.jpg',
            '/public/img/Entusiasmo/entusiasmo 3.jpg', 
            '/public/img/Entusiasmo/entusiasmo 3.jpg', 
            '/public/img/Entusiasmo/entusiasmo 4.jpg',
            '/public/img/Entusiasmo/entusiasmo 5.jpg',
            '/public/img/Entusiasmo/entusiasmo 6.jpg',
            '/public/img/Entusiasmo/entusiasmo 7.jpg',
        ],
        'Cabaña Meditación': [
            '/public/img/Meditacion/meditacion (1).jpg',
            '/public/img/Meditacion/meditacion (2).jpg',
            '/public/img/Meditacion/meditacion (3).jpg',
            '/public/img/Meditacion/meditacion (4).jpg',
            '/public/img/Meditacion/meditacion (5).jpg',
            '/public/img/Meditacion/meditacion (6).jpg',

        ],
        'Cabaña Paciencia': [
            '/public/img/Paciencia/paciencia (1).jpg',
            '/public/img/Paciencia/paciencia (2).jpg',
            '/public/img/Paciencia/paciencia (3).jpg',
            '/public/img/Paciencia/paciencia (4).jpg',
            '/public/img/Paciencia/paciencia (5).jpg',
            '/public/img/Paciencia/paciencia (6).jpg',
        ],
        'Cabaña Sabiduría': [
            '/public/img/Sabiduria/sabiduria (1).jpg',
            '/public/img/Sabiduria/sabiduria (2).jpg',
            '/public/img/Sabiduria/sabiduria (3).jpg',
            '/public/img/Sabiduria/sabiduria (4).jpg',
            '/public/img/Sabiduria/sabiduria (5).jpg',
        ],
        'Cabaña Conducta': [
            '/public/img/cabana2.jpeg'
        ],
        'Cabaña Generosidad': [
            '/public/img/cabana5.jpeg'
        ]
    };

// Mostrar el modal con las fotos correspondientes
document.querySelectorAll('.card img').forEach((img) => {
    img.addEventListener('click', () => {
        const cabinName = img.alt; // Obtener el nombre de la cabaña del atributo alt
        modalImages = cabinPhotos[cabinName]; // Obtener las fotos de esa cabaña
        renderModalImages(); // Renderizar las imágenes en el carrusel
        document.getElementById('photoModal').classList.remove('hidden'); // Mostrar el modal
        currentModalIndex = 0; // Reiniciar el índice actual
        updateModalCarousel(); // Actualizar la posición inicial del carrusel
    });
});

// Renderizar las imágenes en el carrusel
function renderModalImages() {
    document.getElementById('modalCarouselInner').innerHTML = modalImages.map((src) => `
        <div class="flex-shrink-0">
            <img src="${src}" alt="Cabin Image" class="w-[200px] h-[300px] object-cover rounded-lg">
        </div>`).join('');
}

// Actualizar la posición del carrusel
function updateModalCarousel() {
    const offset = -currentModalIndex * 220; // Desplazamiento en píxeles (200px ancho + 20px gap)
    document.getElementById('modalCarouselInner').style.transform = `translateX(${offset}px)`;
}

// Botón "Anterior"
document.getElementById('modalPrev').addEventListener('click', () => {
    currentModalIndex = (currentModalIndex - 1 + modalImages.length) % modalImages.length;
    updateModalCarousel();
});

// Botón "Siguiente"
document.getElementById('modalNext').addEventListener('click', () => {
    currentModalIndex = (currentModalIndex + 1) % modalImages.length;
    updateModalCarousel();
});

// Cerrar el modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('photoModal').classList.add('hidden');
});

    
    let currentReviewIndex = 0;
    const totalReviewItems = reviewsCarousel.children[0].children.length;

    // Función para actualizar el desplazamiento del carrusel de reseñas
    function updateReviewsCarousel() {
        const cardWidth = reviewsCarousel.querySelector('.bg-white').offsetWidth; // Obtén el ancho de una card
        const offset = -currentReviewIndex * cardWidth; // Desplazamiento basado en el ancho de una card
        reviewsCarousel.children[0].style.transform = `translateX(${offset}px)`; // Mueve el carrusel
        reviewsCarousel.children[0].style.transition = 'transform 1s ease-in-out'; // Añadir transición más lenta
    }

    // Acción de ir a la reseña anterior
    reviewsPrevButton.addEventListener('click', () => {
        currentReviewIndex = (currentReviewIndex - 1 + totalReviewItems) % totalReviewItems; // Permite retroceder al inicio
        updateReviewsCarousel();
    });

    // Acción de ir a la reseña siguiente
    reviewsNextButton.addEventListener('click', () => {
        currentReviewIndex = (currentReviewIndex + 1) % totalReviewItems; // Permite avanzar al final
        updateReviewsCarousel();
    });

    // Inicializar carrusel de reseñas
    updateReviewsCarousel();
});