let x = 5;
console.log(x++); // 5
console.log(x);  // 6
console.log(++x); // 7
// ________________________
//
// [] будет пустой строкой
// boolean([]) // true
// строка + false  приведет к типу данных строка
console.log([] + false); // 'false'
console.log(typeof([] + false)); // string
console.log([] + false - null); // NaN
console.log(typeof([] + false - null)); // Number
console.log([] + false - null + true); // NaN
console.log(typeof([] + false - null + true)); // Number
console.log([] + false - null + true); // NaN
// ___________________________
let y = 1;
let x = y = 2;
console.log(x); // 2
// ___________________________
console.log([] + 1 + 2); // 12 // string
// ___________________________
console.log('1'[0]);  // 1 // string
// ___________________________

// как только доходим до null
// цепочка прерывается так как null  это false
// в итоге вернет null
// и запинается на лжи
console.log(2 && 1 && null && 0 && undefined); // null // object
// ___________________________

console.log(!!( 1 && 2) === (1 && 2)); // false
// ___________________________

// тут нам поможет таблица приоритетов опрераторов
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence?retiredLocale=uk
// чем выше цыфра в первом столбце тем выше приоритет выполения
// тоесть && выполнится первым 
// 2 && 3 вернет 3
// || или запинается на правде
// null || 3 - не правда т вернется 3
// 3 || 4 или то или то будет true и вернется 3
console.log(null || 2 && 3 || 4); // 3
// ___________________________

// false так как переменные а и б это разные переменные 
// просто у них одинаковое содержимое 
const a = [1,2,3],
      b = [1,2,3];
console.log(a===b); // false
// ___________________________

console.log(+'Infinity'); // Infinity // number

// ___________________________
// сравнение строк идет по символьно
console.log('Ежик' > 'яблоко'); // false
console.log('ежиииии' > 'яблоко'); // false
console.log('2яблоко' > 'яблоко'); // false
console.log('яблоко2' > 'яблоко'); // true
console.log('Яблоко' === 'яблоко'); // false // из за юникода юольшой буквы
// ___________________________

// или запинактся на правде
console.log( 0 || "" || 2 || undefined || true || false ); // 2