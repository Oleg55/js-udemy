// определяем текущую дату
const now = new Date();
console.log(now);

// задаем дату
const now2 = new Date(2020,5,1, 20);
// 2020-06-01T17:00:00.000Z
// 6 месяц так как месяца от 0 идут, а 17 часов из-за времменого пояса + 3 
console.log(now2);
// можно передать в милисекундах
const date = new Date(0); // 1970-01-01T00:00:00.000Z
// начало отсчета 1970-01-01T00:00:00.000Z
// до 1970
const date2 = new Date(-99999999); // 1969-12-30T20:13:20.001Z
console.log(date2);


// получение компонентов даты

const date3 = new Date();

console.log(date3.getFullYear());
console.log(date3.getMonth());
console.log(date3.getDate()); // и т.д.
console.log(date3.getDay()); // получаем день недели начинается с ВС = 0
console.log(date3.getTime()); // кол-во миллисекунд с 1970-01-01 до нынешнего времени

// установка даты
// принцип похож на получение даты но с приставкой set
const date4 = new Date();
console.log(date4.setHours(18));
console.log(date4);

// метод Parse
const dateParse = Date.parse('2021-04-01'); 
console.log(dateParse);

// работа с датами пример (мини бенчмарк)

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);

