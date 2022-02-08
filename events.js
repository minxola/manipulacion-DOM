/*
addEventListener
*/
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

/*
removeEventListener()
*/
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
