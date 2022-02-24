let addedImages = 0;
let showedImages = 0;

let showEvents = () =>{
    console.group('%c Info:', 'color: SlateBlue');
    console.log(`%c Added Images: ${addedImages}`, 'color: gold');
    console.log(`%c Showed Images: ${showedImages}`, 'color: MediumSpringGreen');
    console.groupEnd();
}

const isIntersecting = (entry) => {
    return entry.isIntersecting //true si esta dentro de la pantalla
}

const cargarImagen = (entry) => {
    const container = entry.target;
    //se puede usar container.querySelector('img');
    const imagen = container.firstChild;
    imagen.style.background = '#ccc';
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

export const clearImage = () => {
    const childs = app.querySelectorAll('div');
    const nodos = [...childs];
    nodos.forEach(nodo =>{
        nodo.remove();
    })
    addedImages = 0;
    showedImages = 0;
    console.clear();
}

export const registerImage = (image) => {
    //intersection observer -> observe(image)
    observer.observe(image);
    addedImages++;
    showEvents();
}

