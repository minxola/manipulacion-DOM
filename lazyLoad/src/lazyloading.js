const isIntersecting = (entry) => {
    return entry.isIntersecting //true si esta dentro de la pantalla
}

const action = (entry) => {
    console.log(entry);
    const nodo = entry.target;
    console.log('Hello');
    observer.unobserve(nodo);
}

const observer = new IntersectionObserver((entries) => {
    console.log(entries[0]);
    entries
        .filter(isIntersecting)
        .forEach(action)
});

export const registerImage = (image) => {
    //intersection observer -> observe(image)
    observer.observe(image);
}

