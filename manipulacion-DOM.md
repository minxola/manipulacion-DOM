# Curso de Manipulación del DOM

Por: **Jonathan Alvarez** [@jonalvarezz](twitter.com/jonalvarezz)

## DOM y Web API

### 1. Y entonces nació internet

- Manipulación del DOM usando solo JavaScript (no frameworks)
- 3 Proyectos
- Node.JS
- [https://es.javascript.info/](https://es.javascript.info/) Información sobre JavaScript

### 2. Que es el DOM

Para llegar al DOMy CSSOM ocurre un proceso que se llama **El Camino Crítico de Renderización(Critical Rendering Path)** es la secuencia de pasos que el navegador realiza para convertir el HTML, CSS y JavaScript en píxeles en la pantalla.

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



### 7. Otras formas de agregar



### 8. Atributos y propiedades



### 9. Eliminar nodos

### 10. Operaciones en lote

## Workshop 1: Fetch

### 11. Presentación del proyecto

### 12. Descargando Información y creando nodos

### 13. Enriqueciendo la información

### 14. Usando la API de internacionalización del browser

### 15. Comparte el resultado

## Eventos

### 16. Reaccionar a lo que sucede en el DOM

### 17. Event propagation

### 18. Event Delegation

## Workshop 2: Lazy loading

### 19. Presentación del proyecto

### 20. Nuestro propio plugin Lazy Loading

### 21. Creando las imágenes con JavaScript

### 22. Intersection Observer

### 23. Aplicando Lazy Loading

### 24. Comparte el resultado

## Workshop 3

### 25. Proyectos propuestos

## Librerías relacionadas

### 26. jQuery

### 27. JSX

## Conclusiones

### 28. Conclusiones