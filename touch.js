// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    
    // при нажатии на мобильном девайсе
    box.addEventListener('touchstart', (e) => {
        // на всякий случай отменяем стандартное поведение
        e.preventDefault();

        console.log('start');
        // кол-во пальцев на экране
        console.log(e.touches);
        // кол-во пальцев на элементе
        console.log(e.targetTouches);
    })

    // при движении  на мобильном девайсе в рамках элемента box
    box.addEventListener('touchmove', (e) => {
        // на всякий случай отменяем стандартное поведение
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
        console.log('move');
    })

    // при покидании  на мобильном девайсе в рамках элемента box
    box.addEventListener('touchend', (e) => {
        // на всякий случай отменяем стандартное поведение
        e.preventDefault();

        console.log('end');
    })
})

// свойства 
// touches - все пальцы на экране
// targetTouches - все пальцы которые взаимодействуют с элементом
// chengedTouches - cписок пальцев которые учасвуют в текущем событии (совершили действие)

// на помощь при работе с событиями маленькая библиотека hammer.min.js 