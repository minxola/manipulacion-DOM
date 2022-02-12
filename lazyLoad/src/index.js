import { registerImage } from "./lazyloading";

const API = 'https://randomfox.ca/floof/';
const app = document.querySelector('#app');
const addButton = document.querySelector('button');

//crear imagenes
const imageNode = async () => {
    const raw = await fetch(API);
    const data = await raw.json();

    const container = document.createElement('div');
    container.className = 'p-4';

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src = data.image;

    container.append(imagen);

    return container;
}

const addImage = async () => {
    const newImage = await imageNode();
    //agregar imagenes al app
    app.append(newImage);
    registerImage(newImage);
}

addButton.addEventListener('click', addImage);








