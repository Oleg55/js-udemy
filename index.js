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

// популярный методы
// возвращает массив имен перечисляемых свойств данного объекта, повторяемых в том же порядке, что и обычный цикл.
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


// lesson 22

// передача данных по ссылке и по значению

// через переменную
let a = 5,
    b = a;
b = b + 5;
console.log(b, a); // 10 и 5 все как и задумывали

// через обьект
const obj = {
    a: 1,
    b: 5
};
// тут мы передвем ссылку на obj  а не структуру как это у приметивных типов данных
// и мення copy мы меняем obj
const copy = obj; 

copy.a = 10;
console.log(copy);
console.log(obj);
// тут получим 
// { a: 10, b: 5 }
// { a: 10, b: 5 }

// функция для копирования обьекта без ссылки на него  1 способ 
// в нашем случае мы создали поверхностную копию 
// тоесть вложенные обьекты в новой копии будут передаваться по ссылке
function copy(mainObj) {
    let objCopy = {};

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 1,
    b: 2,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

// соединене обьекта с помощью функции Object.assign(куда, что)
const add = {
    d: 17,
    e: 20
};
const compareObj = Object.assign(numbers, add)
console.log(compareObj);

const add2 = {
    d: 17,
    e: 20
};

// копирование обьекта с помощью функции Object.assign({}, что)
const clone = Object.assign({}, add2);
clone.d = 21;
console.log(clone);
console.log(add2);

// копирование Массивов (массив частный случай обьекта) методом slice()
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'adcd';
console.log(newArray);
console.log(oldArray);

// вставка обьектов с помощью оператора спред ...obj
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'facebook'];
console.log(internet);

// разбиение массива на отдельные части с помощью оператора спред
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
console.log(...num);

// копирование обьектов(массивов) с помощью оператора спред
// массив
const arr1 = ['a', 'c'];
const newArr1 = [...arr1, 'z'];
console.log(newArr1);
console.log(arr1);
// обьект
const q = {
    one: 1,
    two: 2,
};
const newq = {...q};
console.log(newq);


// lesson 22
// ооп,  прототипно-ориентированное наследие

// пример со строкой
let str = 'some';
let strObj = new String(str);
console.log(typeof(str));
console.log(typeof(strObj));

// пример ооп на обьектах
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};
const jonh = {
    health: 200
};
// устаревший вариант через __proto__ в реальности не стоит использовать
// jonh.__proto__ = soldier;
// насдедовали свойсво armor
// jonh.armor

// новый вариан который сейчас нужно использоывть для наследования обьекта
// Object.setPrototypeOf(новый обьект, обьект от которого наследуемся)

Object.setPrototypeOf(jonh, soldier);
console.log(jonh);
console.log(jonh.armor);
jonh.sayHello();

// вариант наследования обьекта и работы с ним который примняется в реальности
// const jonh = Object.create(обьект от которого наследуем все свойства);
const soldierReal = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("HelloReal");
    }
};
const jonh = Object.create(soldierReal);
jonh.sayHello();

// lesson 24 in objects.js (практика по обьектам)

// lesson 25 дебагинг кода в консоле во вкладке Sources
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata
// так мы можем поставить breackpoint прямо в коде и потом дебыжить в консоле
debugger;

// lesson 26 
// динамическая типизация - это возможность преврвщать одит тип данных в другой
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata

// типы данных JS
// Простые 
// 1) Числа 1,2,3
// 2) Строки 'string'
// 3) Логический тип (Boolean) true/false
// 4) null
// 5) undefined
// 6) Symbol
// 7) BigInt
// 8) Обьекты: 
//     Спец обьекты:
//     массивы[],
//     функции functions,
//     Обьекты Даты,
//     Регулярные выражения,
//     Ошибки.

//     Обычный обьект.

// И для повторения типы фкёункция 
// 1) Function DECLARATION
// 2) Function EXSPRESSION
// 3) Стелочные функции

// to String
// вернет string
// 1)
console.log(typeof(String(null))); 
// 2)
console.log(typeof(5 + ''));
const fontSize = 25 + 'px';
 
// to Number
// 1)
console.log(typeof(Number('4')));
// 2)
console.log(typeof(+'4'));
// 3)
console.log(typeof(parseInt('15px', 10)));

// to boolean
// всегда false
// 0, '', null, undefined, NaN;
// 1)
let switcher = null;
if (switcher) {
    console.log('working...');
}
switcher = 1;
if (switcher) {
    console.log('done');
}
// 2)
console.log(typeof(Boolean('4')));
// 3)
console.log(typeof(!!'44444'));

// lesson 27
// файл sobesJobs
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata

// lesson 28
// работа с DOM получение элементов со страницы
// файд DOM
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata

// lesson 29
// действия с элементами на странице 
// файл DOM2
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata

// lesson 30
// задание на отработку дейсвий со странице
// файл DOM-hw
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata

// lesson 31
// addEventLisener
// но не нашел в архиве исходников так что только видео 
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata

// lesson 32
// Узлы/элементы/DATA атрибуты
// файл DOM-hw
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata

// lesson 33
// практика
// но не нашел в архиве исходников так что только видео 
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata

// lesson 34
// события на мобильных устройствах
// touch js

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata


// lesson 35
// Async, defer, динамические скрипты
// indexAsyncDeferDynamic
// https://coursehunter.net/course/polnyy-kurs-po-javascript-s-nulya-do-rezultata
