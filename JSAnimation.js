// подход к анимации через setInterval имеет ряд недочетов:
// при переключении на другую вколадку в браузере анимация продолжается без нас
// установка вручную как именно будет покадрово происходить анимация (10 строка)
// все это приводит к рассинхронизации обновления кадров монитора и обновления кадров браузера
// и при большой нагрузке на ресурсы PC заметны лаги
// ниже представлен именно подход к анимации через setInterval
const btn = document.querySelector('.btn');
const elem = document.querySelector('.inSide');
const btn2 = document.querySelector('.btn2');

function myAnimation() {
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        console.log(pos);
        if (pos == 240) {
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

        }
    }
}
btn.addEventListener('click', myAnimation);


// Для решения всех выше перечисленных проблем была создана новая функция
// requestAnimationFrame
// берет нашу анимицию и подстраивает ее под частоту обновления нашего браузера
// это добавляет плавности и снижает нагрузку

let pos = 0;
function AnimationFrame() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + "px";
    if(pos < 240) {
        requestAnimationFrame(AnimationFrame);
    }
}
// запуск функции 
btn2.addEventListener('click',() => requestAnimationFrame(AnimationFrame));

// более сложные примеры можно увидеть https://learn.javascript.ru/js-animation