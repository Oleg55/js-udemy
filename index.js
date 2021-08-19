// callback func - функция которая должна быть выполнена после того как другая 
// функция завершила свое выполнение 
// lesson 19

function lernJS(lang, callback) {
   console.log(`I lern: ${lang}`);
   callback(); 
}

function done() {
    console.log('I finish this lesson!');
}

lernJS('JavaScript', done); // передаем без груглых скобок

// lesson 20

// objects and destruct

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Method makeTest og object options");
    }
}
// получаем выполнение метода makeTest
options.makeTest();
// получаем значение name
console.log(options.name);

// удаление елемента из обьекта по ключу
// delete options.name; 
console.log(options);

// перебор обьекта
for (let key in options) {
    if(typeof(options[key])=== 'object') {
        for (let i in options[key]) {
            console.log(`Свойство(i) ${i} значение(options[key][i]) ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство(key) ${key} значение(options[key]) ${options[key]}`);
    }
}

// популярный методы обьекты
console.log(Object.keys(options));
// популярный способ получить длинну обьекта по первой вложенности
console.log(Object.keys(options).length);

// деструктуризация обьекта - достаем переменные из обьекта
const { border, bg } = options.colors;
console.log( border, bg );

// lesson 21

// массивы и методы
const arr = [ 1, 2, 13 , 4, 15, 6 ];
arr[99] = 0;
// свойство length берет индекс последнего элемена + 1 
// в нашем случае выведет длинну 100 хотя элеметов будет 7
console.log(arr.length);
// удаление элемента с конца массива 
arr.pop();
console.log(arr);

// добавление в конец массива
arr.push(10);
console.log(arr);

// так же есть удаление добавление в начало массива
// но их редко используют так как изменяюется вся нумерация ключей массива из-за сдвига

// переборы массива

// циклом for (но это старый способ)
for ( let i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}

// конструкция for of
// можно использовать breack и continue
for (let randomName of arr) {
    console.log(randomName);
}

// метод массива forEach его можно более удобно настроить чем 
// предыдущие 2
// forEach не меняет сам массив просто перебирает!
// может принимать в себя 3 аргумента
// 1 - это тот элемент который  мы перебирам (название любое)
// 2 - номер по порядку (index "название тоже может быть любое")
// 3 - ссылка на массив который мы перебираем (arr "тут название массива")
// все аргументы находятся в так называемой callback функции в нашем случе стрелочной

arr.forEach( (item, index, arr) => {
    console.log(`${index}: ${item} from array ${arr}`);
})

// методы для изменения массива
// arr.map
// arr.every/some
// arr.filter
// arr.reduce

// метод разбития строки на массив split
const str = 'brr1, arr2, crr3, grr4, prr5';
// если сплит оставить пустым то по умолчанию будет запятая
// в сплит можно указывать любой разделитель
const arrFromStr = str.split(",");
console.log(arrFromStr);

// метод сортировки
// сортирует элементы как строки
console.log(arrFromStr.sort());
// пример с числами и sort
const arr2 = [ 1, 2, 13 , 4, 15, 6 ];
console.log(arr2.sort());
// результат [ 1, 10, 13, 15, 2, 4, 6, <93 empty items> ]
// этого мы можем избежать передав функцию в sort
console.log(arr2.sort(compareNum)); // это работает из за алгоритма работы sort()
function compareNum( a, b ) {
    return a - b;
}

// метод обьеденения массива в строку join
// разделитель также можно указать
console.log(arrFromStr.join(";"));

// псевдо массивы отличаются от обычных тем что у них нет методов



