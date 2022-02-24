# Curso de Manipulación del DOM

Por: **Jonathan Alvarez** [@jonalvarezz](twitter.com/jonalvarezz)

## DOM y Web API

### 1. Y entonces nació internet

- Manipulación del DOM usando solo JavaScript (no frameworks)
- 3 Proyectos
- Node.JS
- [https://es.javascript.info/](https://es.javascript.info/) Información sobre JavaScript

### 2. Que es el DOM

Para llegar al DOM y CSSOM ocurre un proceso que se llama **El Camino Crítico de Renderización(Critical Rendering Path)** es la secuencia de pasos que el navegador realiza para convertir el HTML, CSS y JavaScript en píxeles en la pantalla.

Pasos que hace el motor del navegador:

- Procesa el HTML y construye el DOM
- Procesa CSS y construye el CSSOM
- Junta el DOM y el CSSOM en el Render Tree
- Ejecuta el diseño en el Render Tree
- Pinta el nodo en la pantalla

---

**DOM(Document Object Model):** no es mas que un árbol de nodos en el cual esta representado cada una de las etiquetas HTML que nosotros colocamos en nuestro proyecto.

- El DOM es un representación del HTML
- Estructura en forma de árbol
- Es un modelo que puede ser modificado

---

**CSSOM(CSS Object Model):** es un conjunto de APIs que permite manipular CSS desde JavaScript. Así como el DOM (Document Object Model) es para HTML, el CSSOM (CSS Object Model) es para CSS. Permite leer y modificar el estilo de CSS de forma dinámica.

### 3. Web APIs modernas

#### API

La expresión *Application Programming Interface* o en español, Interfaz de Programación de Aplicaciones, originó el acrónimo API. 

Las API son «traductores» cuya función es conectar sistemas, software y aplicaciones. Con las API es posible ofrecerle una experiencia de uso más familiar a las personas.

El propósito de una API es intercambiar datos entre diferentes sistemas, la mayoría de las veces estos intercambios de datos tienen como objetivo automatizar procesos manuales y/o permitir la creación de nuevas funcionalidades.

#### Web APIs

Actualmente existen mas de 70 Web APIs, el DOM es solo una de ellas. Estas APIs nos brindan métodos para trabajar diversos tipos de elementos de la web como animaciones, drag and drop, video/audio, etc.

¿Como lo uso? [developer.mozilla.org](developer.mozilla.org), información sobre el uso de Web APIs

¿Puedo usarlo? [caniuse.com](caniuse.com), implementación de APIs en navegadores.

Para manejar el DOM mediante JS se debe tomar en cuenta que estaremos usando una web API, cada vez que usemos una de ellas debemos tomar en cuenta dos preguntas de cómo usarlo y si se puede implementar en todos los navegadores o usuarios que deseemos llegar.

## Operaciones básicas

### 4. Leer nodos

Los principales métodos usados son `getElementById`, `getElementsByTagName` y `getElements.ByClassName`. Sin embargo no es muy recomendable usarlo en aplicaciones reales.

- `getElementById` devuelve `null` si no existe el ID.
- `getElementsByTagName` y `getElementsByClassName` nos devolverán un `HTMLCollection[]`. Si no existen los elementos nos devuelve una colección vacía.

```js
//getElementById -> por su id
parent.getElementById('id');

//getElementsByTagName -> por su etiqueta
parent.getElementsByTagName('tag-name');

//getElementsByClassName --> por su clase
parent.getElementsByClassName('class-name');
```

Es mucho mas conveniente usar `querySelector` y `querySelectorAll`. Acepta cualquier tipo de selector CSS.

- `querySelector()`, devuelve el primer elemento que encuentra.

```js
//querySelector -> por id, className, tagName, etc
parent.querySelector('#id'); //by ID
parent.querySelector('.className'); //by class name
parent.querySelector('tag-name'); //by tag name
```

- `querySelectorAll()`, devuelve todos los elementos que cumplen con la consulta.
- `querySelectorAll()`, devuelve un `NodeList[]`.

```js
//querySelectorAll() --> por className, tagName, etc
parent.querySelectorAll('.className'); //All with className
parent.querySelectorAll('tag-name'); //All with tag name
```

- Casi siempre el elemento **parent** o **padre** es `document`, ya que estamos haciendo referencia a todo el DOM.

### 5. NodeLists vs Array

`NodeList[]` no es un `Array`. Carece de los métodos que tienen los Arrays como por ejemplo `map()` y `filter()`. Por eso es muy conveniente convertir los *NodeList* a *Arrays*, para eso podemos usar el *spread operator*:

```js
//Almacenamos el NodeList en una variable
const myNodeList = document.querySelectorAll('div');

//Lo convertimos en array usando operador de propagación '...'
const myNodeListArray = [...myNodeList];

//Ahora que es un array ya podemos usar todos los métodos para trabajar ocn el.
```



### 6. Crear y Agregar

#### Crear elementos

Cuando creamos elementos, estos no se agregan al DOM, sino que quedan en memoria listos para ser agregados al DOM.

Para crear elementos podemos usar dos métodos: `createElement()` y `createTextNode()`.

```js
//Crando elementos
document.createElement('tag name'); //crea nodos HTML

//creando texto
document.createTextNode('Any text'); //crea nodos de texto
```

#### Agregar nodos

Existen diversas maneras de agregar nodos al DOM, entre los principales métodos tenemos

##### parentElement.appendChild()

Siempre agrega un nodo al final dentro del elemento padre.

```html
<div class='node'>
    <h1> Welcome!</h1>
</div>
```

Vamos a agregar un h2 y su contenido al HTML mostrado:

```js
//selección de div.node
const padre = document.querySelector('div.node');

//creación del elemento h2
const h2 = document.createElement('h2');

//creación del texto para h2
const texto = document.createTextNode('To my site');

//AGREGANDO NODOS
padre.appendChild(h2);
h2.appendChild(texto);
```

El resultado sería el siguiente, el nodo es agregado al final del contenido del elemento padre:

```html
<div class='node'>
    <h1> Welcome!</h1>
    <h2> To my site </h2>
</div>
```

##### parentElement.append()

- Es la evolución de *appendChild*
- Puedes agregar mas de un nodo
- Se le puede agregar texto
- No funciona adecuadamente en IE 11

```html
<div class='node'>
    <p>Texto</p>
</div>
```

Vamos a agregar elementos

```js
//seleccionando el elemento div.node
const parent = document.querySelector('div.node');

//Agregando elementos a parent
parent.append(document.createElement('div')), 'Esto es un texto');
```

El HTML quedaría así:

```html
<div class='node'>
    <p>Texto</p>
    <div></div>
    'Esto es un texto'
</div>
```

##### parentElement.insertBefore()

- Inserta un nodo antes del nodo de referencia como hijo de un nodo padre indicado.
- Tiene dos argumentos, primero se le pasa el nodo a agregar y luego la referencia.
- La referencia es hijo directo del nodo padre.

```html
<div class='main'>
    <span>This is text</span>
    <small>This is small text</small>
</div>
```

Como se usa:

```js
//seleccion de nodo padre
const parent = document.querySelector('.main');

//seleccion de referencia
const ref = document.querySelector('.main small');

//creacion del nodo a agregar
const nodo = document.createElement('div');

//Agregando nodo antes de la referencia
parent.insertBefore(nodo, ref);
```

El HTML quedaría así:

```html
<div class='main'>
    <span>This is text</span>
    <div></div>
    <small>This is small text</small>
</div>
```

##### parentElement.insertAdjacentElement()

- Es el método mas complicado, sin embargo da mucho mayo flexibilidad.
- Nos permite insertar un nodo, basándose en una referencia
- Como argumentos primero se debe pasar la posición: `beforebegin`, `afterbegin`, `beforeend` o `afterend` y luego pasar el nodo a insertar.

Veamos un ejemplo:

```html
<div class='main'>
    <span>This is text</span>
    <small>
        This is small text
    </small>
</div>
```

Agregando elementos:

```js
//creación del nodo a insertar
const nodo = document.craeteElement('img');

//selección de la referencia
const ref = document.querySelector('small');

//Agregando elementos
ref.insertAdjacentElement('beforebegin', nodo);
```

El HTML quedaría así:

```html
<div class='main'>
    <span>This is text</span>
    <img><!--beforebegin-->
    <small>
        <!--afterbegin-->
        This is small text
        <!--beforeend-->
    </small>
    	<!--afterend-->
</div>
```

### 7. Otras formas de agregar

Existen otras formas de leer y agregar nodos que son muy convenientes y fáciles de usar son:

- **node.outerHTML()**: para leer HTML. Devuelve como cadena de texto el HTML del elemento incluido su contenido.
- **node.innerHTML()**:
  - Leer contenido del elemento: `node.innerHTML` nos devuelve el contenido del elemento.
  - Modificar contenido: `node.innerHTML = 'new content'` modifica el contenido del elemento. El contenido puede ser texto o HTML. Se le debe pasar entre comillas.

La desventaja es que convierte el texto en HTML pudiendo crear problemas de seguridad como inyecciones de XSS.

Debido a que convierte todo el texto en HTML, habiendo la posibilidad de que se pueda inyectar códigos de terceros.

Si es que fuera muy necesario usar estos métodos y el usuario necesitara ingresar los datos, se debe hacer si o si un proceso de **sanitize** (Limpieza)

> Tip en consola de Chrome DevTools.
>
> - Seleccionar un elemento de HTML
> - Escribir en console `$0`
> - Esto devolverá el elemento seleccionado, similar a `document.querySelector()`
> - Es solo para uso en consola (experimentación)

Ejemplos de uso:

```html
<main>
    <article>
    	<h2>Titulo del articulo</h2>
        <p>Contenido del articulo</p>
    </article>
</main>
```

Leyendo y cambiando nodos:

```js
//seleccionar h2
const h2 = document.querySelector('h2');

//leer el nodo h2
h2.outerHTML; //<h2>Titulo del articulo</h2>

//leer el contenido de h2
h2.innerHTML; //Titulo del articulo

//cambiar el contenido de h2
h2.innerHTML = 'Titulo del <strong>articulo</strong>';
//Esto cambiaría el contenido de h2
```

Se debe tener cuidado al usar formularios cuando se obtiene el contenido escrito por un usuario usando estos métodos.

Por ejemplo si se permite el paso de HTML en un formulario, el usuario podría colocar:

`<span onclick="alert('hey you')">this is a text</span>`

Esto en un comentario dispararía un alert con el mensaje.

### 8. Atributos y propiedades

#### Atributos

En nuestro documento le podemos asignar atributos a cada elemento del DOM, ¿Pero que son los atributos? son valores adicionales que agregamos a las etiquetas para configurar o ajustar su comportamiento de muchas formas, con el fin de cumplir con los criterios que requieren los usuarios.

Con JavaScript podemos acceder a esos atributos definidos en el HTML, veamos un ejemplo de como podemos hacer esto, supongamos que tenemos un input que recibe el nombre completo de una persona

```jsx
// Nuestro input
<input class="form-control" 
       id="persona-nombre" 
       placeholder="Nombre completo" />

// Obtenemos el input
const input = document.querySelector("#persona-nombre");

// Obtenemos los atributos
input.className // salida: "form-control"
input.id // salida: "persona-nombre"
input.placeholder // salida: "Nombre completo"
```

Como vimos podemos acceder a cada atributo como lo hacemos cuando queremos obtener una propiedad en un objeto de javascript, con esto podemos verificar que valor esta tomando cada atributo. Si en el input escribimos texto desde el navegador, podemos acceder a ese valor a traves de `input.value`.

JavaScript cuenta además con otras métodos que permiten manipular los atributos de los nodos, estos son **`element.setAttribute(), element.getAttribute()`** y **`element.removeAttribute()`**. Veamos como funciona cada uno

- **element.setAttribute()**

  Este método establece el valor de un atributo en el elemento indicado, recibe dos argumentos, el primero de ellos un string donde se indica el nombre del atributo, y el segundo el valor que tomará dicho atributo. Es importante mencionar que si el atributo ya existe en el elemento, el valor será actualizado. supongamos que al input del ejemplo anterior queremos agregarle el atributo **name,** lo hacemos de la siguiente manera

  ```jsx
  input.setAttribute("name", "fullName");
  
  // Ahora el input quedará de la siguiente manera
  
  <input class="form-control" 
         id="persona-nombre" 
         placeholder="Nombre completo" 
  			 name="fullName" />
  ```

- **element.getAttribute()**

  Este método retorna el valor del atributo especificado en el elemento. Si el atributo al que se hace referencia no esta definido en el elemento, el valor que retornará dicho método es null. Supongamos que queremos obtener el valor del atributo **name** agregado en el ejemplo anterior.

  ```jsx
  input.getAttribute("name"); // Salida: "fullName"
  ```

- **element.removeAttribute()**

  Este método elimina el atributo del elemento que lo invoca, con esto podemos quitar atributos que ya no necesitemos, supongamos que queremos eliminar el atributo **name** del input de los ejemplos anteriores, lo hacemos de la siguiente forma

  ```jsx
  input.removeAttribute("name");
  
  // input final
  <input class="form-control" 
         id="persona-nombre" 
         placeholder="Nombre completo" />
  ```

#### Diferencia entre atributos y propiedades

- **Atributos**, son usados al principio para inicializar el HTML: type, class, ID, value, placeholder, etc.
- **Propiedades** son las que cambian, por ejemplo `id="myID"`, **myID** es lo que cambia y se puede modificar con JavaScript, es la propiedad.

### 9. Eliminar nodos

Hay tres métodos: `parent.removeChild()`, `document.remove()` y `document.replaceChild()`.

#### removeChild()

Se necesita elemento padre e hijo.

```jsx
<div>
    <article>...</article>
</div>

//eliminando nodos
const parent = document.querySelector('div');
const child = document.querySelector('article');

//eliminar nodo
parent.removeChild(child);

/*resultado
<div></div>
*/
```

#### remove()

Es la evolución de `removeChild()`

```jsx
<div>
	<article>...</article>
    <p>text</p>
</div>

//eliminando nodo p
const toDelete = document.querySelector('p');

toDelete.remove();

/*resultado
<div>
	<article>...</article>
</div>
*/
```

#### replaceChild

Reemplaza a un nodo por otro. Se necesita el elemento padre, hijo y el nuevo nodo.

```jsx
<div>
	<article class='main'>...</article>
</div>

const padre = document.querySelector('div');
const hijoToReplace = document.querySelector('.main');
const newNode = document.createElement('img');

//reemplazando
padre.replaceChild(newNode, hijoToReplace);

/*resultado
<div>
	<img />
</div>
*/
```

#### replaceWith()

```js
const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "<div><span></span></div>"
```

### 10. Operaciones en lote

Hacer operaciones en el DOM tiene un costo de performance. Para ello la regla de oro es, que cuando trabajemos con el DOM intentemos reducir el número de operaciones. Específicamente; escribir, modificar y eliminar.

```js
//Agregar nodos en lote: 10 nodos input

//INEFICIENTE, 10 veces se manipula el DOM
for (let i = 0; i < 10; i++) {
    const node = document.createElement('input');
    node.setAttribute('type', 'text');
    node.setAttribute('placeholder', 'Ineficientent');
    console.log(node);
    document.body.appendChild(node);//DOM Manipulation x 10 veces
};

//EFICIENTE, solo se modifica el DOM una vez
const nodos = [];
for (let i = 0; i < 10; i++){
    const node = document.createElement('input');
    node.setAttribute('type', 'submit');
    node.setAttribute('value', 'Eficient')
    nodos.push(node);
}

document.body.append(...nodos);//DOM Manipulation x 1 vez
```

#### ¿Qué es el Spread Operator?

El **spread operator** trabaja con arreglos y objetos, cuando lo pasamos en la llamada a una función, lo que hará es deconstruir ese arreglo y lo pasará como parámetros individuales para la función… aquí un ejemplo para que me entiendas:

```js
function foo (a, b, c) {
	// code...
}

// La forma normal de llamarla sería:
foo (x, y, z);

// Pero, ¿qué pasa si tengo un arreglo que contiene esos 3 parámetros?
const params = [x, y, z]

//El spread operator deconstruye el arreglo colocando cada parametro en su lugar.
foo(...params);

// Eso sería equivalente a esto:
foo(params[0], params[1], params[2]);
```

Esto es muy útil cuando tenemos demasiados valores, recuerda, mientras menos modifiques el DOM, más eficiente será tu programa, y recordemos que tenemos a `append()` que nos permite insertar múltiples elementos en el DOM en una sola llamada, ¡aprovechémoslo!

## Workshop 1: Fetch

### 11. Presentación del proyecto

[Repositorio del proyecto](https://github.com/jonalvarezz/platzi-dom)

Entrar a la carpeta **workshop-fetch**.

[Api de avocado](https://platzi-avo.vercel.app/api/avo), nos muestra un archivo json con los datos.

[TailWindCSS](https://tailwindcss.com/), para estilos

### 12. Descargando Información y creando nodos

Usando fetch para obtener la información:

```js
const URL_API = 'https://platzi-avo.vercel.app/api/avo';

//WEB API

//Conectarse al servidor
window
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
    })
```

Lo mismo se puede lograr con el uso de async/await:

```js
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
        //img
        const image = document.createElement('img');
        //price
        const price = document.createElement('span');
        //creación de nodo contenedor
        const container = document.createElement('div');
        container.append(title, image, price);
        //almacenar los nodos en el array nodos=[]
        nodos.push(container);
    })
    document.body.append(...nodos);
}

fetchData(URL_API);
```

### 13. Enriqueciendo la información

```js
const url_base = 'https://platzi-avo.vercel.app';
const URL_API = 'https://platzi-avo.vercel.app/api/avo';

//contenedor de la app
const app = document.querySelector('#app');

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
        //img
        const image = document.createElement('img');
        image.src = `${url_base}${item.image}`;
        //price
        const price = document.createElement('span');
        price.textContent = `Precio: ${item.price} USD`;
        //creación de nodo contenedor
        const container = document.createElement('div');
        container.append(title, image, price);
        //almacenar los nodos en el array nodos=[]
        nodos.push(container);
    })
    app.append(...nodos);
}

fetchData(URL_API);
```

### 14. Usando la API de internacionalización del browser

Esta API se usa para dar formato a **fechas** y dar formato a **monedas**.

```js
//.....
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
    	//...
        //price
        const price = document.createElement('span');
        price.textContent = formatPrice(item.price);//Intl
        price.className = 'price';
        //....
    })
    app.append(...nodos);
}

//...
```

### 15. Comparte el resultado

Subir el proyecto a GitHub y correr en GitHub Pages.

## Eventos

### 16. Reaccionar a lo que sucede en el DOM

[Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events): referencia de los tipos de eventos

[Propiedades de elementos](https://developer.mozilla.org/en-US/docs/Web/API/Element#focus_events): donde se muestran algunos eventos.

Para hacer mas interactiva una aplicación podemos utilizar eventos. Para trabajar con eventos tenemos `node.addEventListener()` y `node.removeEventListener()`.

#### addEventListener

`addEventListener()` Registra un evento a un objeto en específico. El **objeto específico** puede ser un elemento, el document, una ventana o un XMLHttpRequest.

Para crear mas de un *eventListener* se puede llamar a `addEventListener()` para el mismo elemento pero con diferentes tipos de eventos.

- Permite agregar mas de un *Listener* a un solo *Evento*.
- Funciona en cualquier elemento del DOM, no solo elementos HTML.

***Sintaxis***:

```js
addEventListener(type, listener);
addEventListener(type, listener, options);
addEventListener(type, listener, useCapture);
//Type: tipo de evento (click, keypress, input, etc)
//Listener: function callback que se ejecuta al producirse el evento
```

```js
const title = document.querySelector('#company-website');
title.addEventListener('click', action);

function action (event){
    console.log('action');//event actions
}

title.addEventListener('focus', (i) => {
    console.log('focusing');//event actions
    console.log(i);//event properties
})

const doThis = (evento) => {
    console.log(evento.data);//data of event
}

title.addEventListener('input', doThis);
```

> Al colocar el **callback function** al *Event Listener* solo se debe hacer referencia a la función con su nombre sin paréntesis, ya que si se coloca paréntesis esta función se ejecutará inmediatamente y no espera el evento.
>
> ```js
> node.addEventListener('click', myListener);
> 
> const myListener = () => {console.log('I am a listener')}
> ```

#### removeEventListener

Nos permite eliminar un *Evento* particular de un nodo. Para poder usar *removeEventListener* la acción del evento o *callback function* debe tener un nombre, de caso contrario no se podrá eliminar.

```js
//No se puede eliminar con removeEventListener
title.addEventListener('focus', (i) => {
    console.log('focusing');//event actions
    console.log(i);//event properties
})
```

Forma básica de como eliminar eventos:

```js
const labelAbout = document.querySelector('.label-about');

//actions
const action1 = () => {
    console.log('Action 1');
}

const action2 = () => {
    console.log('action 2');
}

labelAbout.addEventListener('click', action1);
labelAbout.addEventListener('click', action2);

//remove action2
labelAbout.removeEventListener('click', action2);
```

### 17. Event propagation

**Bubbling** es la forma en que se propaga desde lo más bajo hasta lo más alto en los elementos de DOM.

- El DOM es un árbol que renderiza nodos de forma jerárquica
  - Cuando un evento sucede se propaga a lo largo de ese nodo
- Los eventos suceden desde el elemento más interno hacia afuera
  - Propagándose entre cada padre que tiene el elemento escuchado
- Si deseamos borrar este comportamiento podemos usar el parámetro de evento

```jsx
node.addEventListener("click", (event) => {
	event.stopPropagation()
	// Acciones del evento
});
```

- Se debe tener cuidado con este tipo de operaciones por que puede existir códigos de otras personas o de librerías que necesiten este tipo de eventos
- Por lo general se debería dejar que los eventos fluyan por su ruta

**RESUMEN:** Cuando se tiene eventos estos pueden flotar desde el más específico hasta el más grande, si se desea quitar este comportamiento se puede usar el método del parámetro del evento `stopPropagation` por lo general no es necesario usar este método

### 18. Event Delegation

- La idea principal es delegar un evento global a un solo nodo y desde esa parte poder delegar todos los eventos que sucedan
- Se debe usar cuando el número de escuchadores es alto
- Se trata de identificar de donde proviene el evento, según a ello se lo captura con un condicional y se procede a realizar las operaciones

**RESUMEN: ** **Event delegation** consiste en delegar a un solo padre (el padre) el manejo/escucha de los eventos que nos interesan, de esta manera tendremos un único eventListener en lugar de tener uno por cada elemento lo cual puede impactar en el rendimiento de nuestro sitio web cuando son muchos eventListeners.
Si deseamos manejar la interacción solo sobre un elemento específico dentro del nodo padre, solo se debe especificar dentro de la función, para esto se puede usar la información provista por el evento (event).

```html
HTMLcopy
<main class="app">
    <div class="producto">
        <h4>
            Title
        </h4>
        <img src="image.png">
    </div>
</main>
```

Haciendo la delegación de eventos al nodo con **ID=app**.

```js
JScopy
const app = document.querySelector('#app');

const delegation = (event) => {
    if(event.target.nodeName === 'H4'){
        alert('Elige tu producto');
    }
}

app.addEventListener('click', delegation)

```

Hay que tener en cuenta que el evento siempre se escucha sin embargo las acciones del evento que se deben realizar solo será posible si se cumple la condicional.

## Workshop 2: Lazy loading

### 19. Presentación del proyecto

Vamos a crear una página que muestra imágenes pero solo al momento de que son visibles. Para lograr esto usaremos lo que se le llama *Lazy Loading* o *carga perezosa*, es una técnica avanzada de manipulación del *Document Object Model*, que se realiza usando JavaScript.

[Link del proyecto Lazy Loading](https://github.com/jonalvarezz/platzi-dom/tree/main/workshop-lazy-loading)

API a utilizar: [Random Fox](https://randomfox.ca/)

### 20. Nuestro propio plugin Lazy Loading

### 21. Creando las imágenes con JavaScript

### 22. Intersection Observer

La API Observador de Intersección provee una vía asíncrona para observar cambios en la intersección de un elemento con un elemento ancestro o con el [viewport](https://developer.mozilla.org/es/docs/Glossary/Viewport) del documento de nivel superior.

La API Intersection Observer le permite configurar una función callback que es llamada cuando alguna de las siguientes circunstancias ocurren:

- Un elemento **target** intersecta ya sea al **viewport** del dispositivo o un **elemento especificado**. Ese elemento especificado es llamado el **elemento root** o **root** a los propósitos de la API Intersection Observer.
- La primera vez que se pide inicialmente al observador que observe un elemento target.

### [Creando un intersection observer](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API#creando_un_intersection_observer)

Cree el intersection observer llamando a su constructor y pasándole una función callback para que se ejecute cuando se cruce un umbral (threshold) en una u otra dirección:

```
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
```

Copy to Clipboard

Un umbral de 1.0 significa que cuando el 100% del elemento target está visible dentro del elemento especificado por la opción `root`, la función callback es invocada.

#### Opciones de Intersection observer

El objeto `options` pasado al constructor [`IntersectionObserver()` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) le deja controlar las circunstancias bajo las cuales la función callback es invocada. Tiene los siguientes campos:

- `root`

  El elemento que es usado como viewport para comprobar la visibilidad de elemento target. Debe ser ancestro de target. Por defecto es el viewport del navegador si no se especifica o si es `null`.

- `rootMargin` 

  Margen alrededor del elemento root. Puede tener valores similares a los de CSS [`margin`](https://developer.mozilla.org/es/docs/Web/CSS/margin) property, e.g. "`10px 20px 30px 40px"` (top, right, bottom, left). Los valores pueden ser porcentajes. Este conjunto de valores sirve para aumentar o encoger cada lado del cuadro delimitador del elemento root antes de calcular las intersecciones. Por defecto son todos cero.

- `threshold`

  Es un número o un array de números que indican a que porcentaje de visibilidad del elemento target, la función callback del observer debería ser ejecutada. Si usted quiere que se detecte cuando la visibilidad pasa la marca del 50%, debería usar un valor de 0.5. Si quiere ejecutar la función callback cada vez que la visibilidad pase otro 25%, usted debería especificar el array [0, 0.25, 0.5, 0.75, 1]. El valor por defecto es 0 (lo que significa que tan pronto como un píxel sea visible, la función callback será ejecutada). Un valor de 1.0 significa que el umbral no se considera pasado hasta que todos los pixels son visibles.

#### Determinando un elemento para ser observado

Una vez usted ha creado el observer, necesita darle un elemento target para observar:

```
var target = document.querySelector('#listItem');
observer.observe(target);

// el callback que indicamos al observador será ejecutado ahora por primera vez
// espera hasta que le asignemos un target a nuestro observador (aún si el target no está actualmente visible)
```

Copy to Clipboard

Cuando el elemento target encuentra un threshold especificado por el `IntersectionObserver`, la función callback es invocada. La función callback recibe una lista de objetos [`IntersectionObserverEntry` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) y el observer:

```
var callback = function(entries, observer) {
  entries.forEach(entry => {
    // Cada entry describe un cambio en la intersección para
    // un elemento observado
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

Copy to Clipboard

Asegúrese de que su función callback se ejecute sobre el hilo principal. Debería operar tan rápidamente como sea posible; si alguna cosa necesita tiempo extra para ser realizada, use [`Window.requestIdleCallback()`](https://developer.mozilla.org/es/docs/Web/API/Window/requestIdleCallback).

También, note que si especifica la opción `root`, el elemento target debe ser un descendiente del elemento root.

### 23. Aplicando Lazy Loading

Los atributos `data-anything` sirven para definir **atributos personalizados** dentro de HTML, es decir, podemos crear atributos propios, son muy útiles para pasar datos entre HTML y JavaScript, su sintaxis consta en que **SIEMPRE** deben iniciar con `data-` y después de eso puedes poner cualquier cosa: `data-miAtributo`, y se pueden usar de esta manera:

```html
<div id="myDiv" data-miAtributo="atributo1" data-otroAtributo="atributo2">
	<!--Content here...-->
</div>
```

La forma de acceder a estos elementos desde JavaScript es mediante la propiedad `dataset`, esta propiedad contiene la lista de todos los atributos personalizados que le pusiste a tu elemento:

```js
const atri1 = myDiv.dataset.miAtributo; // atributo1
const atri2 = myDiv.dataset.otroAtributo; //atributo2
```

### 24. Comparte el resultado

Compartir el resultado obtenido sobre el workshop Lazy loading

## Workshop 3

### 25. Proyectos propuestos

- Reproductor de video

  - Play, pausa, mute, volume

- Aplicación del clima

  - API: openweathermap.org

  - Eventos: submit, imput, click

## Librerías relacionadas

### 26. jQuery

JQuery es una librería de JavaScript que nos ayuda a manipular el DOM, sin embargo muchas de sus funcionalidades ya han sido incorporadas a los navegadores modernos. Fue muy útil en su momento, sin embargo ahora ya no es necesario incluirlo en los proyectos, a menos que el proyecto web vaya dirigido a usuarios que usan navegadores desfasados.

### 27. JSX

Es html dentro de JavaScript. Es usado por React.js y otras librerías.

## Conclusiones

### 28. Conclusiones

**Ahora sabes:**

- Reflexionar sobre el impacto de la API de DOM moderna y la relación con otras librerías como jQuery, Hyperscript y JSX.
- Utilizar la API del DOM para crear patrones avanzados de optimización en carga de imágenes.
- Explorar cómo funcionan los Eventos en el DOM y utilizarlos para hacer una página interactiva.
- Aprender nuevos métodos y nuevas APIs para operar en el DOM, sus beneficios y desventajas.
- Dominar la API del DOM para leer, agregar, modificar y eliminar nodos.
- Comprender el concepto del DOM, su formación e importancia en la web.

**Fin del curso.** Aprobado