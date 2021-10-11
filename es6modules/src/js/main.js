// экспортируем переменыне
// 1
export let one = 1;
export let reName = 3;
// 2
let two = 2;
export {two};

// экспортируем функции 
export function sayHi() {
    console.log('Hi');
}

// экспорт по умолчанию
// должен быть только один
export default function sayBye() {
    console.log('Bye');
}