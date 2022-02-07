//the main element from document
const main = document.querySelector('#main');

const title = 'DOM Manipulation';
const header = document.createElement('header');
const article = document.createElement('article');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const text = document.createTextNode('lorem ipsun dolor et amet etecetera');

main.append(header, article);

const generator = () =>{
    p.append(text);
    article.append(h1);
    h1.append(title);
    article.append(p);
    article.setAttribute('class', 'article');
}

generator();

//Eliminar
const padre = p.parentElement;
padre.removeChild(p);//p es eliminado

h1.remove(); //elimina h1

generator();

const parentElement = document.querySelector('#main');
console.log(parentElement);

const toReplace = document.querySelector('header');

const newNode = document.createElement('input');
newNode.setAttribute('type', 'text');

parentElement.replaceChild(newNode, toReplace);


//Agregar nodos en lote: 10 nodos input

//INEFICIENTE, 10 veces se manipula el DOM
for (let i = 0; i < 10; i++) {
    const node = document.createElement('input');
    node.setAttribute('type', 'text');
    node.setAttribute('placeholder', `Ineficient ${i}`);
    document.body.appendChild(node);
};

//EFICIENTE, solo se modifica el DOM una vez
const nodos = [];
for (let i = 0; i < 10; i++){
    const node = document.createElement('input');
    node.setAttribute('type', 'submit');
    node.setAttribute('value', `Eficient ${i}`)
    nodos.push(node);
}

document.body.append(...nodos);

//Tener en cuenta que el spread operator pasa cada elemento
//de un array o un objeto de manera individual hacía otro elemento