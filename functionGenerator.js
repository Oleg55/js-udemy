// функция генерирует нам какойто резкльтат и делает это последовательно
// создаем функцию генератор

// один раз вызовим получим один результат
// второй раз вызовим получим другой результат
// за этот функционал отвечает ключевое слово yield
function* generator() {
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

// сылка на функцию generator в переменной str
const str = generator();

// для того чтобы вызвать следующьй шаг нашего генератора необходимо использовать встроенный метод next
// чтоб сразу получить S например str.next().value
console.log(str.next()); // { value: 'S', done: false } value - то что вернула функция; done - выполнился наш геннератор полностью или нет
console.log(str.next()); // { value: 'c', done: false }
console.log(str.next()); // { value: 'r', done: false }
console.log(str.next()); // { value: 'i', done: false }
console.log(str.next()); // { value: 'p', done: false }
console.log(str.next()); // { value: 't', done: false }
console.log(str.next()); // { value: undefined, done: true }

// пример 2 

function* count(n) {
    for (let i = 0; i < n; i++ ) {
        yield i;
    }
}

const counter = count(7);
console.log(counter.next().value); // 0 
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2

// функцию генератор можно перебрать с помощью for of

function* count2(n) {
    for (let i = 0; i < n; i++ ) {
        yield i;
    }
}
for (let k of count2(7)) { // 0 1 2 3 4 5 6
    console.log(k);
}