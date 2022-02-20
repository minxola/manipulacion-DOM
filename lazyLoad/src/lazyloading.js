const isIntersecting = (entry) => {
    return entry.isIntersecting //true si esta dentro de la pantalla
}

const cargarImagen = (entry) => {
    const container = entry.target;
    //se puede usar container.querySelector('img');
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //load image
    imagen.src = url;
    //unobserve
    showedImages++;
    showEvents();
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(cargarImagen)
});

export const registerImage = (image) => {
    //intersection observer -> observe(image)
    observer.observe(image);
}

