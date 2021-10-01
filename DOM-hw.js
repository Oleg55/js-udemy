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