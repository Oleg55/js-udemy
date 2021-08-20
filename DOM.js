// DOM - обьектная модель документа

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
// получим псевдо массив называемый HTMLCollection
console.log(btns);
// так получим конкретную одну кнопку без псевдомассива и сможем с ней рабоать
console.log(btns[1]);

const circle = document.getElementsByClassName('circle');
console.log(circle);

// более новый способ обращения к элементам на странице

// querySelectorAll() поддерживает все варианты id, class, tag и т.д.
// https://learn.javascript.ru/css-selectors
const hearts = document.querySelectorAll('.heart');
// получим псевдо массив называемый NodeList
// в котором есть как минимум метод forEach
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});
// querySelector получаем сразу только один первый элемент
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);