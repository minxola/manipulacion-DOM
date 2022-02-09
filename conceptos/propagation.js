//obteniendo los elementos de DOM
const abuelo = document.querySelector('#abuelo');
const padre = document.querySelector('#padre');
const hijo = document.querySelector('#hijo');

const resultado = document.querySelector('#resultado');

//función que ejecuta el eventListener
const accion = (evento) => {
    evento.stopPropagation();
    console.log(evento.currentTarget.nodeName);
}
//Si no se agrega el stopPropagation(), al hacer clic
//en el hijo también se dispararía el evento en el padre y 
//el abuelo.

//creación de los evetListeners
abuelo.addEventListener('click', accion);
padre.addEventListener('click', accion);
hijo.addEventListener('click', accion);