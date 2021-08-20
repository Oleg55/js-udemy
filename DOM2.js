const box2 = document.getElementById('box'),
      btns2 = document.getElementsByTagName('button'),
      circle2 = document.getElementsByClassName('circle'),
      hearts2 = document.querySelectorAll('.heart'),
      oneHeart2 = document.querySelector('.heart'),
      heartWrapper = document.querySelector('.heart-wrapper');

box2.style.background = 'blue';
box2.style.width = 500 + 'px';
// запись нескольких стилей
box2.style.cssText = 'background: blue; width: 400px';
// запись нескольких стилей или так
const num = 20;
box2.style.cssText = `background: blue; width: ${num}px`;

// нужно точно указывть элемент
btns2[1].style.borderRadius = 100 + '%';
circle2[0].style.background = 'red';

// получение элементов циклом но так почти не делают
for (let i = 0; i < hearts2.length; i++) {
    hearts2[i].style.background = '#000000';
}
// вот правильный вариант 
// тут связка новых querySelectorAll в котором есть метод forEach
hearts2.forEach(item => {
    item.style.background = '#123123';
})

// основные методы для работы с элементами на странице
// генерация верстки с помощью JS
// так мы создадим элемент внутри JS но не выведем его на страницу
const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');


// const text = document.createTextNode('Тут был я'); используем редко
div.classList.add('black');
div2.classList.add('black');
div3.classList.add('black');
div4.classList.add('black');
div5.classList.add('black');
div6.classList.add('black');
div7.classList.add('black');


// добавляем элемент div в верстку странцы 
document.body.append(div); // в конец body внутри
// еще вариант добавления
document.querySelector('.heart-wrapper').append(div2)
// помещаем в начало родителя внутри его
heartWrapper.prepend(div3)
// помещаем перед элементом
hearts2[1].before(div4);
// помещаем полсе элемента 
hearts2[1].after(div5);
// удаление элемента
circle2[0].remove();
// замена одного элемента другим
hearts2[1].replaceWith(circle2[1]);



// устаревшие способы но мы их все равно можем встретить
// аналог append
heartWrapper.appendChild(div6);
// в начало родитедя(внутри) .insertBefore(что, куда)
heartWrapper.insertBefore(div7, hearts2[2]);
// удаляем в нутри родителя нужный элемент
heartWrapper.removeChild(hearts2[2])
// меняем местами в родителе replaceChild(что , на что меняем)
heartWrapper.replaceChild(circle2[0], hearts2[0])


// добаление текста и html  в элементы

// просто текст или вместе с HTML
div.innerHTML = '<h3>Hello innerHTML</h3>';
// только текст используется если данные мы получаем от пользователя 
// чтоб он не смог ввести теги и т.д.и не вставил сторонний скрипт
div2.textContent = 'Hello textContent';
// если хотим вставить кусок HTML перед после элемента
// beforebegin - перед элементом (снаружи)
div3.insertAdjacentHTML('beforebegin', '<h3>Hello Adj</h3>');
// afterbegin -  в начало элемента (внутри)
div4.insertAdjacentHTML('afterbegin', '<h3>Hello Adj2</h3>');
// beforeend -  в конец элемента (перед концом) (внутри)
div4.insertAdjacentHTML('beforeend', '<h3>Hello Adj2-2</h3>');
// afterend -  после элемента (снаружи)
div5.insertAdjacentHTML('afterend', '<h3>Hello Adj2-3</h3>');

// еще один вариант получения элемента
// указываем всесто document родителя в котором элемент
const heartWrapper2 = document.querySelector('.heart-wrapper'),
      hearts3 = heartWrapper2.querySelectorAll('.heart'),
      oneHeart3 = heartWrapper2.querySelector('.heart');
console.log(hearts3);
console.log(oneHeart3);

