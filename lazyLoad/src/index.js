import { registerImage } from "./lazyloading";

const API = 'https://randomfox.ca';
const app = document.querySelector('#app');
const addButton = document.querySelector('.add-image');
const clearButton = document.querySelector('.clear');

const min = 1;
const max = 123;
window.addedImages = 0;
window.showedImages = 0;

window.showEvents = () =>{
    console.group('Eventos');
    console.log(`Added Images: ${addedImages}`);
    console.log(`Showed Images: ${showedImages}`);
    console.groupEnd();
}

//crear imagenes
const imageNode = async () => {
    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    const src = `${API}/images/${rand}.jpg`;

    const container = document.createElement('div');
    container.className = 'p-4';

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto rounded-lg';
    imagen.width = '320';
    imagen.height = '320';
    imagen.style.background = '#ccc';
    imagen.dataset.src = src;

    container.append(imagen);

    return container;
}


const addImage = async () => {
    const newImage = await imageNode();
    //agregar imagenes al app
    app.append(newImage);
    registerImage(newImage);
    addedImages++;
    showEvents();
}

const clearImage = () => {
    const childs = app.querySelectorAll('div');
    const nodos = [...childs];
    nodos.forEach(nodo =>{
        nodo.remove();
    })
    addedImages = 0;
    showedImages = 0;
    console.clear();
}

addButton.addEventListener('click', addImage);
clearButton.addEventListener('click', clearImage);







