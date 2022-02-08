const url_base = 'https://platzi-avo.vercel.app';
const URL_API = 'https://platzi-avo.vercel.app/api/avo';

//WEB API

//Conectarse al servidor
/* window
    .fetch(URL_API)
    //procesar la respuesta y convertir a JSON
    .then((response) => response.json())
    //JSON --> Data --> Renderizar info en browser
    .then((dataJSON) => {
        const nodos = [];
        dataJSON.data.forEach((item) => {
            //crear titulo
            const title = document.createElement('h2');
            //crear imagen
            const image = document.createElement('img');
            //crear precio
            const price = document.createElement('span');

            const container = document.createElement('div');
            container.append(title, image, price);

            nodos.push(container);
        })

        document.body.append(...nodos);
    }) */

//contenedor para renderizar
const app = document.querySelector('#app');
app.className = 'mt-10 grid grid-cols-2 gap2';

//API Intl, de internacionalización para monedas y fechas
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

    return newPrice;
}

//Función de renderizar
const fetchData = async (url) => {
    //conectarse a la api
    const rawData = await fetch(url);
    //Convertir la respuesta a formato JSON
    const JSONData = await rawData.json();
    //nodos vacio
    const nodos = [];
    //Creacion de nodos
    JSONData.data.forEach((item) =>{
        //title
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = 'title text-xl font-bold';
        //img
        const image = document.createElement('img');
        image.src = `${url_base}${item.image}`;
        image.className = 'image';
        //price
        const price = document.createElement('span');
        price.textContent = formatPrice(item.price);
        price.className = 'price';
        //creación de nodo contenedor
        const container = document.createElement('div');
        container.append(title, image, price);
        container.className = 'avocado';
        //almacenar los nodos en el array nodos=[]
        nodos.push(container);
    })
    app.append(...nodos);
}

fetchData(URL_API);