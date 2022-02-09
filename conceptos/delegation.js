const app = document.querySelector('#app');

const delegation = (event) => {
    if(event.target.nodeName === 'H4'){
        alert('Elige tu producto');
    }
}

app.addEventListener('click', delegation)

/*
Se agrega el eventListener al un nodo padre, y por medio
de una condicional usando el 'event', elegimos que se realice
cierta acción solo si se hace click en el título del producto

Hay que tener en cuenta que el evento siempre se escucha
sin embargo las acciones del evento que se deben realizar
solo será posible si se cumple la condicional.
*/