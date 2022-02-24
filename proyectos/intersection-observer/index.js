const root = document.querySelector('#app');
let target = document.querySelectorAll('.target');
let targets = [...target];
let count = document.querySelector('.count');

let isIntersecting = (entry) => {
    return entry.isIntersecting;
}

let options = {
    root: root,
    rootMargin: '0px',
    threshold: 1.0
}
let num = 0;

let contar = (entries, observer) => {
    entries.filter(isIntersecting).forEach(entry =>{
            num++;
        count.textContent = num;
        observer.unobserve(entry.target);
    });
}

let observer = new IntersectionObserver(contar, options);


targets.forEach(elemento => {
    observer.observe(elemento);
});





