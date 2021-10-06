// обьяснения к свойствам на картинке
const box = document.querySelector('.box');
const btn = document.querySelector('.btn');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width);
console.log(height);

const widthO = box.offsetWidth;
const heightO = box.offsetHeight;

console.log(widthO);
console.log(heightO);

// полоса прокрутки не включается
const widthS = box.scrollWidth;
// полная высота с учетом всех прокруток
const heightS = box.scrollHeight;

console.log(widthS);
console.log(heightS);


btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

// scrollTop и scrollLeft можно модифицировать
// узнаем сколько мы проскролили в box
// 27 строку нужно закомментировать
btn.addEventListener('click', () => {
    console.log(box.scrollTop);
});

// координаты элемента
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

// получаем стили которые уже были применены к элементу (не инлайн)
// можно получить стили псевдоэлемента
const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);

// для получения кол-ва пиксилей которые пролистал пользователь на странице

console.log(document.documentElement.scrollTop);

// scrollBy

window.scrollBy(0, 400); // от текущего положения на 400 px вниз
window.scrollTo(0, 400); // на 400 px сверху
