// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// задача получить имена меньше 5 символов. Тоесть отфильтроваь (filter)

// обьявляем новый массив для записи в него результатов
const shortNames = names.filter((name) => {
    return name.length < 5; // возвращаем в новый массив shortNames только те элементы которые меньше 5
}); 
console.log(shortNames); // [ 'Ivan', 'Ann' ]

//-------------------------------------------------------------------------------------------------------


// map
// map позволяет трансформировать каждый элемент в массиве
// задача кажыдый элемент привести к нижнему 
const answers = ['IVan', 'AnnA', 'Hello'];
const result = answers.map(item => { // возвращаем в новый массив result
    return item.toLocaleLowerCase();
});
console.log(result); // [ 'ivan', 'anna', 'hello' ]

// не обязательно каждый раз создавать ноый массив можно перезаписать старый но нужно обьявить его через let
// но лучше все же создавать отдельную переменную
let answers2 = ['IVan', 'AnnA', 'Hello'];
answers2 = answers2.map(item => { // возвращаем в новый массив result
    return item.toLocaleLowerCase();
});
console.log(answers2); // [ 'ivan', 'anna', 'hello' ]

//-------------------------------------------------------------------------------------------------------

// every/some - возвращает булинновое значение (true/false)

// some
// some берет массив перебирает его, если хотябы 1 элемент соответствует условию то он вернет нам true
// если нет то false

const some = [4, 'sws', 'sgfsf'];
// задача проверить есть ли в нутри массива хотябы 1 число
const checkNumber = some.some((item) => {
    return typeof(item) === 'number';
});

console.log(checkNumber); // true (есть)

//-------------------------------------------------------------------------------------------------------

// every
// every - если все элементы в нутри нашего массива подходят под условие метод вернет true 
// в остальных случаях false
const every = [4, 'sws', 'sgfsf'];

const checkNumber2 = every.every((item) => {
    return typeof(item) === 'number';
});

console.log(checkNumber2); // false (нет таких элементов/ либо не все)

//-------------------------------------------------------------------------------------------------------

// reduce
// reduce - служит для того чтоб собирать массив в одно единое целое
// особенно касается числовых данных

const arr = [4, 5, 1, 3, 2, 6];
// задача получить сумму всех элементов
// sum - изначально равен 0 
// current - элемент массива на текущей итерации
// return sum + current - склыдываем 0 + 4
// на второй итерации sum = 4; current = 5
// и мы складываеи уже 4 + 5 и так далее до конца массива
// в res будет сумма всех элементов массива
const res = arr.reduce((sum, current) => {
    return sum + current;
});
console.log(res); // 21

// reduce может собрать массив со строками
const arrString = ['apple', 'pear', 'plum'];
const resStr = arrString.reduce((sum, current) => {
    return `${sum}, ${current}`;
})
console.log(resStr); // apple, pear, plum

// reduce может принимать еще один аргумент для задания начального значения
// sum = 20 изначально
const arr2 = [4, 5, 1, 3, 2, 6];
const res2 = arr2.reduce((sum, current) => {
    return sum + current;
}, 20);
console.log(res2); // 41
//-------------------------------------------------------------------------------------------------------

// Практический пример применения 
// задача получить имена тех людей которые находяться в этом обькте
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj); // получаем масив в нутри которого массив
console.log(newArr);
// [
//    [ 'ivan', 'persone' ],
//    [ 'ann', ' persone' ],
//    [ 'dog', 'animal' ],
//    [ 'cat', 'animal' ]
//  ]
const newArrFilter = newArr.filter((item) => {
    return item[1] === 'persone'; // отфильтровали по второму элементу массива persone
});
console.log(newArrFilter); // [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]

const takeNames = newArrFilter.map(item => {
    return item[0];
});

console.log(takeNames); // [ 'ivan', 'ann' ]

// все это можно сделать не создвавя каждый раз новые переменые под массивы
// а применить так называемый чейнинг (цепочку из команд)
const objC = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
const newArrC = Object.entries(objC)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArrC); // [ 'ivan', 'ann' ]