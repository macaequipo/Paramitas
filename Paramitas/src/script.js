document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('photoModal');
    const modalCarouselInner = document.getElementById('modalCarouselInner');
    const closeModal = document.getElementById('closeModal');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    let currentModalIndex = 0;
    let modalImages = [];

    // Diccionario de fotos por cabaña
    const cabinPhotos = {
        'Cabaña Serenidad': ['/img/cabana1-1.jpeg', '/img/cabana1-2.jpeg', '/img/cabana1-3.jpeg'],
        'Cabaña Paz': ['/img/cabana2-1.jpeg', '/img/cabana2-2.jpeg', '/img/cabana2-3.jpeg'],
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

    // Navegar a la foto anterior
    modalPrev.addEventListener('click', () => {
        currentModalIndex = (currentModalIndex - 1 + modalImages.length) % modalImages.length;
        updateModalCarousel();
    });

    // Navegar a la foto siguiente
    modalNext.addEventListener('click', () => {
        currentModalIndex = (currentModalIndex + 1) % modalImages.length;
        updateModalCarousel();
    });

    // Cerrar el modal
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modalCarouselInner.innerHTML = ''; // Limpiar las imágenes al cerrar
    });
});
