// setTimeout
// первый аргумент анонимная функции (можно и именованную)
// вторым время в милисикундах через которое выполнится скрипт
// третим можно указать аргумент который будет передаваться в анонимную функцию
const timerId = setTimeout(function(text) {
    console.log(text); 
 }, 2000, 'Hello');
 
// также можно передавать готовую функцию
 const timerIdS = setTimeout(logger, 2000);
 function logger () {
     console.log('text');
 }
 
// остановка таймера
 clearInterval(timerId);
 clearInterval(timerIdS);
 
// пример из практики setTimeout/clearInterval
 const btn = document.querySelector('.btn');
 
 btn.addEventListener('click', () => {
     const timerIdS2 = setTimeout(loggerS, 2000);
 });
 
 function loggerS () {
     console.log('text');
 }
 
// setInterval
// все то же самое что и setTimeout но выполняться будет каждые 2 секунды
// пример из практики setTimeout/clearInterval
// для остановки setInterval/setTimeout нужно создать голобальную переменную
// в нашем случае let timerIdS2
 const btn2 = document.querySelector('.btn2');
 let timerIdS2,
    i = 0; // дает понять сколько раз выполнится функция и потом мы задействуем  clearInterval
 
 btn2.addEventListener('click', () => {
     timerIdS2 = setInterval(loggerS2, 500);
 });
// !!!! ВАЖНО учитывать что если функция loggerS2 выполняется больше чем 500мс setInterval не будет жлать конца ее выполнения
// для решения этой проблемы нужно вызывать рекурсивный setTimeout 
 function loggerS2 () {
     if (i === 3) {
        clearInterval(timerIdS2);
     }
     console.log('text');
     i++; // увеличиваем i  при каждом выполнении функции
 }

// -->> рекурсивный setTimeout пример
// таким образом функция дождется конца выполнения 
let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500)