// получаем все узлы в body (yзел != элемент)
console.log(document.body.childNodes);

// получаем первый элемент в body (узел)
console.log(document.body.firstChild);

// получаем последний элемент в body (узел)
console.log(document.body.lastChild);

// получаем родителя (узел)
console.log(document.querySelector('#box').parentNode);

// получаем родителя родителя (узел)
console.log(document.querySelector('#box').parentNode.parentNode);



// DATA атрибуты
// получаем ноду после data-current="3"
// получим перенос
console.log(document.querySelector('[data-current="3"]').nextSibling);

// получаем ноду перед data-current="3" 
// получим перенос 
console.log(document.querySelector('[data-current="3"]').previousSibling);

// получаем элемент после data-current="3" 
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// получаем элемент перед data-current="3"  
console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// получаем родителя (элемент)
console.log(document.querySelector('#box').parentElement);

// получаем первый элемент в body (элемент)
console.log(document.body.firstElementChild);

// получаем последний элемент в body (элемент)
console.log(document.body.lastElementChild);

// получаем все элементы в body (нет аналога childNodes нужно перебором)

for ( let node of document.body.childNodes ) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}


// ClassList и делегирование событий 
const btns = document.querySelectorAll('button');
// кол-во классов у элемента
console.log(btns[0].classList.length);

// получаем класс под нулевым индексом
console.log(btns[0].classList.item(0));

// добавляем класс
// несколько классов можно передавать черз запятую
console.log(btns[0].classList.add('red'));
console.log(btns[0].classList.add('yellow', 'green', 'blue'));

// удаляем класс
console.log(btns[0].classList.remove('raz'));

// toggle если класса нет то добавляем, если есть то убираем
console.log(btns[0].classList.toggle('raz'));

// проверка наличия класса на определенном элементе
// вернет true/false
if (btns[0].classList.contains('blue')) {
    console.log('blue');
}

// Делегирование событий
const wrapper = document.querySelector('.btn-wrapper');

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('hi');
    }
});
// более продвинутый вариант через matches
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('hi2');
    }
});

const btn = document.createElement('button');
btn.innerHTML = '7';
wrapper.append(btn);