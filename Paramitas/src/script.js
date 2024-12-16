document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('photoModal');
    const modalCarouselInner = document.getElementById('modalCarouselInner');
    const closeModal = document.getElementById('closeModal');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    const carousel = document.getElementById('carousel');

    let currentIndex = 0;
    const totalItems = carousel.children.length;

    // Función para actualizar el desplazamiento del carrusel
    function updateCarousel() {
        const offset = -currentIndex * 100; // Ajuste para mover el carrusel (en porcentaje)
        carousel.style.transform = `translateX(${offset}%)`; // Mueve el carrusel
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
        'Cabaña Serenidad': ['https://raw.githubusercontent.com/macaequipo/Paramitas/main/Paramitas/public/img/cabana1-1.jpeg', 'https://raw.githubusercontent.com/macaequipo/Paramitas/main/Paramitas/public/img/cabana1-2.jpeg', 'https://raw.githubusercontent.com/macaequipo/Paramitas/main/Paramitas/public/img/cabana1-3.jpeg'],
        'Cabaña Paz': ['/img/cabana2-1.jpeg', 'img/cabana2-2.jpeg', '/img/cabana2-3.jpeg'],
        'Cabaña Armonía': ['/img/cabana3-1.jpeg', '/img/cabana3-2.jpeg', '/img/cabana3-3.jpeg'],
    };

    // Mostrar el modal con las fotos correspondientes
    document.querySelectorAll('.card img').forEach((img) => {
        img.addEventListener('click', () => {
            const cabinName = img.alt;
            modalImages = cabinPhotos[cabinName];
            currentModalIndex = 0;

            if (modalImages) {
                renderModalImages();
                modal.classList.remove('hidden');
                updateModalCarousel();
            }
        });
    });

    // Renderizar las imágenes en el carrusel del modal
    function renderModalImages() {
        modalCarouselInner.innerHTML = modalImages
            .map(
                (src) => `
                <div class="flex-shrink-0 w-full">
                    <img src="${src}" alt="Foto de cabaña" class="w-full h-60 object-cover rounded-lg">
                </div>`
            )
            .join('');
    }

    // Actualizar la posición del carrusel del modal
    function updateModalCarousel() {
        const offset = -currentModalIndex * 100; // Desplazamiento en porcentaje
        modalCarouselInner.style.transform = `translateX(${offset}%)`;
    }

    // Navegar a la foto anterior en el modal
    modalPrev.addEventListener('click', () => {
        currentModalIndex = (currentModalIndex - 1 + modalImages.length) % modalImages.length;
        updateModalCarousel();
    });

    // Navegar a la foto siguiente en el modal
    modalNext.addEventListener('click', () => {
        currentModalIndex = (currentModalIndex + 1) % modalImages.length;
        updateModalCarousel();
    });

    // Función para mover el carrusel hacia atrás (prevButton)
    prevButton.addEventListener('click', () => {
        currentModalIndex = (currentModalIndex - 1 + modalImages.length) % modalImages.length;
        updateModalCarousel();
    });

    // Función para mover el carrusel hacia adelante (nextButton)
    nextButton.addEventListener('click', () => {
        currentModalIndex = (currentModalIndex + 1) % modalImages.length;
        updateModalCarousel();
    });

    // Cerrar el modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modalCarouselInner.innerHTML = ''; // Limpiar las imágenes al cerrar
    });
});
